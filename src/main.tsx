
import { createRoot } from 'react-dom/client';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import App from './App.tsx';
import './index.css';

console.log("main.tsx: Setting up root providers");

createRoot(document.getElementById("root")!).render(
  <NextThemesProvider attribute="class" defaultTheme="system">
    <App />
  </NextThemesProvider>
);
