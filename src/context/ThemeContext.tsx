
import React, { createContext, useContext, useEffect, useState } from "react";
import { useTheme } from "next-themes";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

// Create context with a default value to avoid undefined checks
const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {}
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // After mounting, we can safely access the theme
  useEffect(() => {
    setMounted(true);
    setIsDarkMode(theme === 'dark');
    console.log("ThemeProvider: theme mounted/changed:", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    setIsDarkMode(newTheme === 'dark');
    console.log("ThemeProvider: toggling theme to:", newTheme);
  };

  // Create the value object only once when values change
  const contextValue = React.useMemo(() => ({
    isDarkMode,
    toggleTheme
  }), [isDarkMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
