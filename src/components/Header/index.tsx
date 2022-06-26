import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

export const Header = styled.div<SpaceProps>`
  background: #2444b0;
  color: ${(props) => props.theme.colors.textPrimary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  ${space}
`;
