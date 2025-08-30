import { Container } from "../Container/Container";

import { useLocation } from "react-router-dom";

import headerLogo from "../../assets/images/cinemate-logo.webp";

import {
  StyledHeader,
  StyledLogoBox,
  StyledLogo,
  StyledNavigation,
  StyledNavLink,
  StyledActiveNavLink,
} from "./Header.styled";

export const Header = () => {
  const location = useLocation();

  return (
    <StyledHeader>
      <Container>
        <StyledLogoBox href="/">
          <StyledLogo src={headerLogo} alt="CINEMATE" />
        </StyledLogoBox>
        <StyledNavigation>
          {location.pathname === "/" ? (
            <StyledActiveNavLink>Home</StyledActiveNavLink>
          ) : (
            <StyledNavLink to="/">Home</StyledNavLink>
          )}
          
          {location.pathname.startsWith("/movies") ? (
            <StyledActiveNavLink>Movies</StyledActiveNavLink>
          ) : (
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          )}
        </StyledNavigation>
      </Container>
    </StyledHeader>
  );
};