import { IBook, IBookList } from './IBooks';

export type UseBookContextType = {
  listInfo: Omit<IBookList, 'items'>;
  bookList: IBook[];
  bookDetails: IBook;
  searchText: string;
  setSearchText: any;
  isLoading: boolean;
  startIndex: number;
  getAll: (loadMore?: boolean) => void;
  getBook: (id: string) => void;
  getFavoriteList: () => void;
  favoriteBook: (unfavorite?: boolean) => void;
};