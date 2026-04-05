import React from "react";
import LegalLayout from "../components/layout/LegalLayout.jsx";
import { FileSignature } from "lucide-react"; 

export default function TermsOfService() {
  return (
    <LegalLayout 
      title="What are the rules of engagement?" 
      lastUpdated="April 6, 2026"
      readTime="6 min conversational read"
      introText="By accessing our extensive library of localized digital growth strategies, you agree to a specific set of operational rules."
      quote="These terms outline the authorized use of our proprietary programmatic architectures."
      icon={FileSignature}
    >
      <p>
        Welcome to Website Studio. These terms and conditions outline the rules and regulations for the use of our Website and digital services.
      </p>

      <h2>Acceptance of Terms</h2>
      <p>
        By accessing this website, we assume you accept these terms and conditions. Do not continue to use Website Studio if you do not agree to take all of the terms and conditions stated on this page.
      </p>

      <h2>License and Intellectual Property</h2>
      <p>
        Unless otherwise stated, Website Studio and/or its licensors own the intellectual property rights for all material on Website Studio. All intellectual property rights are reserved. You may access this from Website Studio for your own personal use subjected to restrictions set in these terms and conditions.
      </p>
      <p>You must not:</p>
      <ul>
        <li>Republish material from Website Studio</li>
        <li>Sell, rent or sub-license material from Website Studio</li>
        <li>Reproduce, duplicate or copy material from Website Studio</li>
        <li>Redistribute content from Website Studio</li>
      </ul>

      <h2>User Generated Content</h2>
      <p>
        Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Website Studio does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Website Studio, its agents, and/or affiliates.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        In no event shall Website Studio, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website. Website Studio shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
      </p>
    </LegalLayout>
  );
}