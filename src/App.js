import { useState } from "react";

import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { Movies } from "./pages/Movies/Movies";
import { Footer } from "./components/Footer/Footer";

import "./App.css";

export const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home onMovieSelect={setSelectedMovie} />} />
        <Route path="/movies" element={<Movies movie={selectedMovie} />} />
        <Route
          path="/movies/:movieId/*"
          element={<Movies movie={selectedMovie} />}
        />
        <Route path="*" element={<Home onMovieSelect={setSelectedMovie} />} />
      </Routes>
      <Footer />
    </div>
  );
};
