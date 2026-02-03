import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useLoaderData } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import {
  createRoutesFromChildren,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Children } from "react";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github from "./components/Github/Github.jsx";
import { githubInfoLoader } from "./components/Github/Github.jsx";

// const router = createBrowserRouter([
//   {
//     //list of all the things to be rendered
//     path: "/", //Header
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

//Other way to create a router!

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* all the other childeren routes */}
      {/* these are are mentioned in childrens, bcoz they all share the same layout(header) */}
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:id" element={<User />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
      {/* loader loads data before the component is rendered, suppose a button, when
      hovered the data is loaded, when clicked the component is rendered
      instantly with the loaded data */}
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
    {/* the Main Controller of the application */}
  </StrictMode>,
);
