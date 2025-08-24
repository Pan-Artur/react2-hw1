import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { getTrending } from "../../../services/getTrending";

import { StyledTrending, StyledList, StyledItem } from "./Trending.styled";

export const Trending = ({ onMovieSelect }) => {
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
          <StyledItem key={movie.id}>
            <nav>
              <Link
                to={`/movies/${movie.id}`}
              >
                {movie.title}
              </Link>
            </nav>
          </StyledItem>
        ))}
      </StyledList>
    </StyledTrending>
  );
};
