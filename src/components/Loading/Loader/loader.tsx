import styled, { keyframes } from 'styled-components';

const morph = keyframes`
  0% { 
    border-radius: 50%;
    transform: rotate(0deg);
    background-color: #358dda;
  }

  50% { 
    border-radius: 0%;
    transform: rotate(180deg);
    background-color: #245195;
  }

  100% { 
    border-radius: 50%;
    transform: rotate(0deg);
    background-color: #2e82cb;
  }
`;

export const Loader = styled.div`
  display: inline-block;
  width: 4rem;
  height: 4rem;
  animation: ${morph} 2s infinite;
  z-index: 100;
`;
