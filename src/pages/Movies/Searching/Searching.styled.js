import styled from "styled-components";

import { Link } from "react-router-dom";

export const StyledSearching = styled.section`
  padding: 20px;
  color: #333;
  min-height: 100vh;
`;

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 220px);
  grid-template-rows: repeat(4, 370px);
  justify-content: center;
  gap: 24px;
`;

export const StyledItem = styled.li`
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);

  transition: all 200ms ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const StyledPoster = styled.img`
  width: 220px;
  height: 320px;
  pointer-events: none;
  user-select: none;
`;

export const StyledNavigation = styled.nav`
  display: flex;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  font-size: 15px;
  padding: 0 auto 0;
  color: #333;
`;

export const StyledInput = styled.input`
  padding: 10px;
  border: 2px solid #ffd900;
  color: #333;
  background-color: transparent;
  border-radius: 4px;
  margin-right: 10px;
  width: 300px;
  
  &:focus {
    outline: none;
    border-color: #ffd900;
  }
  
  &::placeholder {
    color: #333;
    opacity: 0.7;
  }
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #ffd900;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  opacity: ${props => props.disabled ? 0.7 : 1};
  transition: opacity 0.3s ease;
  
  &:hover:not(:disabled) {
    opacity: 0.9;
  }
`;

export const NoResultsText = styled.p`
  color: #333;
  margin-top: 20px;
`;
