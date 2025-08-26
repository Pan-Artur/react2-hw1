import { useState, useEffect } from "react";

import { Pagination } from "../../../../components/Pagination/Pagination";

import { getMovieCast } from "../../../../services/getMovieCast";

import defaultProfile from "../../../../assets/images/default-profile.webp"

import { StyledCast, StyledProfile } from "./Cast.styled";

export const Cast = ({ movieId }) => {
  const [movieCast, setMovieCast] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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

  const totalPages = Math.ceil(movieCast.length / itemsPerPage);

  const currentCast = movieCast.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div id="cast-section">
      <StyledCast>
        {currentCast.map((actor) => (
          <li key={actor.id}>
            <StyledProfile
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  : defaultProfile
              }
              alt={actor.name}
            />
            <h3>{actor.name}</h3>
            <p>{actor.character}</p>
          </li>
        ))}
      </StyledCast>
      
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};