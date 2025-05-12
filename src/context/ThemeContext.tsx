
import React, { createContext, useContext, useEffect, useState } from "react";
import { useTheme } from "next-themes";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // After mounting, we can safely show the UI that depends on the theme
  useEffect(() => {
    setMounted(true);
    // Update dark mode state when theme changes
    setIsDarkMode(theme === 'dark');
    console.log("Theme changed:", theme, "isDarkMode:", theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    setIsDarkMode(newTheme === 'dark');
    console.log("Toggle theme:", newTheme);
  };

  // Added console log for debugging
  useEffect(() => {
    console.log("ThemeProvider mounted, current theme:", theme);
  }, [mounted]);

  // Return children directly if not mounted yet to prevent hydration mismatches
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
