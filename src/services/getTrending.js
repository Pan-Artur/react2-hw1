const API_KEY = process.env.REACT_APP_API_KEY;

export const getTrending = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );

  return response.json();
};
