
export const theme = {
  colors: {
    background: "#fef6e4",
    text: "#001858",
    headline: "#172c66",
    primary: "#f582ae",
    secondary: "#8bd3dd",
    tertiary: "#f3d2c1",
    accent: "#001858",
    muted: "#f8f8f8",
    border: "#e6e6e6",
    error: "#ef4565",
    success: "#3da9fc",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
  },
  borderRadius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "1rem",
    xl: "1.5rem",
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  },
  transitions: {
    default: "all 0.3s ease",
    fast: "all 0.15s ease",
    slow: "all 0.5s ease",
  },
};

export type Theme = typeof theme;
