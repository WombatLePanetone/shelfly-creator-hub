
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group overflow-hidden rounded-lg border bg-background shadow-sm hover:shadow-md transition-all"
    >
      <Link to={`/product/${product.id}`} className="block overflow-hidden">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-medium">{product.name}</h3>
        </Link>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
          {product.shortDescription}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-md font-medium">
            {product.price === 0 ? "Free" : `$${product.price}`}
          </span>
          <Button
            variant="outline"
            size="sm"
            asChild
            className="hover:bg-primary hover:text-primary-foreground"
          >
            <Link to={`/product/${product.id}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
