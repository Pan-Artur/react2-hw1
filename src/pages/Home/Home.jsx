import { Trending } from "./Trending/Trending";

const Home = ({ onMovieSelect }) => {
  return (
    <main>
      <Trending onMovieSelect={onMovieSelect} />
    </main>
  );
}

export default Home;