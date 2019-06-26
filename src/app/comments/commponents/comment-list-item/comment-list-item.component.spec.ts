import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentListItemComponent } from './comment-list-item.component';
import { ICommentListItem } from 'src/app/shared/interfaces/comment-list-item.interface';

describe('CommentListItemComponent', () => {
  let component: CommentListItemComponent;
  let fixture: ComponentFixture<CommentListItemComponent>;
  let $component: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentListItemComponent);
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
  
  it('should display comment', () => {

    component.comment = {body: 'Jakiś komentarz'} as ICommentListItem;

    fixture.detectChanges();
    const $body = $component.querySelector('.comment-body')
    expect($body.textContent.trim()).toEqual('Jakiś komentarz')
  });
});
