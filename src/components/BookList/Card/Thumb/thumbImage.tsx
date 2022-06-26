import styled from 'styled-components';
import {
  background,
  BackgroundProps,
  layout,
  LayoutProps
} from 'styled-system';

type ThumbProps = {
  clamp?: boolean;
};

export const ThumbImage = styled.div<
  BackgroundProps & LayoutProps & ThumbProps
>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  height: 100%;
  background: ${(props) => props.theme.colors.textPrimary};
  background-size: cover;
  background-position: initial;
  clip-path: ${(props) =>
    props.clamp ? 'polygon(0 0, 100% 0, 100% 100%, 15% 100%)' : 'none'};
  ${background}
  ${layout}
`;
