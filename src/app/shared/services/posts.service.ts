import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponsePosts } from '../interfaces/response/response-posts.interface';
import { IPostList } from '../interfaces/post-list.interface';


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
  //   return this.http.get('assets/posts.json').toPromise();
  // }
  async getPosts() : Promise<IPostList> {
    const repsponse = await this.http.get<IResponsePosts>('assets/posts.json').toPromise();
    return repsponse.posts;
  }


}
