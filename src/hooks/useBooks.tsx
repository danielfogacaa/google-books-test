import { useCallback, useState } from 'react';
import { IBookList, IBook } from '../interfaces';
import { BooksService } from '../services';

import * as _ from 'lodash';
import toast from 'react-hot-toast';

export const useBooks = () => {
  const [listInfo, setListInfo] = useState<Omit<IBookList, 'items'>>();
  const [bookList, setBookList] = useState<IBook[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getAll = useCallback(
    async (searchText: string, newSearch?: boolean) => {
      setIsLoading(true);
      const { status, data } = await BooksService.getAll(searchText);

      if (status !== 200) {
        toast.error(`Erro ao buscar os livros!`);
        throw new Error();
      }
      setBookList((oldState) =>
        newSearch ? data.items : [...oldState, ...data.items]
      );
      setIsLoading(false);
    },
    []
  );

  return { listInfo, bookList, getAll, isLoading };
};
