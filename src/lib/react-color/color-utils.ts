import { HSLColor } from "react-color";
import chroma from "chroma-js";
import tinycolor from "tinycolor2";


export function oklchToHSL(oklch:string): HSLColor {
  const hsl_slice = chroma(`oklch(${oklch})`).hsl();
  return {
    h: hsl_slice[0],
    s: hsl_slice[1],
    l: hsl_slice[2],
  };
}
