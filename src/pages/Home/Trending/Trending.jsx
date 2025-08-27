import { useState, useEffect } from "react";

import { getTrending } from "../../../services/getTrending";

import { Container } from "../../../components/Container/Container";

import {
  StyledTrending,
  StyledList,
  StyledItem,
  StyledPoster,
  StyledLink,
  StyledNavigation
} from "./Trending.styled";

export const Trending = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const data = await getTrending();

        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTrending();
  }, []);

  return (
    <StyledTrending>
      <Container>
        <StyledList>
          {movies.map((movie) => (
            <StyledItem key={movie.id}>
              <StyledPoster
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <StyledNavigation>
                <StyledLink to={`/movies/${movie.id}`}>{movie.title}</StyledLink>
              </StyledNavigation>
            </StyledItem>
          ))}
        </StyledList>
      </Container>
    </StyledTrending>
  );
};
