import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from './services/posts.service';

@NgModule({
  declarations: [],

  imports: [
    CommonModule
  ],
  providers: [
    PostsService
  ]
})
export class SharedModule { }
