
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/context/CartContext";
import { products } from "@/lib/data";
import { CheckIcon } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { motion } from "framer-motion";

const CheckoutPage = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const isPro = searchParams.get("plan") === "pro";

  const [checkoutInfo, setCheckoutInfo] = useState({
    email: "",
    name: "",
    cardNumber: "",
    expiry: "",
    cvc: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const cartProducts = items.map((item) => {
    const product = products.find((p) => p.id === item.productId);
    return { ...item, product };
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCheckoutInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate checkout process
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsCompleted(true);
    clearCart();
    
    // Redirect to success page after a delay
    setTimeout(() => {
      navigate("/");
      toast.success("Thank you for your purchase!");
    }, 3000);
  };

  // Redirect if cart is empty and not pro subscription
  useEffect(() => {
    if (items.length === 0 && !isPro) {
      navigate("/category/all");
      toast.error("Your cart is empty");
    }
  }, [items, isPro, navigate]);

  if (isCompleted) {
    return (
      <div className="container max-w-md mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-lg bg-background border p-8 text-center"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckIcon className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="mt-6 text-2xl font-bold">Payment Successful!</h1>
          <p className="mt-2 text-muted-foreground">
            {isPro
              ? "Thank you for subscribing to our Pro plan. Enjoy unlimited access to all our products!"
              : "Thank you for your purchase. You'll receive an email with your download instructions shortly."}
          </p>
          <Button asChild className="mt-8">
            <Link to="/">Return to Homepage</Link>
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <Link to={isPro ? "/pricing" : "/"} className="text-sm text-muted-foreground hover:text-primary">
          ← Back
        </Link>
        <h1 className="text-3xl font-bold mt-4">Checkout</h1>
      </div>

      <div className="grid gap-8 md:grid-cols-5">
        <div className="md:col-span-3">
          <div className="rounded-lg border bg-background p-6">
            <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={checkoutInfo.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="name">Name on Card</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={checkoutInfo.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  name="cardNumber"
                  required
                  value={checkoutInfo.cardNumber}
                  onChange={handleChange}
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input
                    id="expiry"
                    name="expiry"
                    required
                    value={checkoutInfo.expiry}
                    onChange={handleChange}
                    placeholder="MM/YY"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input
                    id="cvc"
                    name="cvc"
                    required
                    value={checkoutInfo.cvc}
                    onChange={handleChange}
                    placeholder="123"
                  />
                </div>
              </div>
              
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : `Pay ${isPro ? "$10.00" : `$${totalPrice}.00`}`}
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <div className="rounded-lg border bg-background p-6 sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            {isPro ? (
              <div className="py-4 border-b">
                <div className="flex justify-between">
                  <span>Pro Membership (Monthly)</span>
                  <span>$10.00</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Unlimited access to all products</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-[300px] overflow-auto pb-4 border-b">
                {cartProducts.map(({ product, quantity }) => (
                  <div key={product?.id} className="flex items-center gap-4">
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border">
                      <img
                        src={product?.image}
                        alt={product?.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-sm font-medium">{product?.name}</h3>
                      <p className="text-xs text-muted-foreground">Qty: {quantity}</p>
                    </div>
                    <div className="text-sm font-medium">
                      ${product?.price! * quantity}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            <div className="space-y-2 pt-4">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>${isPro ? "10.00" : `${totalPrice}.00`}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tax</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between font-medium pt-2 border-t mt-2">
                <span>Total</span>
                <span>${isPro ? "10.00" : `${totalPrice}.00`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
