import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { SharedModule } from '../shared/shared.module';
import { PostProfilePageComponent } from './pages/post-profile-page/post-profile-page.component';
import { RouterModule } from '@angular/router';
import { CommentsModule } from '../comments/comments.module';

@NgModule({
  declarations: [
    PostListComponent, 
    PostListItemComponent, 
    PostProfilePageComponent,
    
  ],

  exports: [
    PostListComponent, 
    PostListItemComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    CommentsModule
  ]
})
export class PostsModule { }
