import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center border-none bottom-10 p-3 m-2 inset-x-15 ">
        <div className="flex flex-wrap gap-3 justify-center items-center p-2 bg-white rounded-3xl shadow-lg">
          <button
            onClick={() => {
              setColor("red");
            }}
            className="outline-none shadow-lg text-white px-4 py-1 m-1 rounded-full cursor-pointer"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => {
              setColor("green");
            }}
            className="outline-none shadow-lg text-white px-4 py-1 m-1 rounded-full cursor-pointer"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => {
              setColor("blue");
            }}
            className="outline-none shadow-lg text-white px-4 py-1 m-1 rounded-full cursor-pointer"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => {
              setColor("olive");
            }}
            className="outline-none shadow-lg text-white px-4 py-1 m-1 rounded-full cursor-pointer"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => {
              setColor("gray");
            }}
            className="outline-none shadow-lg text-white px-4 py-1 m-1 rounded-full cursor-pointer"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
          <button
            onClick={() => {
              setColor("yellow");
            }}
            className="outline-none shadow-lg text-black px-4 py-1 m-1 rounded-full cursor-pointer"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => {
              setColor("pink");
            }}
            className="outline-none shadow-lg text-black px-4 py-1 m-1 rounded-full cursor-pointer"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>

          <button
            onClick={() => {
              setColor("purple");
            }}
            className="outline-none shadow-lg text-white px-4 py-1 m-1 rounded-full cursor-pointer"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => {
              setColor("Lavender");
            }}
            className="outline-none shadow-lg text-black px-4 py-1 m-1 rounded-full cursor-pointer"
            style={{ backgroundColor: "Lavender" }}
          >
            Lavender
          </button>
          <button
            onClick={() => {
              setColor("white");
            }}
            className="outline-none shadow-lg text-black px-4 py-1 m-1 rounded-full cursor-pointer"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
          <button
            onClick={() => {
              setColor("black");
            }}
            className="outline-none shadow-lg text-white px-4 py-1 m-1 rounded-full cursor-pointer"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
