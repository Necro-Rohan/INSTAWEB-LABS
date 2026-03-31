import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary.jsx";
import ComingSoon from "./pages/ComingSoon.jsx";
import HtmlSitemap from "./pages/HTMLSitemap.jsx";

const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const HomePage = lazy(() => import("./pages/HomePage"));


const PageLoader = () => (
  <div className="flex h-screen items-center justify-center">
    <div className="w-8 h-8 border-4 border-[#5c218b] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog/:slug" element={<BlogPage />} />
            <Route path="/admin" element={<AdminDashboard />} />

            <Route path="/sitemap" element={<HtmlSitemap />} />

             {/* Coming Soon Pages */}
            <Route path="/about" element={<ComingSoon />} />
            <Route path="/contact" element={<ComingSoon />} />
            <Route path="/editorial-guidelines" element={<ComingSoon />} />
            <Route path="/categories" element={<ComingSoon />} />
            <Route path="/affiliate-disclosure" element={<ComingSoon />} />
            <Route path="/privacy-policy" element={<ComingSoon />} />
            <Route path="/terms-of-service" element={<ComingSoon />} />
            <Route path="/cookie-policy" element={<ComingSoon />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
