import React from "react";
import ReactDOM, { hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { init, trackPages } from "insights-js";

let rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
init("hKyFepFG_w7OWnw6");
trackPages();

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <App />);
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
