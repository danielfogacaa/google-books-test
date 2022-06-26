import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: clamp(300px, 90%, 1600px);
  margin: auto;
  padding-block: 2rem;
`;
