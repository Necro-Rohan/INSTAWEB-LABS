import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        {/* The route below matches the express structure */}
        <Route path="/blog/:slug" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
