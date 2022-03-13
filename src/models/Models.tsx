export interface BaseModel {
  status: string;
  totalResults: number;
  articles?: News[];
}

export interface News {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content?: null;
}

export interface Source {
  id?: null;
  name: string;
}
