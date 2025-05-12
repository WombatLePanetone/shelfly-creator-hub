
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="container px-4 py-16 md:py-24 md:px-6">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Shelfly
          </h1>
          <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
            We're a team of passionate creators dedicated to providing high-quality digital products for designers, developers, and creative professionals.
          </p>
          <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
            Our mission is to help creators build better products faster by offering premium digital assets that save time and elevate the quality of your work.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-xl overflow-hidden"
        >
          <img
            alt="Team working together"
            className="aspect-[4/3] object-cover w-full"
            height="400"
            src="/assets/products/about-image.webp"
          />
        </motion.div>
      </div>

      <div className="mt-16 md:mt-24">
        <div className="text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Our Values</h2>
          <p className="mt-2 text-muted-foreground md:text-lg">
            The principles that guide our work and company culture.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0 }}
            className="rounded-lg border bg-background p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg
                className="h-6 w-6"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium">Quality First</h3>
            <p className="mt-2 text-muted-foreground">
              We obsess over details to ensure all our products meet the highest quality standards.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-lg border bg-background p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg
                className="h-6 w-6"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium">Creator-First</h3>
            <p className="mt-2 text-muted-foreground">
              We build our products with creators in mind, focusing on what will help you succeed.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="rounded-lg border bg-background p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg
                className="h-6 w-6"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium">Continuous Improvement</h3>
            <p className="mt-2 text-muted-foreground">
              We're constantly learning and improving our products based on your feedback.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mt-16 md:mt-24">
        <div className="text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Our Team</h2>
          <p className="mt-2 text-muted-foreground md:text-lg">
            Meet the people behind Shelfly.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            {
              name: "Sarah Johnson",
              role: "Founder & Creative Director",
              image: "/assets/products/team-1.webp"
            },
            {
              name: "David Chen",
              role: "Lead Designer",
              image: "/assets/products/team-2.webp"
            },
            {
              name: "Michael Rodriguez",
              role: "Product Manager",
              image: "/assets/products/team-3.webp"
            }
          ].map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-lg overflow-hidden bg-background border"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  alt={member.name}
                  className="object-cover w-full h-full"
                  src={member.image}
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-xl bg-muted/50 p-8 md:mt-24 md:p-12">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Ready to get started?</h2>
            <p className="mt-2 text-muted-foreground">
              Browse our collection of premium digital products today.
            </p>
          </div>
          <Button asChild size="lg">
            <Link to="/category/all">Explore Products</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
