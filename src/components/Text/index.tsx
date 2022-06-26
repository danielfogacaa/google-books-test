import styled from 'styled-components';
import {
  typography,
  TypographyProps,
  color,
  ColorProps,
  space,
  SpaceProps
} from 'styled-system';

type TextProps = {
  lineClamp?: number;
};

export const Text = styled.p<
  TypographyProps & ColorProps & SpaceProps & TextProps
>`
  color: ${(props) => props.theme.colors.primary};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.lineClamp || 3};
  -webkit-box-orient: vertical;
  ${color}
  ${typography}
  ${space}
`;
