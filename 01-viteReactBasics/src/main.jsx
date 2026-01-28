import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import MyC from "./MyComp.jsx";

function Hello() {
  return <h1>Hello World!</h1>;
}
// const anotherEle = (
//   <a href="https://google.com" target="_blank">
//     click here
//   </a>
// );
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     target: "_blank",
//   },
//   children: "Click here to visit google.com",
// };
const user = "Psmk";
const Ele = React.createElement(
  // done by Babel, Behind the scenes
  // https://github.com/facebook/react/blob/main/packages/react/src/jsx/ReactJSXElement.js
  "a",
  { href: "https://google.com", target: "_blank" },
  "click here buddy!",
  user,
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // Hello(),
  // <>
  //   <Hello />
  //   <App />
  //   <MyC />
  // </>,
  // Ele,
  // <App />,
  Ele,
  // the Variables are Injected at the last. (The Evaluated expressions!.)
);
