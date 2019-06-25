import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostsService } from './posts.service';
import { IPostList } from '../interfaces/post-list.interface';
import { IPostListItem } from '../interfaces/post-list-item.interface';
import { environment } from 'src/environments/environment.prod';

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
      const server = httpMock.expectOne(environment.postsUrl);
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

    it('should give by HTTP by get one post by id ', async () => {
 

      const postId : string = 'aaaaaaaaaa'//'f981825f-a635-51d3-adf2-7b48ad6c4acb';

      const response = service.getPostById(postId);

      const server = httpMock.expectOne(environment.postsUrl);

      const fakePost = { id: 'aaaaaaaaaa'} as IPostListItem; 

      // let fakePost2 = {
      //   "id": "f981825f-a635-51d3-adf2-7b48ad6c4acb",
      //   "created_time": "Mon Sep 03 2018 12:29:46 GMT+0200 (czas środkowoeuropejski letni)",
      //   "author": {
      //     "id": "a1c4085d-8231-5942-ba87-46f6cb6d95b5",
      //     "name": "Sarina Ryan",
      //     "avatar_url": "https://s3.amazonaws.com/uifaces/faces/twitter/canapud/128.jpg"
      //   },
      //   "body": "Ucwobujo bepwemah siad amajaobi zag ow ripvas obe lifdiped lesojame huahu uvino delugalaj vihdejuwa soburuv vebeugo fenu.",
      //   "images": [
      //     "https://picsum.photos/id/11/300/150/",
      //     "https://picsum.photos/id/655/300/150/",
      //     "https://picsum.photos/id/809/300/150/",
      //     "https://picsum.photos/id/500/300/150/",
      //     "https://picsum.photos/id/225/300/150/"
      //   ]
      // } as IPostListItem

      const fakePostList = [
        fakePost,
        { id: 'bbbbbbb' },
      ] as IPostList
    

      server.flush(
        {
          posts: fakePostList
        }
      );

      const posts = await response;

      // 4. Sprawdzić poprawność otrzymanych danych
      expect(posts).toEqual(fakePost);

    });
  
  });
  

});

