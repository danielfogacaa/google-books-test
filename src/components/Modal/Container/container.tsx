import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: clamp(300px, 90%, 800px);
  margin: auto;
  background: ${(props) => props.theme.colors.primary};
  padding: 2rem;
  border-radius: 12px;
`;
