// how data is accessed!
import React from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";
function Profile() {
  const { user } = useContext(UserContext); //consume the context values using useContext hook and destructure the required ones
  //here why user not setUser? because we only want to access the user data in this component, we don't want to set it, so we only destructure the user from the context values
  if (!user) return <h2>Please login to view your profile</h2>;

  return <div>Welcome {user.username} to your profile</div>;
}

export default Profile;
