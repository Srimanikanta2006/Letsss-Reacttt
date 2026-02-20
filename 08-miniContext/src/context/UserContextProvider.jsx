import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null); //create wtever is necessary for your app
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {/* pass all the created ones to Provider */}
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
