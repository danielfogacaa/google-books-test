import { useCallback, useState } from 'react';
import { IBookList, IBook } from '../interfaces';
import { BooksService } from '../services';
import * as _ from 'lodash';

export const useBooks = () => {
  const [listInfo, setListInfo] = useState<Omit<IBookList, 'items'>>();
  const [bookList, setBookList] = useState<IBook[]>([]);

  const getAll = useCallback(async (searchText: string) => {
    const { status, data } = await BooksService.getAll(searchText);

    if (status !== 200) throw new Error();

    setListInfo(_.omit(data, 'items'));
    setBookList((oldState) => [...oldState, ...data.items]);
  }, []);

  return { listInfo, bookList, getAll };
};
