const API_KEY = process.env.REACT_APP_API_KEY;

export const getMovieReviews = async (id) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`);

  return response.json();
}