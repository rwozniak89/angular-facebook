import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  allPosts = null;


  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.setupPosts();
  }

  async setupPosts(){
    this.allPosts = await this.postsService.getPosts();
  }

  onAddPost(post){
    this.allPosts.unshift(post);
    this.postsService.savePosts(this.allPosts);
  }

}
