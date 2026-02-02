import React from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      {/* this is a router thingy, which keeps above and bottom tings same and changes only the thing between them(Outlet) */}
      <Footer />
    </>
  );
}

export default Layout;
