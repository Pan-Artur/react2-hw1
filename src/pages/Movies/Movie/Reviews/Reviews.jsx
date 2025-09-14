import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { getMovieReviews } from "../../../../services/getMovieReviews";

import { StyledReviews, StyledReview, LoadMoreButton, NoReviewsMessage } from "./Reviews.styled";

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [visibleReviews, setVisibleReviews] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (movieId) {
      const fetchReviews = async () => {
        try {
          setIsLoading(true);
          const reviewsDetails = await getMovieReviews(movieId);
          setMovieReviews(reviewsDetails.results || []);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchReviews();
    }
  }, [movieId]);

  const loadMoreReviews = () => {
    setVisibleReviews(prevVisible => prevVisible + 3);
  };

  const displayedReviews = movieReviews.slice(0, visibleReviews);

  return (
    <StyledReviews>
      {displayedReviews.length > 0 ? (
        <>
          {displayedReviews.map((review) => (
            <StyledReview key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </StyledReview>
          ))}
          
          {visibleReviews < movieReviews.length && (
            <LoadMoreButton onClick={loadMoreReviews} disabled={isLoading}>
              Load More
            </LoadMoreButton>
          )}
        </>
      ) : (
        <NoReviewsMessage>No reviews available for this movie.</NoReviewsMessage>
      )}
    </StyledReviews>
  );
};

export default Reviews;