import styled from 'styled-components';
import { flexbox, FlexboxProps, space, SpaceProps } from 'styled-system';

export const Container = styled.div<FlexboxProps & SpaceProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: clamp(300px, 90%, 1600px);
  margin: auto;
  ${flexbox}
  ${space}
`;
