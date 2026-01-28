import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card";

function App() {
  //<> is a Fragment.
  return (
    <>
      <h1 className="text-black bg-green-400 rounded-xl p-2">
        Tailwind + Vite + React
      </h1>

      <Card userName="psmkHere" btnText="Click Me" />
      <Card userName="chaiAurReact" btnText="Visit Me" />
      <Card />
    </>
  );
}

export default App;
