import React from "react";
import LegalLayout from "../components/layout/LegalLayout.jsx";
import { Cookie } from "lucide-react"; 

export default function CookiePolicy() {
  return (
    <LegalLayout 
      title="How do we use cookies?" 
      lastUpdated="April 6, 2026"
      readTime="4 min conversational read"
      introText="To ensure our programmatic hubs load at lightning speed, we use specific technologies. Here is exactly what we track and why."
      quote="We use first-party and third-party cookies to route traffic efficiently and ensure our pages load instantly for you."
      icon={Cookie}
    >
      <p>
        This Cookie Policy explains how Website Studio uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
      </p>

      <h2>What exactly are Cookies?</h2>
      <p>
        Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
      </p>

      <h2>Why do we use Cookies?</h2>
      <p>We use first-party and third-party cookies for several reasons:</p>
      <ul>
        <li><strong>Essential Cookies:</strong> Some cookies are required for technical reasons in order for our website to operate securely.</li>
        <li><strong>Analytics Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are.</li>
        <li><strong>Performance Cookies:</strong> These help us route traffic efficiently and ensure our high-speed pages load instantly for you.</li>
      </ul>

      <h2>How can I control Cookies?</h2>
      <p>
        You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality and areas of our website may be restricted.
      </p>

      <h2>Questions about our technology?</h2>
      <p>
        If you have any questions about our use of cookies or other technologies, please email us at <strong>pseo.websitebuilder@gmail.com</strong>.
      </p>
    </LegalLayout>
  );
}