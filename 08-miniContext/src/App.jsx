import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

function App() {
  return (
    <UserContextProvider>
      {/* just wrap your app with the provider and pass all the created states and functions to it as value, this is Alternate way to use context without creating a custom hook, you can directly use useContext in your components to consume the context values */}
      <h1>Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
