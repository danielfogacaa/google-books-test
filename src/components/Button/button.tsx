import styled from 'styled-components';
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  typography,
  TypographyProps,
  position,
  PositionProps
} from 'styled-system';

type ButtonProps = {
  fixedWidth?: number;
};

export const Button = styled.button<
  ColorProps & LayoutProps & TypographyProps & PositionProps & ButtonProps
>`
  width: ${(props) => props.fixedWidth || '250px'};
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.textPrimary};
  border-radius: 24px;
  padding: 0.5rem;
  cursor: pointer;
  ${color}
  ${layout}
  ${typography}
  ${position}

  @media (max-width: 800px) {
    width: ${(props) => props.fixedWidth || '100%'};
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
