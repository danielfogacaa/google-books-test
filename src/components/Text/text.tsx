import styled from 'styled-components';
import {
  typography,
  TypographyProps,
  color,
  ColorProps,
  space,
  SpaceProps,
  flexbox,
  FlexboxProps
} from 'styled-system';

type TextProps = {
  lineClamp?: number | string;
};

export const Text = styled.p<
  TypographyProps & ColorProps & SpaceProps & FlexboxProps & TextProps
>`
  color: ${(props) => props.theme.colors.primary};
  overflow: hidden;
  overflow-wrap: anywhere;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.lineClamp || 3};
  -webkit-box-orient: vertical;
  ${color}
  ${typography}
  ${space}
  ${flexbox}
`;
