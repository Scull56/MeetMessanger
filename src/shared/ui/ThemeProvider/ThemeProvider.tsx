"use client";

import { createContext, useEffect, useState } from "react";
import { Theme } from "./Theme";
import { ThemeContext } from "./ThemeContext";

const ThemeContextProvider = createContext<ThemeContext | undefined>(undefined);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const getInitialTheme = (): Theme => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme) return storedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContextProvider.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContextProvider.Provider>
  );
}
