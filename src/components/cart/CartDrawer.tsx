
import React from "react";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { products } from "@/lib/data";
import { Product } from "@/types";
import { MinusIcon, PlusIcon, Trash2 } from "lucide-react";

export function CartDrawer() {
  const { items, removeItem, updateQuantity, isCartOpen, setIsCartOpen, totalPrice } = useCart();

  const cartProducts = items.map((item) => {
    const product = products.find((p) => p.id === item.productId);
    return {
      ...item,
      product: product as Product,
    };
  });

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="flex flex-col w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Your Cart ({items.length})</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-6">
          {cartProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-muted-foreground mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <h3 className="font-medium text-lg">Your cart is empty</h3>
              <p className="text-muted-foreground mt-2">
                Looks like you haven't added any products to your cart yet.
              </p>
              <Button
                className="mt-6"
                onClick={() => setIsCartOpen(false)}
                asChild
              >
                <Link to="/category/all">Start Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="divide-y">
              {cartProducts.map(({ product, quantity, productId }) => (
                <div key={productId} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium">
                        <h3>
                          <Link 
                            to={`/product/${product.id}`}
                            onClick={() => setIsCartOpen(false)}
                            className="hover:underline"
                          >
                            {product.name}
                          </Link>
                        </h3>
                        <p className="ml-4">${product.price * quantity}</p>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {product.category}
                      </p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="flex items-center border rounded-md">
                        <button
                          onClick={() => updateQuantity(productId, quantity - 1)}
                          className="p-1 px-2"
                          disabled={quantity <= 1}
                          aria-label="Decrease quantity"
                        >
                          <MinusIcon className="h-4 w-4" />
                        </button>
                        <span className="px-2 py-1">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(productId, quantity + 1)}
                          className="p-1 px-2"
                          aria-label="Increase quantity"
                        >
                          <PlusIcon className="h-4 w-4" />
                        </button>
                      </div>

                      <button
                        type="button"
                        className="text-sm font-medium text-primary hover:text-primary/80 flex items-center"
                        onClick={() => removeItem(productId)}
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartProducts.length > 0 && (
          <SheetFooter className="border-t px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium mb-4">
              <p>Subtotal</p>
              <p>${totalPrice}</p>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Shipping and taxes calculated at checkout.
            </p>
            <Button
              className="w-full"
              onClick={() => {
                setIsCartOpen(false);
              }}
              asChild
            >
              <Link to="/checkout">Checkout</Link>
            </Button>
            <div className="mt-3 flex justify-center text-sm text-muted-foreground">
              <p>
                or{" "}
                <button
                  type="button"
                  className="font-medium text-primary hover:text-primary/80"
                  onClick={() => setIsCartOpen(false)}
                >
                  Continue Shopping
                </button>
              </p>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
