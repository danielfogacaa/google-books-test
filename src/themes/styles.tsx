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

  body{
    background: ${({ theme }) => theme.colors.primary};
  }
`;
