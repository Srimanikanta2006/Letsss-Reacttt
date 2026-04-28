import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import { Outlet } from "react-router-dom";
// We use -
// Aapwrite for backend as service
// Tinymce rich text editor for text editor functionality
// Html-react-parser using to parse html
// React Hook Forms to handle input forms
// Creating .env file to store environment variable
// npm i @reduxjs/toolkit react-redux react-router-dom @tinymce/tinymce-react html-react-parser react-hook-form appwrite
function App() {
  // console.log(import.meta.env.REACT_APP_APPWRITE_URL);
  // re run the command npm run dev to see the changes in the console in max cases.
  // env file loads only once.
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })

      .finally(() => setLoading(false));
  });

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          TODO outlet
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
