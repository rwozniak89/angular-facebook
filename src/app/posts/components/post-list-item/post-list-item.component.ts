import { Component, OnInit, Input } from '@angular/core';
import { isArray } from 'util';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {


  @Input() post = null;
  

  constructor() { }

  ngOnInit() {
  }

  onAddComment(comment){
    console.log('onAddComment', comment);

    if(!Array.isArray(this.post.comments)){
      this.post.comments = [];
    }

    this.post.comments.push(comment);


  }

}
