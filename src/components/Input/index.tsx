import styled from 'styled-components';
import { layout, LayoutProps } from 'styled-system';

export const Input = styled.input<LayoutProps>`
  background: transparent;
  color: #fff;
  border-bottom: 1px solid #fff;
  font-size: 1.2rem;
  ${layout}

  &::placeholder {
    color: #ffffffbb;
  }
`;
