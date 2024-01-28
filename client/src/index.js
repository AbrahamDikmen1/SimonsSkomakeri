import React from "react";
import ReactDOM from "react-dom/client";
import { hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
if (document.getElementById("root").hasChildNodes()) {
  hydrateRoot(root, <App />);
} else {
  root.render(<App />);
}
reportWebVitals();
