import { Component, OnInit, Input } from '@angular/core';
import { ICommentListItem } from 'src/app/shared/interfaces/comment-list-item.interface';

@Component({
  selector: 'app-comment-list-item',
  templateUrl: './comment-list-item.component.html',
  styleUrls: ['./comment-list-item.component.css']
})
export class CommentListItemComponent implements OnInit {


  @Input() comment: ICommentListItem = null;
  
  constructor() { }

  ngOnInit() {
  }

  getCommentAuthorAvatarUrl(){
    return "http://placeskull.com/50/50/"
  }

}
