import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { hydrate } from "react-dom";
import { init } from "insights-js";

let rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
init("hKyFepFG_w7OWnw6");

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
