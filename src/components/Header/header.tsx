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
  -webkit-box-shadow: 0px 7px 14px -3px rgba(0, 0, 0, 0.47);
  box-shadow: 0px 7px 14px -3px rgba(0, 0, 0, 0.47);
  ${space}
  ${flexbox} 
  ${color}
`;
