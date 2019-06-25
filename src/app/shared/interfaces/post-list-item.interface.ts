import { IAuthor } from './author.interface';

export interface IPostListItem {
    id:           string;
    created_time: string;
    author:       IAuthor;
    body:         string;
    images:       string[];
  }
  