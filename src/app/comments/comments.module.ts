import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentAddFormComponent } from './commponents/comment-add-form/comment-add-form.component';
import { CommentListComponent } from './commponents/comment-list/comment-list.component';
import { CommentListItemComponent } from './commponents/comment-list-item/comment-list-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CommentAddFormComponent, CommentListComponent, CommentListItemComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:
  [
    CommentAddFormComponent,
    CommentListComponent
  ]
})
export class CommentsModule { }
