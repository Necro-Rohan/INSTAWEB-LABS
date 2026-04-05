import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary.jsx";
import ComingSoon from "./pages/ComingSoon.jsx";
import HtmlSitemap from "./pages/HtmlSitemap.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";
import CookiePolicy from "./pages/CookiePolicy.jsx";
import AffiliateDisclosure from "./pages/AffiliateDisclosure.jsx";
import EditorialGuidelines from "./pages/EditorialGuidelines.jsx";

import HubPage from "./pages/HubPage.jsx";

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


            <Route path="/blog/category/:slug" element={<HubPage type="category" />} />
            <Route path="/blog/location/:slug" element={<HubPage type="location" />} />

            <Route path="/about" element={<ComingSoon />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/editorial-guidelines" element={<EditorialGuidelines />} />
            <Route path="/categories" element={<ComingSoon />} />
            <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
