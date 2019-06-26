import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponsePosts } from '../interfaces/response/response-posts.interface';
import { IPostList } from '../interfaces/post-list.interface';
import { IPostListItem } from '../interfaces/post-list-item.interface';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';



// export interface IResponsePosts {
//   posts: Post[];

// }

const STORAGE_POST_KEYNAME = 'posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) { }

  // getPosts() {
  //   return this.http.get('environment.postsUrl').toPromise();
  // }
  async getPosts(){
    const posts = this.storage.read(STORAGE_POST_KEYNAME);
    if(!posts){
      const freshPosts = await this.fetchPosts();
      this.storage.create(STORAGE_POST_KEYNAME, freshPosts)
      return freshPosts;
    }
    return posts;
  }

  async fetchPosts() : Promise<IPostList> {
    const repsponse = await this.http.get<IResponsePosts>(environment.postsUrl).toPromise();
    return repsponse.posts;
  }

  async getPostById(postId: string){

    const posts = await this.getPosts();
    // const foundPost = posts.find( post => post.id == post_id);
    // return post;
    const foundPost = posts.find( (post) => {
      return post.id === postId
    });

    return foundPost;

  }

  async savePosts(posts: IPostList){
    this.storage.create(STORAGE_POST_KEYNAME, posts);
  }


}
