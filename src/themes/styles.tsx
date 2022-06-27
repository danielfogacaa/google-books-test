import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  *{
    margin:0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Oswald', sans-serif;
    *:focus {
      outline: none;
    }
  }

  html {
    scroll-behavior: smooth;
  }

  body{
    background: ${({ theme }) => theme.colors.primary};
  }
    
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(196, 196, 196, 0.3);
  }
  ::-webkit-scrollbar-thumb {
    background: #c4c4c4;
    border-radius: 6px;
  }
  `;
