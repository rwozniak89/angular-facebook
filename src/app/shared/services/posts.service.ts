import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponsePosts } from '../interfaces/response/response-posts.interface';
import { IPostList } from '../interfaces/post-list.interface';
import { IPostListItem } from '../interfaces/post-list-item.interface';
import { environment } from 'src/environments/environment';



// export interface IResponsePosts {
//   posts: Post[];

// }



@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) { }

  // getPosts() {
  //   return this.http.get('environment.postsUrl').toPromise();
  // }
  async getPosts() : Promise<IPostList> {
    const repsponse = await this.http.get<IResponsePosts>(environment.postsUrl).toPromise();
    return repsponse.posts;
  }

  async getPostById(post_id: string) : Promise<IPostListItem> {

    const posts = await this.getPosts();

    // const foundPost = posts.find( post => post.id == post_id);
    // return post;

    const foundPost = posts.find( (post) => {
      return post.id === post_id
    });


    return foundPost;

  }


}
