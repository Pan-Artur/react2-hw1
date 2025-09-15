import { NotFoundContainer, FilmReel, FilmStrip, NotFoundTitle, N } from "./NotFound.styled";


export const NotFound = () => {
  return (
    <NotFoundContainer>
      <FilmReel>
        <FilmStrip />
      </FilmReel>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundSubtitle>Сторінку не знайдено</NotFoundSubtitle>
      <NotFoundText>
        Схоже, що сторінка, яку ви шукаєте, загубилася в кіноплівці. 
        Можливо, вона переїхала або її ніколи не існувало.
      </NotFoundText>
      <HomeButton to="/">
        Повернутися на головну
      </HomeButton>
    </NotFoundContainer>
  );
};