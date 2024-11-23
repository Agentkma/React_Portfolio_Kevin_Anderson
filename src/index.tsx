import { createRoot } from "react-dom/client";
import registerServiceWorker from "./registerServiceWorker";
import React from "react";
import App from "./App";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

registerServiceWorker();