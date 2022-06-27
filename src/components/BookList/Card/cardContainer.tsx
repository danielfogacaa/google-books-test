import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex: 1 1 350px;
  min-width: 365px;
  max-width: 600px;
  height: 240px;
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    -webkit-box-shadow: 0px 7px 14px -3px rgba(0, 0, 0, 0.47);
    box-shadow: 0px 7px 14px -3px rgba(0, 0, 0, 0.47);
    transform: scale(1.03);
  }
`;
