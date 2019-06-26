import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import uuid from 'uuid';

@Component({
  selector: 'app-post-add-form',
  templateUrl: './post-add-form.component.html',
  styleUrls: ['./post-add-form.component.css']
})
export class PostAddFormComponent implements OnInit {

 @Output() addPost = new EventEmitter();

  addPostForm = new FormGroup({
body: new FormControl(),
  })

get body(){
  return this.addPostForm.get('body')
}

  constructor() { }

 
  ngOnInit() {
  }

  onSubmit(){
    const fields = this.addPostForm.getRawValue();

    fields.author = {
      id: uuid(),
      name: 'anon',
      avatar_url: 'http://placeskull.com/50/50/E4317F',
    }
    fields.id = uuid();
    fields.create_time = new Date().toUTCString();
    fields.images = 
      [
        'http://placekitten.com/408/287'
      ]

    
    console.log('onSubmit', fields);
    this.addPost.next(Object.assign({}, fields))
  }

}
