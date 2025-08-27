const API_KEY = process.env.REACT_APP_API_KEY;

export const getSearching = async (query) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}&page=1`
  );

  return response.json();
};
