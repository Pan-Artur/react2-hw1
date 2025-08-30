import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { Searching } from "./Searching/Searching";
import { Movie } from "./Movie/Movie";

import { getMovieId } from "../../services/getMovieId";

import { StyledLoading, StyledSpinner, StyledLoadingText } from "./Movies.styled.js";

export const Movies = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (movieId) {
      const fetchMovie = async () => {
        try {
          const movieDetails = await getMovieId(movieId);

          setMovie(movieDetails);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

      fetchMovie();
    } else {
      setLoading(false);
    }
  }, [movieId]);

  if (loading) {
    return (
      <StyledLoading>
        <StyledSpinner />
        <StyledLoadingText>
          Loading...
        </StyledLoadingText>
      </StyledLoading>
    );
  }

  return (
    <main>
      {movie ? <Movie movie={movie} movieId={movieId} /> : <Searching />}
    </main>
  );
};
