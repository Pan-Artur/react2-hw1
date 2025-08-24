const API_KEY = process.env.REACT_APP_API_KEY;

export const getMovieCast = async (id) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`);

  return response.json();
}