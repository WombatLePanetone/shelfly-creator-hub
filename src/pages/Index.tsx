
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/products/ProductGrid";
import { products, categories } from "@/lib/data";
import { motion } from "framer-motion";

const Index = () => {
  const featuredProducts = products.filter((product) => product.featured);
  
  const getCategoryProducts = (category: string) => {
    return products.filter((product) => product.category === category).slice(0, 4);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 md:py-24 lg:py-32 xl:py-40">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center space-y-4"
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Premium Digital Products for Creative Professionals
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our handcrafted collection of high-quality digital assets for your next project. From UI Kits to Illustrations, we've got you covered.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/category/all">Browse Products</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center"
            >
              <div className="grid grid-cols-2 gap-4">
                {featuredProducts.slice(0, 4).map((product, index) => (
                  <Link to={`/product/${product.id}`} key={product.id}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`rounded-lg object-cover shadow-lg transform transition-all hover:scale-105 ${
                        index === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"
                      }`}
                      style={{ height: index === 0 ? "300px" : "150px", width: "100%" }}
                    />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="bg-muted/50 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Products</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Handpicked premium assets to elevate your projects.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 xl:max-w-6xl xl:grid-cols-4 mt-8">
            {featuredProducts.map((product) => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-colors hover:border-primary"
              >
                <div className="aspect-square overflow-hidden rounded-md">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{product.shortDescription}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="font-medium">
                      {product.price === 0 ? "Free" : `$${product.price}`}
                    </span>
                    <span className="text-xs text-muted-foreground border px-2 py-0.5 rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Category Sections */}
      <div className="container px-4 py-12 md:px-6">
        {categories.map((category) => {
          const categoryProducts = getCategoryProducts(category);
          if (categoryProducts.length === 0) return null;
          
          return (
            <section key={category} className="my-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">{category}</h2>
                <Button asChild variant="ghost">
                  <Link to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}>
                    View All
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {categoryProducts.map((product) => (
                  <Link
                    to={`/product/${product.id}`}
                    key={product.id}
                    className="group overflow-hidden rounded-lg border bg-background shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium">{product.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
                        {product.shortDescription}
                      </p>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-md font-medium">
                          {product.price === 0 ? "Free" : `$${product.price}`}
                        </span>
                        <span className="text-xs px-2 py-1 bg-muted rounded-full">
                          View Details
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to unlock your creative potential?
              </h2>
              <p className="text-primary-foreground/90 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                Get unlimited access to all our premium digital assets with one simple subscription.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-6">
              <Button asChild size="lg" variant="secondary">
                <Link to="/pricing">See Pricing Options</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/category/all">Browse Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial/Info Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr_1fr] lg:gap-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">100+</h3>
                <p className="text-muted-foreground">Premium Products</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">5,000+</h3>
                <p className="text-muted-foreground">Happy Creators</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">4.9/5</h3>
                <p className="text-muted-foreground">Customer Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
