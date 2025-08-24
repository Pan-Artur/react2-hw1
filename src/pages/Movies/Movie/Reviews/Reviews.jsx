import { useState, useEffect } from "react";

import { getMovieReviews } from "../../../../services/getMovieReviews";

import { StyledReviews, StyledReview } from "./Reviews.styled";

export const Reviews = ({ movieId }) => {
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    if (movieId) {
      const fetchReviews = async () => {
        try {
          const reviewsDetails = await getMovieReviews(movieId);

          setMovieReviews(reviewsDetails.results || []);
        } catch (error) {
          console.error(error);
        }
      };

      fetchReviews();
    }
  }, [movieId]);

  return (
    <StyledReviews>
      {movieReviews.map((review) => (
        <StyledReview>
          <h3>{review.author}</h3>
          <p>{review.content}</p>
        </StyledReview>
      ))}
    </StyledReviews>
  );
};
