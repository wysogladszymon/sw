import { useContext } from "react";
import { ColorContext } from "../providers/ColorProvider";

export const useColorContext = () => {
  return useContext(ColorContext);
}