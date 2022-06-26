export interface IBook {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[
    ],
    description: string;
    publisher: string;
    publishedDate: string;
    pageCount: number;
    categories: string[
    ],
    imageLinks: {
      thumbnail: string;
    },
    previewLink: string;
    infoLink: string;
  },
}

export interface IBookList {
  kind: string;
  totalItems: number;
  items: IBook[];
}