import styled from 'styled-components';
import { flexbox, FlexboxProps, space, SpaceProps } from 'styled-system';

type RowProps = {
  broken?: boolean;
};

export const Row = styled.div<FlexboxProps & SpaceProps & RowProps>`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: '1rem';
  @media (max-width: 800px) {
    flex-direction: ${(props) => (props.broken ? 'column' : 'row')};
  }
  ${flexbox}
  ${space}
`;
