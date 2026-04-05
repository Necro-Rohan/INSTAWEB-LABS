import React, { useEffect } from "react";
import { Navbar, Footer } from "../blogpage/BlogSections.jsx";
import { ShieldCheck, FileText } from "lucide-react";

export default function LegalLayout({ 
  title, 
  lastUpdated, 
  readTime = "5 min read", 
  introText, 
  quote, 
  icon = FileText, // Removed the inline renaming here
  children 
}) {
  
  // Assign it to a capitalized variable inside the function instead
  const IconComponent = icon; 

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${title} | Website Studio`;
  }, [title]);

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] font-sans antialiased min-h-screen flex flex-col">
      <Navbar />

      <main className="grow max-w-3xl mx-auto px-6 pt-24 pb-20 w-full">
        
        <div className="mb-16 text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-[#f2daff] text-[#5c218b] px-4 py-1.5 rounded-full text-xs font-bold mb-6">
            <ShieldCheck className="w-4 h-4" />
            VERIFIED LEGAL FRAMEWORK
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#191c1e] mb-6 leading-tight tracking-tight">
            {title}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {introText}
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-sm font-medium text-slate-500">
            <span>Updated: {lastUpdated}</span>
            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
            <span>{readTime}</span>
          </div>
        </div>

        <section className="bg-white border border-slate-200/60 rounded-4xl p-8 md:p-12 mb-8 shadow-sm">
          
          <div className="w-20 h-20 mb-8 flex items-center justify-center rounded-full bg-[#f2daff] text-[#5c218b]">
            <IconComponent className="w-10 h-10" />
          </div>

          <div className="space-y-6 text-lg text-slate-700 leading-relaxed
            [&>h2]:text-2xl [&>h2]:font-black [&>h2]:text-[#191c1e] [&>h2]:mt-12 [&>h2]:mb-6
            [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-800 [&>h3]:mt-8 [&>h3]:mb-4
            [&>p]:text-slate-600 [&>p]:leading-relaxed
            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-3 [&>ul]:text-slate-600 [&>ul]:my-6
            [&>li]:leading-relaxed
            [&>a]:text-[#5c218b] [&>a]:font-bold hover:[&>a]:underline"
          >
            {children}
          </div>

          {quote && (
            <div className="mt-12 p-8 bg-[#f7f9fb] rounded-3xl border-l-8 border-[#5c218b] italic text-xl text-slate-700 font-medium">
              "{quote}"
            </div>
          )}
        </section>

      </main>

      <Footer />
    </div>
  );
}