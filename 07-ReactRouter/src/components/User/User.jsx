import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams(); //useParams is a hook that helps us get the dynamic parameters from the url
  return (
    <div className="bg-gray-700 text-white text-center text-3xl p-4">
      User : {id}{" "}
    </div>
  );
}

export default User;
