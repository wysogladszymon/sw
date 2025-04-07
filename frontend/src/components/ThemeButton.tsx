import { Button } from "./ui/button";
import { Sun, Moon } from "lucide-react";

interface ThemeButtonProps {
  theme: string;
  toggleThemeFunction: () => void;
}

export const ThemeButton = ({
  theme,
  toggleThemeFunction,
}: ThemeButtonProps) => {
  const currentTheme = theme === "system" ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : theme;
  
  const icon = currentTheme === "light" ? <Sun /> : <Moon />;

  return (
    <Button variant="ghost" size="icon" onClick={toggleThemeFunction}>
      {icon}
    </Button>
  );
};
