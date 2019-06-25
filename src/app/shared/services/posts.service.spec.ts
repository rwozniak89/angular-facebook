import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostsService } from './posts.service';
import { IPostList } from '../interfaces/post-list.interface';
import { IPostListItem } from '../interfaces/post-list-item.interface';

describe('PostsService', () => {

  let httpMock: HttpTestingController;
  let service: PostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]

  });

    httpMock = TestBed.get(HttpTestingController);
    service  = TestBed.get(PostsService);
    console.log('beforeEach() nr 1');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getPosts', () => {
    beforeEach(() => {
      console.log('beforeEach() nr 2');
    }
     
    );
  
    it('should contain method "getPosts"', () => {
      expect(service.getPosts).toEqual(
        jasmine.any(Function)
      );
    });
  
    it('should make HTTP request', async () => {
      // 1. zarejestrować request
      const response = service.getPosts();
      // 2. utworzyć serwer HTTP, który będzie zwracał mockowe dane
      const server = httpMock.expectOne('assets/posts.json');
      // 2b. Zwracamy dane testowe

      let fakePostList = [
        { id: '1' },
        { id: '2' },
      ] as IPostList
    

      server.flush({
        posts: fakePostList
      });
      // 3. Pobrać dane z responsa 
      const posts = await response;

      // 4. Sprawdzić poprawność otrzymanych danych
      expect(posts).toEqual(fakePostList)

    });
  
  });
  

});

