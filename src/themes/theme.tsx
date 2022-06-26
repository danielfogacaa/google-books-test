import React from 'react';
import { ThemeProvider } from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const primary = '#eeeeee';
const secondary = '#2764c4';
const orange = '#d27f0a';

const theme = {
  colors: {
    primary,
    secondary,
    orange
  }
};

export type ThemeType = typeof theme;

export const Theme: React.FC<Props> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
