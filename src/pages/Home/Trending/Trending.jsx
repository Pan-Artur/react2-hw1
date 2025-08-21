import { useState, useEffect } from "react";

import { getTrending } from "../../../services/getTrending";

import { StyledTrending, StyledList, StyledItem } from "./Trending.styled";

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
      <StyledList>
        {movies.map((movie) => (
          <StyledItem>
            <a key={movie.id} href="/">{movie.title}</a>
          </StyledItem>
        ))}
      </StyledList>
    </StyledTrending>
  );
};
