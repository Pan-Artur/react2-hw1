import { Link, Outlet } from "react-router-dom";

import defaultPoster from "../../../assets/images/default-poster.webp";

import {
  StyledMovie,
  StyledCouple,
  StyledPoster,
  StyledDescription,
  StyledOverview,
  StyledGenres,
  StyledManagment,
  StyledVote,
} from "./Movie.styled";

const Movie = ({ movie }) => {
  if (!movie) {
    return;
  }

  const countYear = (date) => {
    return date.slice(0, 4);
  }

  const countVote = (vote) => {
    return `${Math.round(vote * 10)}%`;
  };

  const getVoteColor = (vote) => {
    const percentage = Math.round(vote * 10);
    
    if (percentage >= 0 && percentage < 25) {
      return '#ff4d4d';
    } else if (percentage >= 25 && percentage < 50) {
      return '#fea348';
    } else if (percentage >= 50 && percentage < 75) {
      return '#ffd900';
    } else if (percentage >= 75 && percentage <= 100) {
      return '#3bff3b';
    }
    return '#000';
  };

  const movieGenres = movie.genres.map((genre) => genre.name).join(", ");

  return (
    <StyledMovie>
      <StyledCouple>
        <StyledPoster
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : defaultPoster}
          alt={movie.title}
        />
        <StyledDescription>
          <h2>{movie.title} ({countYear(movie.release_date)})</h2>
          <StyledVote color={getVoteColor(movie.vote_average)}>
            {countVote(movie.vote_average)}
          </StyledVote>
          <StyledOverview><span>Overview:</span><p>{movie.overview}</p></StyledOverview>
          <StyledGenres><span>Genres:</span><p>{movieGenres}</p></StyledGenres>
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
      <Outlet />
    </StyledMovie>
  );
};

export default Movie;