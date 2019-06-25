import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListComponent } from './post-list.component';
import { PostListItemComponent } from '../post-list-item/post-list-item.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;
  let $component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PostListComponent,
        PostListItemComponent 
      ],
       imports: [
        SharedModule,
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    $component = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  afterEach(()=> {
    $component.remove();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
