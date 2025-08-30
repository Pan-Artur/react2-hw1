import { useState, useEffect } from "react";

import { getTrending } from "../../../services/getTrending";

import { Container } from "../../../components/Container/Container";

import defaultPoster from "../../../assets/images/default-poster.webp";

import {
  StyledTrending,
  StyledTitle,
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
        <StyledTitle>Trending today</StyledTitle>
        <StyledList>
          {movies.map((movie) => (
            <StyledItem key={movie.id}>
              <StyledPoster
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : defaultPoster}
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
