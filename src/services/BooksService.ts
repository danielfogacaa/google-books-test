import { IBookList } from '@/interfaces';
import { Api } from '@/providers';

const getAll = (searchText: string, startIndex: number) => {
  console.log({ startIndex });
  return Api.get<IBookList>(`/volumes?q=${searchText}&startIndex=${startIndex}`);
};

export const BooksService = {
  getAll,
};