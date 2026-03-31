import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ComingSoon() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Coming Soon | Website Studio";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f7f9fb]/90 text-slate-900 font-sans antialiased min-h-screen flex flex-col selection:bg-[#5c218b]/20 selection:text-[#5c218b] overflow-x-hidden">
      <header className="absolute top-0 w-full z-50 p-6 md:p-12 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-black tracking-tighter flex items-center gap-2 group"
        >
          <div className="flex h-8 w-8 items-center justify-center bg-[#5c218b] text-white rounded-lg shadow-sm group-hover:bg-[#4a1a70] transition-colors">
            <img
              src="/InstaWeb-Labs-icon.svg"
              className="w-5 h-5 invert brightness-0"
              alt="Logo"
            />
          </div>
          <span className="text-[#191c1e] group-hover:text-[#5c218b] transition-colors">Website Studio</span>
        </Link>
        <button 
          onClick={() => navigate(-1)} 
          className="text-sm font-bold text-slate-500 hover:text-[#5c218b] transition-colors flex items-center gap-2"
        >
          <span>←</span> Go Back
        </button>
      </header>

      <main className="grow flex flex-col items-center justify-center px-6 lg:px-12 pt-24 pb-20 w-full max-w-4xl mx-auto relative">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#e0b6ff]/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f2daff] border border-[#e0b6ff]/50 mb-8 shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5c218b] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#5c218b]"></span>
          </span>
          <span className="text-[11px] font-black uppercase tracking-widest text-[#5c218b]">
            In Development
          </span>
        </div>

        <h1 
          className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-slate-900 mb-6 text-center"
          style={{ fontFamily: "'Newsreader', serif" }}
        >
          Something brilliant is <span className="italic text-[#5c218b]">cooking.</span>
        </h1>
        <p className="text-xl md:text-2xl leading-relaxed text-slate-500 max-w-2xl text-center mb-12 font-medium">
          We are currently building this page to bring you even more expert insights and tools for your local business.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
          <Link
            to="/"
            className="w-full text-center bg-[#5c218b] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#4a1a70] shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            Return to Homepage
          </Link>
        </div>

        <p className="mt-16 text-sm text-slate-400 font-medium">
          Expected launch: <span className="font-bold text-slate-500">Q3 2026</span>
        </p>

      </main>
    </div>
  );
}