
import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Toaster } from "@/components/ui/sonner";
import { CartDrawer } from "../cart/CartDrawer";
import { SearchOverlay } from "../search/SearchOverlay";
import { ThemeProvider } from "@/context/ThemeContext";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  console.log("Layout rendering");
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar onSearchClick={() => setIsSearchOpen(true)} />
        <main className="flex-1">
          {children}
        </main>
        <CartDrawer />
        <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
