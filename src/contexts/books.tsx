import React, { useCallback, useMemo, useState } from 'react';
import { UseBookContextType, IBookList, IBook } from '@/interfaces';
import { BooksService } from '@/services';
import toast from 'react-hot-toast';
import _ from 'lodash';

export const BooksContext = React.createContext<UseBookContextType>(null);

export const BooksProvider = (props: any) => {
  const initialDetailsState: IBook = useMemo(() => {
    return {
      id: '',
      volumeInfo: {
        title: '',
        authors: [],
        categories: [],
        pageCount: 0,
        publishedDate: '',
        description: '',
        imageLinks: {
          thumbnail: ''
        },
        infoLink: '',
        previewLink: '',
        publisher: ''
      }
    };
  }, []);
  const [listInfo, setListInfo] = useState<Omit<IBookList, 'items'>>({
    kind: '',
    totalItems: 0
  });
  const [bookList, setBookList] = useState<IBook[]>([]);
  const [bookDetails, setBookDetails] = useState<IBook>(initialDetailsState);
  const [searchText, setSearchText] = useState<string>('');
  const [startIndex, setStartIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getAll = useCallback(
    async (loadMore?: boolean) => {
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
    [searchText, startIndex]
  );

  const getBook = useCallback(
    async (id: string) => {
      setIsLoading(true);
      const book = bookList.find((book) => book.id === id);
      if (!book) {
        const { status, data } = await BooksService.getBook(id);

        if (status !== 200) {
          toast.error(`Erro ao trazer informações do livro!`);
          throw new Error();
        }
        setBookDetails(data);
      } else {
        setBookDetails(book);
      }
      setIsLoading(false);
    },
    [bookList]
  );
  return (
    <BooksContext.Provider
      value={{
        getAll,
        getBook,
        listInfo,
        bookList,
        bookDetails,
        searchText,
        setSearchText,
        isLoading,
        startIndex
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};

export const useBooks = () => React.useContext(BooksContext);
