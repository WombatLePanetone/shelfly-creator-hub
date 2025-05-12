
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { pricingPlans } from "@/lib/data";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const PricingPage = () => {
  return (
    <div className="container px-4 py-16 md:py-24 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Choose the plan that's right for you and start creating with premium digital assets.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-sm items-start gap-8 md:max-w-4xl md:grid-cols-3 md:gap-6 lg:max-w-5xl xl:max-w-6xl mt-12">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`relative flex flex-col overflow-hidden rounded-xl border ${
              plan.highlighted 
                ? "border-primary shadow-lg" 
                : "border-border"
            } bg-background`}
          >
            {plan.highlighted && (
              <div className="absolute -right-10 top-4 rotate-45 bg-primary px-10 py-1 text-center text-xs font-semibold text-primary-foreground">
                Popular
              </div>
            )}

            <div className="p-6 pt-8">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-muted mb-4">
                {index === 0 && (
                  <svg className="h-6 w-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {index === 1 && (
                  <svg className="h-6 w-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                )}
                {index === 2 && (
                  <svg className="h-6 w-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )}
              </div>
              <div>
                <h3 className="text-lg font-medium">{plan.name}</h3>
                <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                  {plan.price}
                  {plan.name === "Pro Access" && (
                    <span className="ml-1 text-lg font-medium text-muted-foreground">/month</span>
                  )}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{plan.description}</p>
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-between p-6">
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                asChild 
                className={`mt-8 w-full ${
                  plan.highlighted ? "bg-primary hover:bg-primary/90" : ""
                }`}
                variant={plan.highlighted ? "default" : "outline"}
              >
                <Link to={plan.buttonLink}>{plan.buttonText}</Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 rounded-lg border bg-background p-6 md:p-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">What's included in the Pro Access plan?</h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  Pro Access includes unlimited downloads of all our products, including future releases. You also get priority support and early access to new products.
                </p>
              </div>
              <div>
                <h3 className="font-medium">Can I cancel my subscription anytime?</h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.
                </p>
              </div>
              <div>
                <h3 className="font-medium">Do you offer refunds?</h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  We offer a 14-day money-back guarantee for all our plans. If you're not satisfied, just let us know and we'll process your refund.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">What happens after I purchase a single product?</h3>
              <p className="text-muted-foreground mt-1 text-sm">
                After purchase, you'll get immediate access to download the product. You'll also receive an email with download instructions.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Do you offer team plans?</h3>
              <p className="text-muted-foreground mt-1 text-sm">
                Yes, we offer team plans for 5+ users. Please contact us for custom pricing and setup.
              </p>
            </div>
            <div>
              <h3 className="font-medium">What's your licensing policy?</h3>
              <p className="text-muted-foreground mt-1 text-sm">
                All products come with a standard license for personal and commercial use. For extended licensing options, please refer to each product's details.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Need more information?</h3>
              <p className="text-muted-foreground mt-1 text-sm">
                If you have any other questions, please don't hesitate to reach out to our team at <a href="/contact" className="text-primary hover:underline">contact page</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
