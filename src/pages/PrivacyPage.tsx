
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PrivacyPage = () => {
  return (
    <div className="container max-w-3xl mx-auto px-4 py-12 md:py-16">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: May 12, 2025</p>

        <div className="prose prose-slate dark:prose-invert max-w-none mt-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold">1. Introduction</h2>
            <p>
              Welcome to Shelfly's Privacy Policy. This Privacy Policy describes how we collect, use, process, and disclose your information, including personal information, in conjunction with your access to and use of our platform.
            </p>
            <p>
              When this policy mentions "Shelfly," "we," "us," or "our," it refers to Shelfly, Inc. that is responsible for your information under this Privacy Policy.
            </p>
            <p>
              We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy or our practices with regards to your personal information, please contact us at privacy@shelfly.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">2. Information We Collect</h2>
            <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
            <p>Types of Data Collected:</p>
            <ul>
              <li>
                <strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
                <ul>
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Cookies and Usage Data</li>
                  <li>Payment information (through our secure payment processors)</li>
                </ul>
              </li>
              <li>
                <strong>Usage Data:</strong> We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">3. How We Use Your Information</h2>
            <p>Shelfly uses the collected data for various purposes:</p>
            <ul>
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To fulfill any other purpose for which you provide it</li>
              <li>To process payments and fulfill orders</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">4. Data Security</h2>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">5. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.
            </p>
            <p>
              Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.
            </p>
            <p>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">6. Service Providers</h2>
            <p>
              We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.
            </p>
            <p>
              These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">7. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
            <p>
              We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul>
              <li>By email: privacy@shelfly.com</li>
              <li>By visiting the Contact page on our website</li>
            </ul>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link to="/">Return to Homepage</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
