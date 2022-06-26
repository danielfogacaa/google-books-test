import React from 'react';
import { ThemeProvider } from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const primary = '#e2e2e2';
const secondary = '#2764c4';
const textPrimary = '#f0f0f0';
const textSecondary = '#00faff';

const theme = {
  colors: {
    primary,
    secondary,
    textPrimary,
    textSecondary
  }
};

export type ThemeType = typeof theme;

export const Theme: React.FC<Props> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
