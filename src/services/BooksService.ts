import { IBookList } from 'interfaces';
import { Api } from 'providers';

const getAll = () => Api.get<IBookList>('/volumes?q=hoje');

export const BooksService = {
  getAll,
};