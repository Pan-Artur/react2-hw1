import { NotFoundContainer, FilmReel, FilmStrip, NotFoundTitle, NotFoundSubtitle, NotFoundText, HomeButton } from "./NotFound.styled";

export const NotFound = () => {
  return (
    <NotFoundContainer>
      <FilmReel>
        <FilmStrip />
      </FilmReel>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundSubtitle>Page not found</NotFoundSubtitle>
      <NotFoundText>
        It looks like the page you're looking for is lost in the film.
        It may have moved or it may never have existed.
      </NotFoundText>
      <HomeButton to="/">
        Return to home page
      </HomeButton>
    </NotFoundContainer>
  );
};