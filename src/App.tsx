import React from 'react';
import { Router } from 'routes';
import { Theme } from 'themes';
import { GlobalStyles } from 'themes/styles';

export const App = () => {
  return (
    <Theme>
      <GlobalStyles />
      <Router />
    </Theme>
  );
};

export default App;
