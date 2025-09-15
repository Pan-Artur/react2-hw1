import { Container } from "../Container/Container";

import headerLogo from "../../assets/images/cinemate-logo.webp";

import {
  StyledHeader,
  StyledLogoBox,
  StyledLogo,
  StyledNavigation,
  StyledNavLink
} from "./Header.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledLogoBox to="/">
          <StyledLogo src={headerLogo} alt="CineMate logo" />
        </StyledLogoBox>
        <StyledNavigation>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </StyledNavigation>
      </Container>
    </StyledHeader>
  );
};