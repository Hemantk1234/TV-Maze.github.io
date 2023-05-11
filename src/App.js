import React from "react";
import "./App.css";
import ShowList from "./components/ShowList";
import SingleShow from "./components/SingleShow";
import LoginForm from "./components/LoginForm";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ShowList />} />
        <Route path="SingleShow/:id" element={<SingleShow />} />
        <Route path="LoginForm" element={<LoginForm />} />
        <Route path="*" element={<h1>404 Error</h1>} />
      </Routes>
    </>
  );
};

export default App;
