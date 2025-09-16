import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { NotFound } from "./pages/NotFound/NotFound";

import { Loader } from "./components/Loader/Loader";

import "./App.css";

const Home = lazy(() => import("./pages/Home/Home"));
const Movies = lazy(() => import("./pages/Movies/Movies"));

const Cast = lazy(() => import("./pages/Movies/Movie/Cast/Cast"));
const Reviews = lazy(() => import("./pages/Movies/Movie/Reviews/Reviews"));

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<Movies />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;
