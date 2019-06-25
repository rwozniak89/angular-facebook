import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProfilePageComponent } from './post-profile-page.component';
import { PostListItemComponent } from '../../components/post-list-item/post-list-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PostProfilePageComponent', () => {
  let component: PostProfilePageComponent;
  let fixture: ComponentFixture<PostProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PostProfilePageComponent,
        PostListItemComponent
       ],
       imports: [
        SharedModule,
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
