import styled from 'styled-components';
import { background, BackgroundProps } from 'styled-system';

export const ThumbContainer = styled.div`
  flex: 1;
  width: 33%;
  max-width: 12.5rem;
  background-color: transparent;
  margin-left: -1.2rem;
`;

export const ThumbImage = styled.div<BackgroundProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  height: 100%;
  background: ${(props) => props.theme.colors.textPrimary};
  background-size: cover;
  background-position: initial;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%);
  ${background}
`;
