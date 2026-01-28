import React from "react"; //core foundational library
import ReactDOM from "react-dom/client"; // for Website rendering
import App from "./App";
import Mycomp from "./Mycomp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <Mycomp />
  </>,
);
