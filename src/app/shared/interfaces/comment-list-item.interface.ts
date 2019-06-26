import { IAuthor } from './author.interface';

export interface ICommentListItem {
    id: string;
    body: string;
    created_time: string;
    author: IAuthor;
}
