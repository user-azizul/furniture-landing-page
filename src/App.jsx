import React from "react";
import Navbar from "./Component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./App.css";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Navbar />
    </main>
  );
}

export default App;
