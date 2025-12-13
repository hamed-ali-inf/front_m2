import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home} from "./pages/Home";
import {Weather} from "./pages/Weather";
import {News} from "./pages/News";
import{ History }from "./pages/History";
import {Rest} from "./pages/Rest";
import { Authentication } from "./pages/Authentication";
import{ Register} from "./pages/Register";
import {Login} from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Other Pages */}
        <Route path="/weather" element={<Weather />} />
        <Route path="/news" element={<News />} />
        <Route path="/history" element={<History />} />
        <Route path="/rest" element={<Rest />} />

        {/* Authentication */}
        <Route path="/auth" element={<Authentication />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />

        {/* Fallback: أي رابط غير موجود يرجع إلى Home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
