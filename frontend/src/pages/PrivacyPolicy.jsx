import React from "react";
import LegalLayout from "../components/layout/LegalLayout.jsx";
import { ShieldAlert } from "lucide-react"; 

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="How do we protect your digital privacy?"
      lastUpdated="April 6, 2026"
      readTime="5 min conversational read"
      introText="Legal policies can be complex. We've reframed our governance framework to make our transparency clear and accessible."
      quote="We believe the strength of a legal framework lies in unwavering clarity."
      icon={ShieldAlert}
    >
      <h2>What exactly do we collect from you?</h2>
      <p>
        The personal information that you are asked to provide, and the reasons
        why you are asked to provide it, will be made clear to you at the point
        we ask you to provide your personal information.
      </p>
      <ul>
        <li>
          <strong>Direct interactions:</strong> When you contact us, we may
          receive your name, email address, phone number, the contents of the
          message, and any other information you may choose to provide.
        </li>
        <li>
          <strong>Website usage:</strong> We collect data on how you navigate
          our Hubs and Strategy Guides to improve our user experience.
        </li>
      </ul>

      <h2>How do we use your information?</h2>
      <p>We use the information we collect in various ways, including to:</p>
      <ul>
        <li>Provide, operate, and maintain our website</li>
        <li>Improve, personalize, and expand our website</li>
        <li>Understand and analyze how you use our website</li>
        <li>Develop new products, services, features, and functionality</li>
      </ul>

      <h2>How do we handle Log Files?</h2>
      <p>
        Website Studio follows a standard procedure of using log files. These
        files log visitors when they visit websites. The information collected
        includes internet protocol (IP) addresses, browser type, Internet
        Service Provider (ISP), date and time stamp, referring/exit pages, and
        possibly the number of clicks. These are not linked to any information
        that is personally identifiable.
      </p>

      <h2>What rights do you have over your data?</h2>
      <p>
        If you have additional questions or require more information about our
        Privacy Policy, do not hesitate to contact our compliance team at:
        <br />
        <br />
        <strong>Email:</strong> pseo.websitebuilder@gmail.com
        <br />
        <strong>Address:</strong> 149 New Montgomery Street, 4th Floor, San
        Francisco, California 94105, United States
      </p>
    </LegalLayout>
  );
}
