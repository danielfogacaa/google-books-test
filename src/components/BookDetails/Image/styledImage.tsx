import styled from 'styled-components';
import { background, BackgroundProps, color, ColorProps } from 'styled-system';

export const StyledImage = styled.div<BackgroundProps & ColorProps>`
  width: 100%;
  min-height: 300px;
  max-width: 200px;
  max-height: 270px;
  background-size: cover;
  background-position: initial;
  box-shadow: 0px 7px 14px -3px rgba(0, 0, 0, 0.47);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  ${background}
`;
