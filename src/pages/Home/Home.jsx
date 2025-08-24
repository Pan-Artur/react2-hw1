import { Trending } from "./Trending/Trending";

export const Home = ({ onMovieSelect }) => {
  return (
    <main>
      <Trending onMovieSelect={onMovieSelect} />
    </main>
  );
}