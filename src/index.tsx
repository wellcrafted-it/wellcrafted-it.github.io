import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { hydrate, render } from "react-dom";

let rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
