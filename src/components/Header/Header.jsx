import { Container } from "../Container/Container";

import headerLogo from "../../assets/images/cinemate-logo.webp";

import {
  StyledHeader,
  StyledLogoBox,
  StyledLogo,
  StyledNavigation,
  StyledLink,
} from "./Header.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledLogoBox href="/">
          <StyledLogo src={headerLogo} alt="CINEMATE" />
        </StyledLogoBox>
        <StyledNavigation>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </StyledNavigation>
      </Container>
    </StyledHeader>
  );
};
