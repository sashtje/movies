import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";

import { app } from "./App.module.scss";
import { MainPage } from "../pages/MainPage";
import { AboutPage } from "../pages/AboutPage";
import { MoviesListPage } from "../pages/MoviesListPage";
import { MoviePage } from "../pages/MoviePage";
import { NotFoundPage } from "../pages/NotFoundPage";

export const App = () => {
  return (
    <div className={app}>
      <Link to={"/"}>Main Page</Link>
      <Link to={"/about"}>About Page</Link>
      <Link to={"/movies"}>Movies List Page</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/movies/" element={<MoviesListPage />} />
          <Route path="/movies/:id/" element={<MoviePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
