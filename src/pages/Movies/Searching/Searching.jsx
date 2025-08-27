import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { getSearching } from "../../../services/getSearching";

import { StyledSearching, StyledList, StyledItem } from "./Searching.styled";

export const Searching = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setIsSearching(true);

    try {
      const data = await getSearching(searchQuery);

      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <StyledSearching>
      <div>
        <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyPress={handleKeyPress} />
        <button type="button" onClick={handleSearch} disabled={isSearching}>Search</button>
      </div>
      {movies.length > 0 ? (
        <StyledList>
          {movies.map((movie) => (
            <StyledItem key={movie.id}>
              <nav>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </nav>
            </StyledItem>
          ))}
        </StyledList>
      ) : (
        searchQuery && !isSearching && <p>nothing</p>
      )}
    </StyledSearching>
  );
};
