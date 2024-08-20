import chroma from "chroma-js";
import { HSLColor } from "react-color";
import tinycolor from "tinycolor2";
export function hslToOKLCH(hsl: string) {
  return chroma(hsl).oklch();
}

export function oklchToHSL(oklch: string): HSLColor {
  const hsl_slice = chroma(oklch).hsl();
  return {
    h: hsl_slice[0],
    s: hsl_slice[1],
    l: hsl_slice[2],
  };
}

export function hslObjectToStringtinyColor(hsl: HSLColor) {
  return tinycolor(hsl).toHslString();
}
