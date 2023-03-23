import { IAuthor } from "./author";

export interface IArticle {
  slug: string;
  author: IAuthor;
  body: string;
  createdAt: Date;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  tagList: string[];
  title: string;
  updatedAt: Date;
}
