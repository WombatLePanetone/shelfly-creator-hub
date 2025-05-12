
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { CheckIcon, ShoppingCart } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const { addItem } = useCart();
  const [showCheckout, setShowCheckout] = React.useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = React.useState(false);

  const handleAddToCart = () => {
    addItem(product.id);
  };

  const handleBuyNow = () => {
    setShowCheckout(true);
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutSuccess(true);
    setTimeout(() => {
      setCheckoutSuccess(false);
      setShowCheckout(false);
    }, 2000);
  };

  const renderProductDetails = () => {
    switch (product.details.type) {
      case "UI Kits":
        return (
          <>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="rounded-lg bg-accent/50 p-4">
                <h4 className="text-sm font-medium">Tools Supported</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.details.toolsSupported.map((tool) => (
                    <span key={tool} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-lg bg-accent/50 p-4">
                <h4 className="text-sm font-medium">File Types</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.details.fileTypes.map((type) => (
                    <span key={type} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-accent/50 p-4">
              <h4 className="text-sm font-medium">Included Screens</h4>
              <p className="mt-1 text-2xl font-semibold">{product.details.screenCount}</p>
            </div>
          </>
        );
      case "Mockups":
        return (
          <>
            <div className="rounded-lg bg-accent/50 p-4 mt-6">
              <h4 className="text-sm font-medium">Device Types</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.details.deviceTypes.map((device) => (
                  <span key={device} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {device}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-accent/50 p-4">
              <h4 className="text-sm font-medium">Resolution</h4>
              <p className="mt-1 text-lg font-medium">{product.details.resolution}</p>
            </div>
          </>
        );
      case "Illustrations":
        return (
          <>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="rounded-lg bg-accent/50 p-4">
                <h4 className="text-sm font-medium">Style</h4>
                <p className="mt-1 text-lg font-medium">{product.details.style}</p>
              </div>
              <div className="rounded-lg bg-accent/50 p-4">
                <h4 className="text-sm font-medium">Licensing</h4>
                <p className="mt-1 text-lg font-medium">{product.details.licensing}</p>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-accent/50 p-4">
              <h4 className="text-sm font-medium">Formats</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.details.formats.map((format) => (
                  <span key={format} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {format}
                  </span>
                ))}
              </div>
            </div>
          </>
        );
      case "Prompt Packs":
        return (
          <>
            <div className="rounded-lg bg-accent/50 p-4 mt-6">
              <h4 className="text-sm font-medium">AI Models Compatibility</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.details.aiModels.map((model) => (
                  <span key={model} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {model}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Example Prompts</h4>
              <ul className="space-y-2">
                {product.details.examplePrompts.map((prompt, index) => (
                  <li key={index} className="rounded-lg bg-accent/50 p-3 text-sm italic">
                    "{prompt}"
                  </li>
                ))}
              </ul>
            </div>
          </>
        );
      case "Stock Images":
        return (
          <>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="rounded-lg bg-accent/50 p-4">
                <h4 className="text-sm font-medium">Resolution</h4>
                <p className="mt-1 text-lg font-medium">{product.details.resolution}</p>
              </div>
              <div className="rounded-lg bg-accent/50 p-4">
                <h4 className="text-sm font-medium">Licensing</h4>
                <p className="mt-1 text-lg font-medium">{product.details.licensing}</p>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
        <div className="rounded-lg border overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
          <div className="mt-2">
            <p className="text-xl font-medium">
              {product.price === 0 ? "Free" : `$${product.price}`}
            </p>
          </div>

          <div className="mt-4">
            <p className="text-base text-muted-foreground">{product.description}</p>
          </div>

          {renderProductDetails()}

          <div className="mt-8 flex flex-col gap-4">
            <Button 
              onClick={handleBuyNow} 
              className="w-full bg-primary hover:bg-primary/90"
              size="lg"
            >
              Buy Now
            </Button>
            
            <Button 
              variant="outline" 
              onClick={handleAddToCart}
              className="w-full"
              size="lg"
            >
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
            
            <Link 
              to="/pricing" 
              className="group relative overflow-hidden rounded-lg border px-5 py-2.5 transition-all hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white"
            >
              <span className="relative flex items-center justify-center text-center w-full">
                Unlock all products for $10/mo
              </span>
            </Link>
          </div>
        </div>
      </div>

      <Dialog open={showCheckout} onOpenChange={setShowCheckout}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex justify-between items-center">
              <span>Complete Your Purchase</span>
              <span className="text-sm font-normal text-muted-foreground">${product.price}</span>
            </DialogTitle>
          </DialogHeader>
          {checkoutSuccess ? (
            <div className="py-6 flex flex-col items-center justify-center text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <CheckIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mt-3 text-lg font-medium">Payment successful!</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Thank you for your purchase. You'll receive download instructions shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleCheckoutSubmit} className="space-y-4">
              <div>
                <label htmlFor="card-number" className="block text-sm font-medium">
                  Card Information
                </label>
                <input
                  type="text"
                  id="card-number"
                  placeholder="1234 1234 1234 1234"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                  required
                />
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="MM / YY"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                    required
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name on Card
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Complete Purchase
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
