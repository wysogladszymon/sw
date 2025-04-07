export enum Themes {
  Default = '',
  Orange = 'orange',
  Red = 'red',
  Rose = 'rose',
  Green = 'green',
  Blue = 'blue',
  Yellow = 'yellow',
  Violet = 'violet'
}

export type ThemeColor = 
  | Themes.Default 
  | Themes.Orange 
  | Themes.Red 
  | Themes.Rose 
  | Themes.Green 
  | Themes.Blue 
  | Themes.Yellow 
  | Themes.Violet;

export interface ThemeColorStateParams{
  themeColor: ThemeColor;
  setThemeColor: (themeColor: ThemeColor) => void;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}