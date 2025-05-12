
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { products } from "@/lib/data";
import { Product } from "@/types";
import { Search, X } from "lucide-react";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const results = products.filter(
        (product) =>
          product.name.toLowerCase().includes(lowerCaseQuery) ||
          product.description.toLowerCase().includes(lowerCaseQuery) ||
          product.category.toLowerCase().includes(lowerCaseQuery)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleClose = () => {
    setSearchQuery("");
    setSearchResults([]);
    onClose();
  };

  const handleSelect = () => {
    setSearchQuery("");
    handleClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            ref={inputRef}
            placeholder="Search products..."
            className="pl-9 pr-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="mt-4 max-h-[300px] overflow-y-auto">
          {searchResults.length > 0 ? (
            <ul className="space-y-2">
              {searchResults.map((product) => (
                <li key={product.id} className="group">
                  <Link
                    to={`/product/${product.id}`}
                    className="flex items-center gap-3 rounded-md p-2 hover:bg-accent transition-colors"
                    onClick={handleSelect}
                  >
                    <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-md">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium group-hover:text-foreground">{product.name}</h4>
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                    </div>
                    <div className="text-sm font-medium">
                      {product.price === 0 ? "Free" : `$${product.price}`}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : searchQuery ? (
            <p className="py-4 text-center text-muted-foreground">No products found</p>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
