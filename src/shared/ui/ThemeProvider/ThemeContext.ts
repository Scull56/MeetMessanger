import { Theme } from "./Theme";

export interface ThemeContext {
  theme: Theme;
  toggleTheme: () => void;
}