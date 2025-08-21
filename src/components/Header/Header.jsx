import { Link } from "react-router-dom";

import { StyledHeader } from "./Header.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <a href="/">Kino Poshuk</a>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
    </StyledHeader>
  );
}