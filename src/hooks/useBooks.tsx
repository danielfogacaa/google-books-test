import { useCallback, useState } from 'react';
import { IBookList } from '../interfaces';
import { BooksService } from '../services';

export const useBooks = () => {
  const [bookList, setBookList] = useState<IBookList>();

  const getAll = useCallback(async () => {
    const { status, data } = await BooksService.getAll();

    if (status !== 200) throw new Error();

    setBookList(data);
  }, []);

  return { bookList, getAll };
};
