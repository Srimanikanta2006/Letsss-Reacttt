import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(0); // this hook gives an array. 0(default)

  const addValue = () => {
    if (count < 20) {
      setCount(count + 1); //updates everywhere the var is used in web.
    } else {
      alert("limit exceeds!");
    }
  };
  const removeValue = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Cannot reduce further!");
    }
  };
  return (
    <>
      <h1>Count is: {count}</h1>
      <button onClick={addValue}>Increment Count</button>
      <button onClick={removeValue}>Decrement Count</button>
    </>
  );
}

export default App;
