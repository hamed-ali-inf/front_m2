import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD

import Home from "./pages/Home";
import Weather from "./pages/Weather";
import News from "./pages/News";
import History from "./pages/History";
import Rest from "./pages/Rest";
import Authentication from "./pages/Authentication";
import Register from "./pages/Register";
import Loginpage from "./pages/Loginpage";
=======
import { Home } from "./pages/Home";
import { Weather } from "./pages/Weather";
import { News } from "./pages/News";
import { History } from "./pages/History";
import { Authentication } from "./pages/authentication";
import { Rest } from "./pages/Rest";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { SearchResults } from "./pages/SearchResults";
>>>>>>> 85317728ceaead571d64cb9a869248f340bd4890

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Other Pages */}
        <Route path="/weather" element={<Weather />} />
        <Route path="/news" element={<News />} />
        <Route path="/history" element={<History />} />
        <Route path="/rest" element={<Rest />} />

        {/* Authentication */}
        <Route path="/auth" element={<Authentication />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Register />} />

        {/* Fallback: أي رابط غير موجود يرجع إلى Home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
=======
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/news/:id" element={<News />} />
        <Route path="/history" element={<History />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/rest" element={<Rest />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search-results" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  );
}
>>>>>>> 85317728ceaead571d64cb9a869248f340bd4890
