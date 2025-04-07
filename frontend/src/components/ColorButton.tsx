import { ThemeColor } from "@/types/theme-types";
import { Button } from "./ui/button";
import { Palette } from "lucide-react";
import { useColorContext } from "@/hooks/useColorContext";
import { Themes } from "@/types/theme-types";

export const ColorButton = () => {

  const {themeColor, setThemeColor} = useColorContext();

  const toggleColor = () => {
    const themeKeys = Object.values(Themes);
    let randomThemeKey: ThemeColor;

    do {
      randomThemeKey = themeKeys[Math.floor(Math.random() * themeKeys.length)] as ThemeColor;
    } while (randomThemeKey === themeColor); 

    setThemeColor(randomThemeKey);
  };

  return (
    <div>
      <Button onClick={toggleColor} variant='ghost'><Palette size={20} /></Button>
    </div>
  );
}