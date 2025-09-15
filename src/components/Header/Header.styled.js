import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  background-color: #ffd900;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
  }
`;

export const StyledLogoBox = styled(NavLink)`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const StyledLogo = styled.img`
  height: 60px;
`;

export const StyledNavigation = styled.nav`
  display: flex;
  gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  color: #333;
  padding: 10px 0;
  margin: 0 5px;
  font-size: 20px;
  font-weight: 500;
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;
  text-decoration: none;
  cursor: pointer;
  user-select: none;

  &:hover::after,
  &.active::after {
    content: '';
    position: absolute;
    bottom: -18px;
    left: 0;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: #333;
    transform: scaleX(1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -18px;
    left: 0;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: #333;
    transform: scaleX(0);
    transition: transform 0.3s ease;
    transform-origin: bottom center;
  }
`;