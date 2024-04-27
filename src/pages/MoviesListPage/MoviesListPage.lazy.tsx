import { lazy } from "react";

export const MoviesListPageLazy = lazy(() =>
  import("./MoviesListPage").then((module) => ({
    default: module.MoviesListPage,
  }))
);
