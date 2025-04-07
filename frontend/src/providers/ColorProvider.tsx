import { ThemeColor, ThemeColorStateParams, ThemeProviderProps } from "@/types/theme-types";
import { createContext,  useEffect, useState } from "react";

export const ColorContext = createContext<ThemeColorStateParams>({} as ThemeColorStateParams);

export const ColorProvider = ({children} : ThemeProviderProps) => {
  const getSavedColor = () =>{
    try{
      return (localStorage.getItem('themeColor') || '') as ThemeColor;
    } catch(e){
      return '' as ThemeColor;
    }
  }

  const [themeColor, setThemeColor] = useState<ThemeColor>(getSavedColor());

  useEffect(() => {
    localStorage.setItem('themeColor', themeColor);
    setThemeColor(themeColor)
  }, [themeColor]);
  return (
    <ColorContext.Provider value={{themeColor, setThemeColor}}>
      {children}
    </ColorContext.Provider>
  );
}

