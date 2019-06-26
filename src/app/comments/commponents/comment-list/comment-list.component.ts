import { Component, OnInit, Input } from '@angular/core';
import { ICommentList } from 'src/app/shared/interfaces/comment-list.interface';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  @Input() comments: ICommentList = null;

  constructor() { }

  ngOnInit() {
  }

}
