import styled from 'styled-components';

export const Backdrop = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  background: #2d2d2d9c;
  color: ${(props) => props.theme.colors.textPrimary};
  z-index: 99;
`;
