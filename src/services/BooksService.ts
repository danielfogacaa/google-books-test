import { IBookList, IBook } from '@/interfaces';
import { Api } from '@/providers';

const getAll = (searchText: string, startIndex: number) => Api.get<IBookList>(`/volumes?q=${searchText}&startIndex=${startIndex}`);

const getBook = (id: string) =>
  Api.get<IBook>(`/volumes/${id}`);

export const BooksService = {
  getAll,
  getBook
};