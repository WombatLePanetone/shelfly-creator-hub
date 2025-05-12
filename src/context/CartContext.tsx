
import React, { createContext, useContext, useState, useEffect } from "react";
import { CartItem } from "@/types";
import { products } from "@/lib/data";
import { toast } from "@/components/ui/sonner";

interface CartContextType {
  items: CartItem[];
  addItem: (productId: string, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Load cart from localStorage on initial load
  useEffect(() => {
    const savedCart = localStorage.getItem("shelfly-cart");
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart from localStorage", e);
      }
    }
  }, []);

  // Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("shelfly-cart", JSON.stringify(items));
  }, [items]);

  const addItem = (productId: string, quantity: number = 1) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.productId === productId);
      
      if (existingItem) {
        return prevItems.map(item => 
          item.productId === productId 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { productId, quantity }];
      }
    });
    
    const product = products.find(p => p.id === productId);
    if (product) {
      toast.success(`Added ${product.name} to cart`);
    }
    
    setIsCartOpen(true);
  };

  const removeItem = (productId: string) => {
    setItems(prevItems => prevItems.filter(item => item.productId !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }

    setItems(prevItems => 
      prevItems.map(item => 
        item.productId === productId 
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  
  const totalPrice = items.reduce((sum, item) => {
    const product = products.find(p => p.id === item.productId);
    return sum + (product?.price || 0) * item.quantity;
  }, 0);

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      isCartOpen,
      setIsCartOpen,
      totalItems,
      totalPrice,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
