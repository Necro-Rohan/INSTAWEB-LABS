import React from "react";
import LegalLayout from "../components/layout/LegalLayout.jsx";
import { Scale } from "lucide-react"; 
import { Link } from "react-router-dom";

export default function EditorialGuidelines() {
  return (
    <LegalLayout 
      title="How do we ensure reporting is unbiased?" 
      lastUpdated="April 6, 2026"
      readTime="5 min conversational read"
      introText="We treat our digital strategies and local market data with rigorous precision. This is the framework governing our editorial process."
      quote="Our AI-assisted pipelines are heavily constrained and monitored by human editors to ensure absolute factual integrity."
      icon={Scale}
    >
      <p>
        Website Studio is dedicated to empowering local businesses by providing highly accurate, data-driven, and actionable digital growth strategies. To maintain the highest standards of quality and trust, our content is governed by strict editorial guidelines.
      </p>

      <h2>Accuracy and Fact-Checking</h2>
      <p>
        All content published on Website Studio undergoes a rigorous review process. We rely on primary sources, authoritative industry data, and real-world testing to inform our recommendations. Our AI-assisted pipelines are heavily constrained and monitored by human editors to ensure factual integrity.
      </p>

      <h2>Objective Analysis</h2>
      <p>
        We aim to provide impartial analysis. When comparing platforms, tools, or strategies, we present both the "Good" and the "Bad." Our goal is not to sell a specific product, but to help business owners make the most informed decision for their unique geographic location and industry.
      </p>

      <h2>Community Contributions & Suggested Edits</h2>
      <p>
        We believe that the best digital strategies evolve through collaborative community feedback. If you are a local business owner, industry expert, or reader who has spotted an area for improvement or wishes to suggest an edit to any of our published guides, we highly encourage you to reach out. We actively review and accept constructive edits that enhance the accuracy, depth, and value of our content. Please submit your suggested edits directly through the form on our <Link to="/contact"><strong className="text-[#5c218b] hover:underline">Contact Us</strong></Link> page.
      </p>

      <h2>Our Corrections Policy</h2>
      <p>
        The digital landscape moves quickly, and errors can happen. If a factual error is identified in our content, we are committed to correcting it promptly and transparently. If you spot a critical error requiring immediate attention, please email our editorial team at <strong>pseo.websitebuilder@gmail.com</strong>.
      </p>

      <h2>AI and Automation Disclosure</h2>
      <p>
        Website Studio utilizes advanced proprietary technology to structure, scale, and analyze data for local markets. However, the foundational strategies, architectures, and final editorial decisions are dictated by experienced digital strategists and human oversight.
      </p>
    </LegalLayout>
  );
}