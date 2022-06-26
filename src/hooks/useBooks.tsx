import { useCallback, useState } from 'react';
import { IBookList, IBook } from '../interfaces';
import { BooksService } from '../services';

import * as _ from 'lodash';
import toast from 'react-hot-toast';

export const useBooks = () => {
  const [listInfo, setListInfo] = useState<Omit<IBookList, 'items'>>({
    kind: '',
    totalItems: 0
  });
  const [bookList, setBookList] = useState<IBook[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [startIndex, setStartIndex] = useState<number>(0);

  const getAll = useCallback(
    async (searchText: string, loadMore?: boolean) => {
      setIsLoading(true);
      const { status, data } = await BooksService.getAll(
        searchText,
        loadMore ? startIndex : 0
      );

      if (status !== 200) {
        toast.error(`Erro ao buscar os livros!`);
        throw new Error();
      }
      if (!data.items) {
        toast.error('Nenhum livro encontrado!');
        setBookList([]);
        setIsLoading(false);
        throw new Error();
      }
      setStartIndex((oldState) => (loadMore ? oldState + 10 : 10));
      setListInfo(_.omit(data, 'items'));
      setBookList((oldState) =>
        loadMore ? [...oldState, ...data.items] : data.items
      );
      setIsLoading(false);
    },
    [startIndex]
  );

  return { listInfo, bookList, getAll, isLoading, startIndex };
};
