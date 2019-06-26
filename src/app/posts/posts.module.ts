import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { SharedModule } from '../shared/shared.module';
import { PostProfilePageComponent } from './pages/post-profile-page/post-profile-page.component';
import { RouterModule } from '@angular/router';
import { CommentsModule } from '../comments/comments.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PostAddFormComponent } from './components/post-add-form/post-add-form.component';

@NgModule({
  declarations: [
    PostListComponent, 
    PostListItemComponent, 
    PostProfilePageComponent, PostAddFormComponent,
    
  ],

  exports: [
    PostListComponent, 
    PostListItemComponent,
    PostAddFormComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    CommentsModule,
    ReactiveFormsModule,
  ]
})
export class PostsModule { }
