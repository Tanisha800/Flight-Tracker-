import React from "react";
import { Routes, Route } from "react-router-dom";

import Blog from "./pages/Blog";



import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;