import { IBookList } from '@/interfaces';
import { Api } from '@/providers';

const getAll = (searchText: string) => Api.get<IBookList>(`/volumes?q=${searchText}`);

export const BooksService = {
  getAll,
};