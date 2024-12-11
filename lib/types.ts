export interface Comic {
  id: number;
  title: string;
  cover: string;
  author: string;
  genre: string;
  isNew?: boolean;
  description?: string;
  chapters?: Chapter[];
  views?: number;
  rating?: number;
  status?: 'ongoing' | 'completed' | 'hiatus';
}

export interface Chapter {
  id: number;
  title: string;
  number: number;
  uploadDate: string;
  pages: string[];
}

export interface User {
  id: number;
  username: string;
  avatar: string;
  bio?: string;
  followers: number;
  following: number;
  uploads: Comic[];
  savedComics: Comic[];
  recentlyRead: Comic[];
}