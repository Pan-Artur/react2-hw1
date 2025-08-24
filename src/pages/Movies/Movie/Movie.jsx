import { Link, Routes, Route } from "react-router-dom";

import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";

import {
  StyledMovie,
  StyledCouple,
  StyledPoster,
  StyledDescription,
  StyledManagment,
} from "./Movie.styled";

export const Movie = ({ movie, movieId }) => {
  const countVote = (vote) => {
    return `${Math.round(vote * 10)}%`;
  };

  const movieGenres = movie.genres.map((genre) => genre.name).join(", ");

  return (
    <StyledMovie>
      <StyledCouple>
        <StyledPoster
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <StyledDescription>
          <h2>{movie.title}</h2>
          <p>{countVote(movie.vote_average)}</p>
          <p>{movie.overview}</p>
          <p>{movieGenres}</p>
        </StyledDescription>
      </StyledCouple>
      <StyledManagment>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to={`/movies/${movie.id}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movie.id}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </StyledManagment>
      <Routes>
        <Route path="cast" element={ <Cast movieId={movieId} /> } />
        <Route path="reviews" element={ <Reviews movieId={movieId} /> } />
      </Routes>
    </StyledMovie>
  );
};
