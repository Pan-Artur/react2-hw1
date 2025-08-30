import { useState } from "react";

import { Container } from "../../../components/Container/Container";

import { getSearching } from "../../../services/getSearching";

import defaultPoster from "../../../assets/images/default-poster.webp";

import {
  StyledSearching,
  StyledTitle,
  StyledInput,
  SearchButton,
  StyledList,
  StyledItem,
  StyledPoster,
  StyledNavigation,
  StyledLink,
  NoResultsText,
} from "./Searching.styled";

export const Searching = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setIsSearching(true);

    try {
      const data = await getSearching(searchQuery);
      setSearchQuery("");
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
        <StyledTitle>Searching today</StyledTitle>
        <div>
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
          >
            Search
          </SearchButton>
        </div>
      </Container>
      {movies.length > 0 ? (
        <StyledList>
          {movies.map((movie) => (
            <StyledItem key={movie.id}>
              <StyledPoster
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : defaultPoster
                }
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
