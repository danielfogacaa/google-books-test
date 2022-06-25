import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Router } from 'routes';
import { Theme } from 'themes';
import { GlobalStyles } from 'themes/styles';

export const App = () => {
  return (
    <Theme>
      <GlobalStyles />
      <Toaster position='top-right' />
      <Router />
    </Theme>
  );
};

export default App;
