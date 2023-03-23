import { Author } from "./author";

export interface IArticle {
  slug: string;
  author: Author;
  body: string;
  createdAt: Date;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  tagList: string[];
  title: string;
  updatedAt: Date;
}
