import { createRoot } from "react-dom/client";

import { App } from "./app/App";

import "./index.scss";

const container = document.getElementById("root");

if (!container) {
  throw new Error("There is no root container in html file");
}

const root = createRoot(container);

root.render(<App />);
