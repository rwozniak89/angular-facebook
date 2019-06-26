import { IAuthor } from './author.interface';
import { ICommentList } from './comment-list.interface';

export interface IPostListItem {
    id:           string;
    created_time: string;
    author:       IAuthor;
    body:         string;
    images:       string[];
    comments?: ICommentList;
  }
  