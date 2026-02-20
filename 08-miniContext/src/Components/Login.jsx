// how data is sent!
import UserContext from "../context/UserContext";
import React from "react";
import { useContext } from "react";

function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { setUser } = useContext(UserContext); //consume the context values using useContext hook and destructure the required ones
  //setUser is created in the UserContextProvider

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password }); //set the user data in the context using the setUser function from the context, you can set whatever is necessary for your app
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="username"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
