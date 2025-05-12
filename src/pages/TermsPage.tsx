
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TermsPage = () => {
  return (
    <div className="container max-w-3xl mx-auto px-4 py-12 md:py-16">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Terms of Service</h1>
        <p className="text-muted-foreground">Last updated: May 12, 2025</p>

        <div className="prose prose-slate dark:prose-invert max-w-none mt-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold">1. Introduction</h2>
            <p>
              Welcome to Shelfly ("Company", "we", "our", "us")! As you have clicked on our Terms of Service, please read these Terms of Service carefully before using our platform or purchasing any products.
            </p>
            <p>
              These Terms of Service govern your use of our website located at shelfly.com (together or individually "Service") operated by Shelfly.
            </p>
            <p>
              Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our digital products.
            </p>
            <p>
              By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">2. License to Use Digital Products</h2>
            <p>
              When you purchase a product from Shelfly, we grant you a non-exclusive, non-transferable license to use the digital product in accordance with the specific license terms included with the product.
            </p>
            <p>
              Unless otherwise specified, you may use our products for both personal and commercial purposes. However, you may not redistribute, resell, or provide access to our products to others without prior written consent.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold">3. Subscriptions</h2>
            <p>
              Some of our Services are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring and periodic basis ("Billing Cycle"). Billing cycles are set on a monthly basis.
            </p>
            <p>
              At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or Shelfly cancels it. You may cancel your Subscription renewal through your account settings page.
            </p>
            <p>
              A valid payment method, including credit card, is required to process the payment for your Subscription. You shall provide accurate and complete billing information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">4. Fee Changes</h2>
            <p>
              Shelfly, in its sole discretion and at any time, may modify the Subscription fees for the Subscriptions. Any Subscription fee change will become effective at the end of the then-current Billing Cycle.
            </p>
            <p>
              Shelfly will provide you with reasonable prior notice of any change in Subscription fees to give you an opportunity to terminate your Subscription before such change becomes effective.
            </p>
            <p>
              Your continued use of the Service after the Subscription fee change comes into effect constitutes your agreement to pay the modified Subscription fee amount.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">5. Refunds</h2>
            <p>
              Except when required by law, paid Subscription fees are non-refundable.
            </p>
            <p>
              Certain refund requests for Subscriptions may be considered by Shelfly on a case-by-case basis and granted at the sole discretion of Shelfly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">6. Content</h2>
            <p>
              Our Service allows you to download and use content that is available on our website ("Product Content").
            </p>
            <p>
              Shelfly claims no ownership rights over the Product Content that is available for purchase through the Service. All rights are retained by the original creators.
            </p>
            <p>
              Shelfly has the right (though not the obligation) to, in Shelfly's sole discretion, refuse or remove any Product Content that, in our reasonable opinion, violates any Shelfly policy or is in any way harmful or objectionable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">7. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>
            <p>
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">8. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <ul>
              <li>By email: terms@shelfly.com</li>
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

export default TermsPage;
