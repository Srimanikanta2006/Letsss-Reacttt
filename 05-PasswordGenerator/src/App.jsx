import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(6); //set default length to 6
  const [isNumAllowed, setIsNumAllowed] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null); // to refer the input field where password is displayed

  const pswdGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumAllowed) {
      str += "0123456789";
    }
    if (isCharAllowed) {
      str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, isNumAllowed, isCharAllowed, setPassword]); //setPassword added for optimization.

  const copyPswdToClipboad = useCallback(() => {
    passwordRef.current?.select(); // hightlights the selected text
    passwordRef.current?.setSelectionRange(0, password.length); //select text within range
    window.navigator.clipboard.writeText(password); //accessing clipboard
  }, [password]);

  useEffect(() => {
    // to generate password on initial render and when dependencies change
    pswdGenerator();
  }, [length, isNumAllowed, isCharAllowed, pswdGenerator]); // these when changed, will trigger useEffect

  return (
    <>
      <div className="container text-white bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col gap-4 fixed inset-x-0 m-auto w-auto top-20 max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">
          Password Generator
        </h1>
        <div className="input-bar flex gap-0 items-center justify-center">
          <input
            type="text"
            className="text-orange-600 font-heavy bg-white flex-grow p-2 rounded-s-lg outline-none"
            placeholder="Password"
            readOnly
            ref={passwordRef} // referring to input field
            value={password} // setting value to password state
          />
          <button
            onClick={() => {
              copyPswdToClipboad();
              setTimeout(() => {
                document.querySelector(".btn").innerText = "Copy";
              }, 1000);
              document.querySelector(".btn").innerText = "Copied!";
            }}
            className="bg-blue-800 text-white btn px-4 py-2 rounded-e-lg hover:bg-blue-700 cursor-pointer"
          >
            Copy
          </button>
        </div>
        <div className="options flex flex-row gap-1 items-center justify-between">
          <div className="option flex items-center gap-2 ">
            <input
              type="range" //slider input
              className="cursor-pointer"
              min="6"
              max="20"
              value={length}
              onChange={(e) => setLength(e.target.value)} // e is event, when occur, it passes value to setLength
            />
            <label>Length({length})</label>
          </div>
          <div className="option flex items-center gap-1">
            <label>
              <input
                type="checkbox"
                className="cursor-pointer"
                onChange={() => {
                  setIsNumAllowed((prev) => !prev);
                }}
              />
              Numbers
            </label>

            <label>
              {" "}
              <input
                type="checkbox"
                className="cursor-pointer"
                onChange={() => {
                  setIsCharAllowed((prev) => !prev);
                }}
              />
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
