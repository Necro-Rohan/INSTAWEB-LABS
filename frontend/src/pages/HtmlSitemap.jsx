import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api.js';

export default function HtmlSitemap() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // We fetch a high limit (50) for the sitemap since it's just text links
  useEffect(() => {
    document.title = "Site Directory | Website Studio";
    window.scrollTo(0, 0);

    const fetchSitemapLinks = async () => {
      setLoading(true);
      api.get(`/blogs?page=${currentPage}&limit=50&status=published`)
        .then((res) => {
          setPosts(res.data.posts);
          setTotalPages(res.data.totalPages);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch sitemap links", err);
          setLoading(false);
        });
    };

    fetchSitemapLinks();
  }, [currentPage]);

  const coreLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Editorial Guidelines", path: "/editorial-guidelines" },
    { name: "Top Categories", path: "/categories" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms-of-service" },
    { name: "Affiliate Disclosure", path: "/affiliate-disclosure" },
    { name: "Cookie Policy", path: "/cookie-policy" },
  ];

  return (
    <div className="bg-[#f7f9fb]/90 text-slate-900 font-sans antialiased min-h-screen flex flex-col selection:bg-[#5c218b]/20 selection:text-[#5c218b]">
      
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="mx-auto flex h-16 max-w-7xl py-4 items-center justify-between px-6 lg:px-12">
          <Link to="/" className="text-2xl font-black tracking-tighter flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center bg-[#5c218b] text-white rounded-lg shadow-sm group-hover:bg-[#4a1a70] transition-colors">
              <img src="/InstaWeb-Labs-icon.svg" className="w-5 h-5 invert brightness-0" alt="Logo" />
            </div>
            <span className="text-[#191c1e] group-hover:text-[#5c218b] transition-colors">Website Studio</span>
          </Link>
          <Link to="/" className="text-sm font-bold text-slate-500 hover:text-[#5c218b] transition-colors flex items-center gap-2">
            <span>←</span> Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 lg:px-12 pt-28 md:pt-32 pb-20 w-full grow">
        
        <div className="mb-16 border-b border-slate-200 pb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight" style={{ fontFamily: "'Newsreader', serif" }}>
            Site Directory
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl">
            A complete human-readable overview of Website Studio. Find core company pages and browse our comprehensive local business guides.
          </p>
        </div>

        {/* Section 1: Core Pages */}
        <section className="mb-16">
          <h2 className="text-sm font-black uppercase tracking-widest text-[#5c218b] mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-[#e0b6ff]"></span> Core Pages
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            {coreLinks.map((link, idx) => (
              <Link 
                key={idx} 
                to={link.path} 
                className="text-[15px] font-medium text-slate-600 hover:text-[#5c218b] hover:underline underline-offset-4 decoration-[#e0b6ff] transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Section 2: Blog Guides Directory */}
        <section>
          <h2 className="text-sm font-black uppercase tracking-widest text-[#5c218b] mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-[#e0b6ff]"></span> Local Business Guides
          </h2>
          
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm min-h-100">
            {loading ? (
              <div className="animate-pulse flex flex-col gap-4">
                {[...Array(15)].map((_, i) => (
                  <div key={i} className="h-4 bg-slate-100 rounded w-full max-w-md"></div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                {posts.map((post) => (
                  <Link 
                    key={post._id} 
                    to={`/blog/${post.slug}`} 
                    className="text-[15px] text-slate-600 hover:text-[#5c218b] group flex items-start gap-2 transition-colors"
                  >
                    <span className="text-[#e0b6ff] mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">↳</span>
                    <span className="truncate group-hover:underline underline-offset-4 decoration-[#e0b6ff]/50">
                      {post.h1}
                    </span>
                  </Link>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-2 md:px-8 py-1.5 md:py-2.5 rounded-full text-sm font-bold border border-slate-200 text-slate-600 hover:border-[#5c218b] hover:text-[#5c218b] disabled:opacity-50 disabled:pointer-events-none transition-all"
                >
                  ← Previous
                </button>
                <span className="text-sm font-bold text-[#5c218b] bg-[#f2daff] px-2.5 md:px-8 py-1.5 md:py-2.5 rounded-full">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-2.5 md:px-8 py-1.5 md:py-2.5 rounded-full text-sm font-bold border border-slate-200 text-slate-600 hover:border-[#5c218b] hover:text-[#5c218b] disabled:opacity-50 disabled:pointer-events-none transition-all"
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        </section>

      </main>
    </div>
  );
}