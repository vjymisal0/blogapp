import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import CreateBlog from "./pages/CreateBlog";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
