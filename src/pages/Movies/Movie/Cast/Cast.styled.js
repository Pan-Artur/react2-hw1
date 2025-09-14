import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledCast = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 220px);
  grid-template-rows: repeat(1, 410px);
  justify-content: center;
  gap: 24px;
  padding: 0 0 30px 0;

  & > li {
    height: 410px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
    animation: ${fadeIn} 0.6s ease-out forwards;
    opacity: 0;
    
    &:nth-child(1) { animation-delay: 0.1s; }
    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.3s; }
    &:nth-child(4) { animation-delay: 0.4s; }
    &:nth-child(5) { animation-delay: 0.5s; }
    &:nth-child(6) { animation-delay: 0.6s; }
    &:nth-child(7) { animation-delay: 0.7s; }
    &:nth-child(8) { animation-delay: 0.8s; }
    &:nth-child(9) { animation-delay: 0.9s; }
    &:nth-child(10) { animation-delay: 1.0s; }

    & > h3 {
      margin: 10px 0 6px 0;
    }

    & > p {
      font-size: 13px;
    }
  }
`;

export const StyledProfile = styled.img`
  width: 220px;
`;