import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';

@NgModule({
  declarations: [
    PostListComponent, 
    PostListItemComponent
  ],

  exports: [
    PostListComponent, 
    PostListItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }
