
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { categories } from "@/lib/data";
import { useThemeContext } from "@/context/ThemeContext";
import { ChevronDown, Moon, Search, ShoppingCart, Sun } from "lucide-react";

interface NavbarProps {
  onSearchClick: () => void;
}

export function Navbar({ onSearchClick }: NavbarProps) {
  const { totalItems, setIsCartOpen } = useCart();
  const { isDarkMode, toggleTheme } = useThemeContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur transition-all">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link to="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Shelfly
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className={navigationMenuTriggerStyle()}>
                    Home
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {categories.map((category) => (
                        <li key={category} className="row-span-1">
                          <NavigationMenuLink asChild>
                            <Link
                              to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{category}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Explore our {category.toLowerCase()}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                      <li className="row-span-1 col-span-2">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/category/all"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground bg-muted"
                          >
                            <div className="text-sm font-medium leading-none">All Products</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Browse our entire collection
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/pricing" className={navigationMenuTriggerStyle()}>
                    Pricing
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/about" className={navigationMenuTriggerStyle()}>
                    About
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/contact" className={navigationMenuTriggerStyle()}>
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onSearchClick}
            className="hover:bg-accent hover:text-accent-foreground"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="hover:bg-accent hover:text-accent-foreground"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsCartOpen(true)}
            className="relative hover:bg-accent hover:text-accent-foreground"
            aria-label="Open cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                {totalItems}
              </span>
            )}
          </Button>
          
          <Button
            className="md:hidden"
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-3 px-6 py-4 bg-background border-t">
            <Link
              to="/"
              className="text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div className="flex flex-col">
              <details className="group [&[open]>summary]:mb-2">
                <summary className="flex cursor-pointer list-none items-center justify-between py-1 text-lg font-medium">
                  Categories
                  <ChevronDown className="h-5 w-5 transition-transform group-[&[open]]:rotate-180" />
                </summary>
                <div className="pl-3 space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {category}
                    </Link>
                  ))}
                  <Link
                    to="/category/all"
                    className="block py-1 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    All Products
                  </Link>
                </div>
              </details>
            </div>
            <Link
              to="/pricing"
              className="text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
