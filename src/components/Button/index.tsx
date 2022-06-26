import styled from 'styled-components';
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  typography,
  TypographyProps
} from 'styled-system';

export const Button = styled.button<ColorProps & LayoutProps & TypographyProps>`
  width: 100%;
  background: transparent;
  color: #fff;
  border-radius: 24px;
  padding: 0.5rem;
  cursor: pointer;
  ${color}
  ${layout}
  ${typography}

  &:hover {
    filter: brightness(0.9);
  }
`;
