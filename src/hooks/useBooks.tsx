// import { useCallback, useState } from 'react';
// import { IBookList, IBook } from '../interfaces';
// import { BooksService } from '../services';

// import * as _ from 'lodash';
// import toast from 'react-hot-toast';

// export const useBooks = () => {
//   const [listInfo, setListInfo] = useState<Omit<IBookList, 'items'>>({
//     kind: '',
//     totalItems: 0
//   });
//   const [bookList, setBookList] = useState<IBook[]>([]);
//   const [bookDetails, setBookDetails] = useState<IBook>();
//   const [startIndex, setStartIndex] = useState<number>(0);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   console.log({ bookList });

//   const getAll = useCallback(
//     async (searchText: string, loadMore?: boolean) => {
//       setIsLoading(true);
//       const { status, data } = await BooksService.getAll(
//         searchText,
//         loadMore ? startIndex : 0
//       );

//       if (status !== 200) {
//         toast.error(`Erro ao buscar os livros!`);
//         throw new Error();
//       }
//       if (!data.items) {
//         toast.error('Nenhum livro encontrado!');
//         setBookList([]);
//         setIsLoading(false);
//         throw new Error();
//       }
//       setStartIndex((oldState) => (loadMore ? oldState + 10 : 10));
//       setListInfo(_.omit(data, 'items'));
//       setBookList((oldState) =>
//         loadMore ? [...oldState, ...data.items] : data.items
//       );
//       setIsLoading(false);
//     },
//     [startIndex]
//   );

//   const getBook = useCallback(
//     async (id: string) => {
//       setIsLoading(true);
//       if (!bookList.length) {
//         console.log('111111');
//         const { status, data } = await BooksService.getBook(id);

//         if (status !== 200) {
//           toast.error(`Erro ao trazer informações do livro!`);
//           throw new Error();
//         }
//         setBookDetails(data);
//       } else {
//         console.log('222222');
//         setBookDetails(bookList.find((book) => book.id === id));
//       }
//       setIsLoading(false);
//     },
//     [bookList]
//   );

//   return {
//     getAll,
//     getBook,
//     listInfo,
//     bookList,
//     bookDetails,
//     isLoading,
//     startIndex
//   };
// };

import { useContext } from 'react';
import { BooksContext } from '@/contexts';
import { UseBookContextType } from '@/interfaces';

export const useBooks = (): UseBookContextType => useContext(BooksContext);
