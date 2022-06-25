import { useCallback, useState } from 'react';
import { IBookList, IBook } from '../interfaces';
import { BooksService } from '../services';
import toast from 'react-hot-toast';

import * as _ from 'lodash';

export const useBooks = () => {
  const [listInfo, setListInfo] = useState<Omit<IBookList, 'items'>>();
  const [bookList, setBookList] = useState<IBook[]>([]);

  const getAll = useCallback(async (searchText: string) => {
    if (!searchText) {
      toast.error(
        `Você deve digitar algo para que possamos encontrar seu livro!`
      );
      return;
    }
    const { status, data } = await BooksService.getAll(searchText);

    if (status !== 200) throw new Error();
    //toast.error(`Erro ao buscar os livros!`);
    setListInfo(_.omit(data, 'items'));
    setBookList((oldState) => [...oldState, ...data.items]);
  }, []);

  return { listInfo, bookList, getAll };
};
