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
      },
      favorite: false
    };
  }, []);
  const initialInfoListState: Omit<IBookList, 'items'> = useMemo(() => {
    return {
      kind: '',
      totalItems: 0
    };
  }, []);
  const [listInfo, setListInfo] =
    useState<Omit<IBookList, 'items'>>(initialInfoListState);
  const [bookList, setBookList] = useState<IBook[]>([]);
  const [bookDetails, setBookDetails] = useState<IBook>(initialDetailsState);
  const [isFavoriteList, setIsFavoriteList] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const [startIndex, setStartIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadFavorites = useCallback(() => {
    let storageList;
    storageList = JSON.parse(localStorage.getItem('favoriteBookList'));
    return storageList || [];
  }, []);

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
      setIsFavoriteList(false);
      setIsLoading(false);
    },
    [searchText, startIndex]
  );

  const getBook = useCallback(
    async (id: string) => {
      setIsLoading(true);
      const book = bookList.find((book) => book.id === id);
      const favoriteList = loadFavorites();
      if (!book) {
        try {
          const { status, data } = await BooksService.getBook(id);

          setBookDetails({
            ...data,
            favorite: favoriteList?.length
              ? favoriteList.filter((book: IBook) => book.id === id)?.length > 0
              : false
          });
          if (status !== 200) {
            setBookDetails(initialDetailsState);
            setIsLoading(false);
          }
        } catch (error: any) {
          setIsLoading(false);
          throw new Error(error?.message);
        }
      } else {
        setBookDetails({
          ...book,
          favorite:
            favoriteList.filter((book: IBook) => book.id === id).length > 0
        });
      }
      setIsLoading(false);
    },
    [bookList, initialDetailsState, loadFavorites]
  );

  const getFavoriteList = useCallback(() => {
    const favoriteList = loadFavorites();
    setBookList(favoriteList);
    setListInfo(initialInfoListState);
    setIsFavoriteList(true);
  }, [initialInfoListState, loadFavorites]);

  const favoriteBook = useCallback(
    (unfavorite: boolean) => {
      const favoriteList = loadFavorites();
      const updatedList = !unfavorite
        ? [...favoriteList, bookDetails]
        : favoriteList.filter((book: IBook) => book.id !== bookDetails.id);
      localStorage.setItem('favoriteBookList', JSON.stringify(updatedList));
      setBookList((oldState) => (isFavoriteList ? updatedList : oldState));
      setBookDetails((oldState) => ({
        ...oldState,
        favorite: !oldState.favorite
      }));
    },
    [bookDetails, isFavoriteList, loadFavorites]
  );

  return (
    <BooksContext.Provider
      value={{
        getAll,
        getBook,
        getFavoriteList,
        favoriteBook,
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
