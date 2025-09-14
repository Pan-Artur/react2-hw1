import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledReviews = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 0 0 30px 0;
`;

export const StyledReview = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 25px;
  width: 900px;
  text-align: left;
  background-color: #f6f6f6;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  animation: ${fadeIn} 0.6s ease-out forwards;
  opacity: 0;

  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
  }
  &:nth-child(4) {
    animation-delay: 0.4s;
  }
  &:nth-child(5) {
    animation-delay: 0.5s;
  }
  &:nth-child(6) {
    animation-delay: 0.6s;
  }

  h3 {
    color: #2c3e50;
    font-size: 18px;
    margin: 0;
    font-weight: 600;
  }

  p {
    color: #555;
    line-height: 1.6;
    margin: 0;
    font-size: 15px;
    text-align: justify;
  }

  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  }
`;

export const LoadMoreButton = styled.button`
  background-color: #ffd900;
  border-radius: 10px;
  padding: 10px 15px;
  font-size: 15px;
  font-weight: 500;
  color: #000000;
  border: none;
  cursor: pointer;

  transition: all 300ms ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: linear-gradient(135deg, #bdc3c7 0%, #95a5a6 100%);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const NoReviewsMessage = styled.p`
  color: #333;
  margin: 0 auto 0;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.6;
  padding: 20px;
  border: solid 2px #ffd900;
  background-color: #f8f9fa;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  transition: all 0.3s ease;
`;
