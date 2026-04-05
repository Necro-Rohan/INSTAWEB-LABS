import React, { useEffect, useState } from "react";
import { Navbar, Footer } from "../components/blogpage/BlogSections.jsx";
import { MapPin, Mail, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error

  const STATICFORMS_API_KEY = import.meta.env.VITE_STATICFORMS_API_KEY;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us | Website Studio";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.target;
    
    // the payload exactly as StaticForms.dev expects it(from their documentation).
    const formData = new FormData();
    formData.append("apiKey", STATICFORMS_API_KEY);
    formData.append("name", `${form.firstName.value} ${form.lastName.value}`);
    formData.append("email", form.email.value);
    formData.append("message", form.message.value);
    formData.append("subject", "New Contact Form Submission - Website Studio");
    formData.append("replyTo", "@"); // Tell StaticForms to use the submitted 'email' field as the Reply-To address

    try {
      const response = await fetch("https://api.staticforms.dev/submit", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const json = await response.json();

      if (response.ok && json.success) {
        setStatus("success");
        form.reset();
      } else {
        console.error("StaticForms.dev Error:", json.message);
        setStatus("error");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] font-sans antialiased min-h-screen flex flex-col">
      <Navbar />

      <main className="grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#191c1e] mb-6">
              Let's build something <span className="text-[#5c218b]">extraordinary.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Whether you have a question about our builder, need technical support, or want to discuss enterprise solutions, our team in San Francisco is ready to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
            
            {/* Left Col: Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Address Card */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 bg-[#f2daff] rounded-2xl flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-[#5c218b]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Global Headquarters</h3>
                <address className="text-slate-600 not-italic leading-relaxed">
                  149 New Montgomery Street<br />
                  4th Floor<br />
                  San Francisco, California 94105<br />
                  United States
                </address>
              </div>

              {/* Quick Contacts */}
              <div className="bg-[#191c1e] p-8 rounded-3xl border border-slate-800 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-6">Direct Lines</h3>
                
                <div className="space-y-6">
                  <a href="mailto:pseo.websitebuilder@gmail.com" className="flex items-start gap-4 group">
                    <Mail className="w-5 h-5 text-[#e0b6ff] mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-bold text-white group-hover:text-[#e0b6ff] transition-colors">Support Team</div>
                      <div className="text-slate-400 text-sm break-all">pseo.websitebuilder@gmail.com</div>
                    </div>
                  </a>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-[#e0b6ff] mt-0.5" />
                    <div>
                      <div className="font-bold text-white">Business Hours</div>
                      <div className="text-slate-400 text-sm">Mon-Fri: 9:00 AM - 6:00 PM (PST)</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Col: Contact Form */}
            <div className="lg:col-span-3 bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-black text-slate-900 mb-8">Send us a message</h3>
              
              {status === "success" ? (
                <div className="bg-[#f2daff] p-8 rounded-2xl flex flex-col items-center text-center animate-fade-in border border-[#5c218b]/20">
                  <CheckCircle2 className="w-16 h-16 text-[#5c218b] mb-4" />
                  <h4 className="text-2xl font-bold text-[#191c1e] mb-2">Message Sent!</h4>
                  <p className="text-[#4a4455]">Thanks for reaching out. Our team will get back to you shortly.</p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="mt-6 font-bold text-[#5c218b] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">First Name</label>
                      <input type="text" name="firstName" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5c218b] focus:border-transparent transition-all" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Last Name</label>
                      <input type="text" name="lastName" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5c218b] focus:border-transparent transition-all" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Work Email</label>
                    <input type="email" name="email" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5c218b] focus:border-transparent transition-all" placeholder="john@company.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">How can we help?</label>
                    <textarea name="message" required rows="5" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5c218b] focus:border-transparent transition-all resize-none" placeholder="Tell us about your project or issue..."></textarea>
                  </div>

                  {status === "error" && (
                    <div className="text-red-500 text-sm font-bold">Oops! There was a problem submitting your form. Please try again.</div>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === "submitting"}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#5c218b] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#4a1a70] transition-colors disabled:opacity-70"
                  >
                    {status === "submitting" ? "Sending..." : "Send Message"} <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}