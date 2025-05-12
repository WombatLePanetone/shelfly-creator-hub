
import React from "react";
import { useParams } from "react-router-dom";
import { ProductGrid } from "@/components/products/ProductGrid";
import { products, categories } from "@/lib/data";
import { Category } from "@/types";

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  const isAllCategory = categoryId === "all";
  const categoryName = isAllCategory
    ? "All Products"
    : categories.find(
        (c) => c.toLowerCase().replace(/\s+/g, "-") === categoryId
      );

  const filteredProducts = isAllCategory
    ? products
    : products.filter((product) => 
        product.category.toLowerCase().replace(/\s+/g, "-") === categoryId
      );

  return (
    <div className="container px-4 py-8 md:py-12 md:px-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{categoryName}</h1>
        <p className="mt-2 text-muted-foreground">
          {isAllCategory
            ? `Browse our entire collection of ${products.length} premium digital products`
            : `Explore our ${filteredProducts.length} ${categoryName?.toLowerCase() || ""} products`}
        </p>
      </header>

      {filteredProducts.length > 0 ? (
        <ProductGrid products={filteredProducts} />
      ) : (
        <div className="flex flex-col items-center justify-center py-12">
          <h2 className="text-xl font-medium">No products found</h2>
          <p className="text-muted-foreground mt-2">
            We couldn't find any products in this category. Please check back later.
          </p>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
