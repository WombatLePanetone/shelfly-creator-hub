
import React from "react";
import { useParams, Link } from "react-router-dom";
import { ProductDetail } from "@/components/products/ProductDetail";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="container px-4 py-16 text-center">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
        <p className="mt-4 text-muted-foreground">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild className="mt-6">
          <Link to="/category/all">Browse All Products</Link>
        </Button>
      </div>
    );
  }

  // Get related products from the same category
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="container px-4 py-8 md:px-6">
      <Link
        to={`/category/${product.category.toLowerCase().replace(/\s+/g, "-")}`}
        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6"
      >
        <ArrowLeftIcon className="mr-2 h-4 w-4" />
        Back to {product.category}
      </Link>

      <ProductDetail product={product} />

      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                to={`/product/${relatedProduct.id}`}
                className="group overflow-hidden rounded-lg border bg-background shadow-sm hover:shadow-md transition-all"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-md font-medium">{relatedProduct.name}</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-md font-medium">
                      {relatedProduct.price === 0 ? "Free" : `$${relatedProduct.price}`}
                    </span>
                    <span className="text-xs px-2 py-1 bg-muted rounded-full">View</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
