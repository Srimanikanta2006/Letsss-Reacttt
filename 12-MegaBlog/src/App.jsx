import "./App.css";
// We use -
// Aapwrite for backend as service
// Tinymce rich text editor for text editor functionality
// Html-react-parser using to parse html
// React Hook Forms to handle input forms
// Creating .env file to store environment variable
// npm i @reduxjs/toolkit react-redux react-router-dom @tinymce/tinymce-react html-react-parser react-hook-form appwrite
function App() {
  console.log(import.meta.env.REACT_APP_APPWRITE_URL);
  // re run the command npm run dev to see the changes in the console in max cases.
  // env file loads only once.

  return (
    <>
      <h2>A Blog app with Appwrite</h2>
    </>
  );
}

export default App;
