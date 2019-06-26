import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentListComponent } from './comment-list.component';
import { ICommentListItem } from 'src/app/shared/interfaces/comment-list-item.interface';
import { CommentListItemComponent } from '../comment-list-item/comment-list-item.component';

describe('CommentListComponent', () => {
  let component: CommentListComponent;
  let fixture: ComponentFixture<CommentListComponent>;
  let $component: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentListComponent,
      CommentListItemComponent
     ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentListComponent);
    component = fixture.componentInstance;
    $component = fixture.nativeElement;
    fixture.detectChanges();
  });

  afterEach(()=>{
    $component.remove();
  })


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display list of comments', () => {

    component.comments = [
      {id: '23424cf43f234'} as ICommentListItem,
      {id: 'sdad23e231'} as ICommentListItem,
    ]
    fixture.detectChanges();
    const $comments = $component.querySelectorAll('app-comment-list-item')
    expect($comments.length).toBeGreaterThan(0);
  });
});
