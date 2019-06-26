import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAddFormComponent } from './post-add-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('PostAddFormComponent', () => {
  let component: PostAddFormComponent;
  let fixture: ComponentFixture<PostAddFormComponent>;
  let $component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAddFormComponent ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAddFormComponent);
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
