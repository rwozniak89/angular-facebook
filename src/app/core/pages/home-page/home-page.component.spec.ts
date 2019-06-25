import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { PostsModule } from 'src/app/posts/posts.module';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from 'src/app/shared/services/posts.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'src/app/shared/shared.module';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let $component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HomePageComponent ],
      imports: [
        PostsModule,
        SharedModule,
        HttpClientTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
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
