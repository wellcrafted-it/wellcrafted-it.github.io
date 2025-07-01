import App from "./App";
import { init, trackPages } from "insights-js";
import "./index.css";
import { ViteReactSSG } from "vite-react-ssg/single-page";

init("hKyFepFG_w7OWnw6");
trackPages();

export const createRoot = ViteReactSSG(<App />);
