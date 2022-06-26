import styled from 'styled-components';
import {
  space,
  SpaceProps,
  flexbox,
  FlexboxProps,
  color,
  ColorProps
} from 'styled-system';

export const Header = styled.div<SpaceProps & FlexboxProps & ColorProps>`
  width: 100%;
  color: ${(props) => props.theme.colors.textPrimary};
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  ${space}
  ${flexbox} 
  ${color}
`;
