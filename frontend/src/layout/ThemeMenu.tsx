import { ColorButton } from "@/components/ColorButton";
import { ThemeButton } from "@/components/ThemeButton";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export const ThemeMenu = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // get rid of "system" theme
    const currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setTheme(currentTheme);
  }
  , []);
  const themeButton = theme ? (
    <ThemeButton
      theme={theme}
      toggleThemeFunction={() => setTheme(theme === "dark" ? "light" : "dark")}
    />
  ) : (
    <></>
  );

  return (
    <div className="flex items-center justify-center">
      {themeButton}
      {<ColorButton />}
      <span className="text-xs text-wrap w-5 h-5 flex items-center text-center text-foreground bg-primary rounded-full"></span>
    </div>
  );
};
