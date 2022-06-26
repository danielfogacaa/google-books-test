import styled from 'styled-components';
import { layout, LayoutProps } from 'styled-system';

export const Input = styled.input<LayoutProps>`
  background: transparent;
  color: ${(props) => props.theme.colors.textPrimary};
  border-bottom: 1px solid ${(props) => props.theme.colors.textPrimary};
  font-size: 1.2rem;
  ${layout}

  &::placeholder {
    color: #ffffff9f;
  }

  &:focus {
    box-shadow: 0 8px 5px -3px #ffffff40;
  }
`;
