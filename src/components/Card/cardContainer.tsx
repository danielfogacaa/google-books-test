import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex: 1 1 350px;
  min-width: 450px;
  max-width: 600px;
  height: 240px;
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 0.5rem;
  overflow: hidden;
`;
