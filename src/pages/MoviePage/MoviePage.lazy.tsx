import { lazy } from "react";

export const MoviePageLazy = lazy(() =>
  import("./MoviePage").then((module) => ({ default: module.MoviePage }))
);
