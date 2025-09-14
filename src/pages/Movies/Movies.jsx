import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { getMovieId } from "../../services/getMovieId";

import Searching from "./Searching/Searching.jsx";
import Movie from "./Movie/Movie.jsx";

const Movies = () => {
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
          console.error("Error fetching movie:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchMovie();
    } else {
      setLoading(false);
    }
  }, [movieId]);

  return (
    <main>
      {movieId ? (
        movie && <Movie movie={movie} movieId={movieId} />
      ) : (
        <Searching />
      )}
    </main>
  );
};

export default Movies;