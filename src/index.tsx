import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import registerServiceWorker from "./registerServiceWorker";
import React from "react";
import App from "./App";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
  
  
   <BrowserRouter basename="/React_Portfolio_Kevin_Anderson"><App /></BrowserRouter>);
}

registerServiceWorker();