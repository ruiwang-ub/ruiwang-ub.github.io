import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/site.css";

const root = document.getElementById("root");
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (root.hasChildNodes()) {
  ReactDOM.hydrate(app, root);
} else {
  ReactDOM.render(app, root);
}
