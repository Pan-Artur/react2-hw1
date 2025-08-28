import styled from "styled-components";

import { Link } from "react-router-dom";

export const StyledTrending = styled.section``;

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
