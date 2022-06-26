import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Router } from 'routes';
import { Theme } from 'themes';
import { GlobalStyles } from 'themes/styles';
import { BooksProvider } from '@/contexts';

export const App = () => {
  return (
    <Theme>
      <BooksProvider>
        <GlobalStyles />
        <Toaster position='top-right' />
        <Router />
      </BooksProvider>
    </Theme>
  );
};

export default App;
