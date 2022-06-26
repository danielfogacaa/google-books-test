export interface IBook {
  kind: string;
  id: string;
  selfLink: string;
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
      smallThumbnail: string;
      thumbnail: string;
    },
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
  },
}

export interface IBookList {
  kind: string;
  totalItems: number;
  items: IBook[];
}