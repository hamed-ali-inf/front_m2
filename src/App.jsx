import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Weather } from "./pages/Weather";
import { News } from "./pages/News";
import { History } from "./pages/History";
import { Authentication } from "./pages/authentication";
import { Rest } from "./pages/Rest";
export default function App() {
  return (
    <BrowserRouter basename="/front_m2">
      <nav>
      
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/news" element={<News />} />
        <Route path="/history" element={<History />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/rest" element={<Rest />} />
      </Routes>
    </BrowserRouter>
  );
}