import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/Srimanikanta2006")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className="bg-gray-800 text-white text-center p-4">
      Github Followers: {data.followers}
      <img
        src={data.avatar_url}
        alt="avatar"
        className="mx-auto mt-4 rounded-full w-32 h-32"
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/Srimanikanta2006");
  return res.json();
};
