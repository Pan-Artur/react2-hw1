import { useState, useEffect } from "react";

import { getMovieCast } from "../../../../services/getMovieCast";

import { StyledCast, StyledProfile } from "./Cast.styled";

export const Cast = ({ movieId }) => {
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    if (movieId) {
      const fetchCast = async () => {
        try {
          const castDetails = await getMovieCast(movieId);

          setMovieCast(castDetails.cast || []);
        } catch (error) {
          console.error(error);
        }
      };

      fetchCast();
    }
  }, [movieId]);

  return (
    <StyledCast>
      {movieCast.map((actor) => (
        <li>
          <StyledProfile
            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
            alt={actor.name}
          />
          <h3>{actor.name}</h3>
          <p>{actor.character}</p>
        </li>
      ))}
    </StyledCast>
  );
};
