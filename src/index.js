import React from "react";
import ReactDOM from "react-dom/client";
import "./style/style.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import configureMediaStore from "./store/media";
configureMediaStore();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
