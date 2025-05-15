import React from "react";
import { Routes, Route } from "react-router-dom";





import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Services from "./components/services/services";
import Service from "./pages/Service";



const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blogs/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Service/>} /> 
      </Routes>
      <Footer/>
    </>
  );
};

export default App;