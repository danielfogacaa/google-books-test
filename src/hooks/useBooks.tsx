import { useContext } from 'react';
import { BooksContext } from '@/contexts';
import { UseBookContextType } from '@/interfaces';

export const useBooks = (): UseBookContextType => useContext(BooksContext);
