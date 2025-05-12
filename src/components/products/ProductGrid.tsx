
import React from "react";
import { ProductCard } from "./ProductCard";
import { Product, Category } from "@/types";

interface ProductGridProps {
  products: Product[];
  title?: string;
  category?: Category;
}

export function ProductGrid({ products, title, category }: ProductGridProps) {
  return (
    <section className="py-12">
      {title && (
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold leading-tight">{title}</h2>
        </div>
      )}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
