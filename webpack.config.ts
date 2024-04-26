import path from "path";
import { Configuration } from "webpack";

import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildPaths, BuildMode, BuildEnv } from "./config/build/types/types";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
};

export default (env: BuildEnv) => {
  const mode: BuildMode = env.mode ?? "development";
  const isDev = mode === "development";
  const PORT = env.port ?? 3000;

  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};
