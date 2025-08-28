import { useState } from "react";

import { Container } from "../../../components/Container/Container";

import {
  StyledSearching,
  StyledInput,
  SearchButton,
  StyledList,
  StyledItem,
  StyledPoster,
  StyledNavigation,
  StyledLink,
  NoResultsText,
} from "./Searching.styled";

import { getSearching } from "../../../services/getSearching";

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
    } finally {
      setIsSearching(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <StyledSearching>
      <Container>
        <StyledInput
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Search movies..."
        />
        <SearchButton
          type="button"
          onClick={handleSearch}
          disabled={isSearching}
        >
          Search
        </SearchButton>
      </Container>
      {movies.length > 0 ? (
        <StyledList>
          {movies.map((movie) => (
            <StyledItem key={movie.id}>
              <StyledPoster
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <StyledNavigation>
                <StyledLink to={`/movies/${movie.id}`}>
                  {movie.title}
                </StyledLink>
              </StyledNavigation>
            </StyledItem>
          ))}
        </StyledList>
      ) : (
        !isSearching && <NoResultsText>No results found</NoResultsText>
      )}
    </StyledSearching>
  );
};
