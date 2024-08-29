import chroma from "chroma-js";
import { HSLColor } from "react-color";

/**
 * Converts an OKLCH color to a hexadecimal color string.
 *
 * @param {string} input - The OKLCH color to convert, optionally wrapped in 'oklch()'.
 * @return {string} The hexadecimal color string, or '#000000' if the conversion fails.
 */
export function oklchToHexString(input: string) {
  try {
    if (!input.startsWith("oklch(")) {
      input = `oklch(${input})`;
    }
    // console.log(" parsing oklch", input);
    return chroma(input).hex();
  } catch (error) {
    console.log(
      " ⚠️ ====  oklch parse error in oklchToHexString ====⚠️",
      error,
    );
    return "#000000";
  }
}

/**
 * Converts an OKLCH color to an HSL color object.
 *
 * @param {string} oklch - The OKLCH color to convert.
 * @return {HSLColor} The HSL color object, or a default HSL color if the conversion fails.
 */
export function oklchToHSL(oklch: string): HSLColor {
  try {
    const hsl_slice = chroma(oklch).hsl();
    return {
      h: hsl_slice[0],
      s: hsl_slice[1],
      l: hsl_slice[2],
    };
  } catch (error: any) {
    return {
      h: 0,
      s: 0,
      l: 0,
    };
  }
}

/**
 * Converts an HSL color to an OKLCH color string.
 *
 * @param {{ h: number, s: number, l: number, a?: number }} hsl - The HSL color to convert.
 * @return {string} The OKLCH color string, or a default value if the conversion fails.
 *
 * @example
 * reactColorHSLToOKLCH({h: 0, s: 0, l: 0})
 */
export function reactColorHSLToOKLCH(hsl: HSLColor) {
  try {
    if (Number.isNaN(hsl.h)) [(hsl.h = 0)];
    if (Number.isNaN(hsl.s)) [(hsl.s = 0)];
    if (Number.isNaN(hsl.l)) [(hsl.l = 0)];
    const hsl_string = `hsl(${hsl.h.toFixed(0)}, ${(hsl.s * 100).toFixed(0)}%, ${(hsl.l * 100).toFixed(0)}%)`;
    const oklch_slice = chroma(hsl_string).oklch();
    if (Number.isNaN(oklch_slice[0])) {
      return;
    }
    if (Number.isNaN(oklch_slice[1])) {
      return;
    }
    if (Number.isNaN(oklch_slice[2])) {
      return;
    }
    return `${(oklch_slice[0] * 100).toFixed(2)}% ${oklch_slice[1].toFixed(2)} ${oklch_slice[2].toFixed(2)}`;
  } catch (error) {
    console.log(
      " =========  reactColorHSLToOKLCH convert hsl to oklch issue ============ ",
      error,
    );
    return "0.5 0.5 0.5";
  }
}
