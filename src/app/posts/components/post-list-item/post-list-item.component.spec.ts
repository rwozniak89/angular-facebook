import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListItemComponent } from './post-list-item.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('PostListItemComponent', () => {
  let component: PostListItemComponent;
  let fixture: ComponentFixture<PostListItemComponent>;
  let $component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PostListItemComponent,
      ],
      imports: [
        SharedModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListItemComponent);
    component = fixture.componentInstance;
    $component = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  afterEach(() => {
    $component.remove();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
