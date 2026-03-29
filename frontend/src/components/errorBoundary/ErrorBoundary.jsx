import React from 'react';
import { AlertTriangle, RefreshCcw } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Updating state so the next render shows the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Caught by Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // The Fallback UI
      return (
        <div className="min-h-screen bg-[#f7f9fb] flex flex-col items-center justify-center px-6">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl max-w-lg w-full text-center border border-slate-100">
            <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-10 h-10 text-red-500" />
            </div>
            <h1 className="text-3xl font-black text-[#191c1e] mb-4 tracking-tight">
              Connection Lost
            </h1>
            <p className="text-[#4a4455] text-lg mb-8 leading-relaxed">
              We couldn't load this page. Please check your internet connection and try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center w-full px-8 py-4 bg-[#5c218b] text-white rounded-full font-bold text-lg hover:bg-[#4a1a70] transition-colors gap-2 group"
            >
              <RefreshCcw className="w-5 h-5 group-hover:-rotate-180 transition-transform duration-500" />
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;