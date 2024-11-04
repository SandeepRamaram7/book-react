import { useState } from "react";
import BookList from "./assets/book-auth/book/BookList";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import HeaderApp from "./assets/HeaderApp";
import BookView  from "./assets/book-auth/book/BookView";
import BookAdd from "./assets/book-auth/book/BookAdd";
import BookEdit from "./assets/book-auth/book/BookEdit";
import { Routes } from "react-router";
import { Route } from "react-router";
import Error from "./Error";

function App() {
  

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <BookList></BookList> */}
      {/* <BrowserRouter>
        <Routes>
          <Route ></Route>
        </Routes>
      </BrowserRouter> */}
      <BrowserRouter>
        <HeaderApp></HeaderApp>
        <Routes>
          
            <Route path="/book-list" element={<BookList />}></Route>
            {/* <Route path="author-list" element={<AuthorList />}></Route> */}
            <Route path="book-view/:cid" element={<BookView />}></Route>
            <Route path="book-add" element={<BookAdd />}></Route>
            <Route path="book-edit" element={<BookEdit />}></Route>
            {/* <Route path="author-add" element={<VenueAdd />}></Route> */}
          

          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
