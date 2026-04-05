import React from "react";
import LegalLayout from "../components/layout/LegalLayout.jsx";
import { Handshake } from "lucide-react"; 

export default function AffiliateDisclosure() {
  return (
    <LegalLayout 
      title="How do we fund our operations?" 
      lastUpdated="April 6, 2026"
      readTime="3 min conversational read"
      introText="Transparency is fundamental to our mission. This framework explains how we sustain our research and content pipelines without compromising editorial integrity."
      quote="Our primary goal is to provide local businesses with the most accurate, reliable, and actionable digital strategies."
      icon={Handshake}
    >
      <p>
        Transparency and trust are fundamental to the mission of Website Studio. To support our ongoing operations, research, and the creation of in-depth guides, we participate in various affiliate marketing programs.
      </p>

      <h2>What exactly is an Affiliate Link?</h2>
      <p>
        Some of the links on Website Studio are "affiliate links." This means if you click on the link and purchase an item or subscribe to a service, Website Studio may receive an affiliate commission. This comes at <strong>no additional cost to you</strong>.
      </p>

      <h2>How do we maintain objectivity?</h2>
      <p>
        Our primary goal is to provide local businesses with the most accurate, reliable, and actionable digital strategies. The inclusion of an affiliate link does not influence our editorial independence. We only recommend platforms, tools, and services that we have thoroughly researched and genuinely believe will deliver value to our readers.
      </p>
      <p>
        For instance, when we rank website builders in our industry hubs, the rankings are generated based on feature sets, performance, and suitability for that specific niche—not on the potential for affiliate revenue.
      </p>

      <h2>What about Sponsored Content?</h2>
      <p>
        In the event that Website Studio publishes sponsored content (where a company pays us directly to write about them), it will be explicitly labeled as "Sponsored" at the top of the article.
      </p>

      <h2>Still have questions?</h2>
      <p>
        If you have any questions regarding our affiliate relationships, please reach out to our team at <strong>pseo.websitebuilder@gmail.com</strong>.
      </p>
    </LegalLayout>
  );
}