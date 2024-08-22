import chroma from "chroma-js";
import { HSLColor } from "react-color";
import tinycolor from "tinycolor2";


export function oklchToHexString(input:string){
  // if(input.startsWith("oklch(") && input.endsWith(")")){
  //   input = input.slice(6, -1);
  // }
  console.log(" parsing oklch", input);
  return chroma(input).hex();
}
export function hslToOKLCH(hsl: string, path: string) {
  try {
    return chroma(hsl).oklch();
  } catch (error: any) {
    // alert(" ====  oklch parse error in hslToOKLCH ==== " + path);
    console.log(" =========  hsl parse error ============ ",path, error.message);
    return [0.5, 0.5, 0.5];
  }
}

export function oklchToHSL(oklch: string, path: string): HSLColor {
  // console.log("parsing oklch", oklch);
  try {
    // if(oklch.startsWith("oklch(") && oklch.endsWith(")")){
    //   oklch = oklch.slice(6, -1);
    //   console.log(" cleaned ok;ch  ==== ", oklch);
    // }
    const hsl_slice = chroma(oklch).hsl();
    return {
      h: hsl_slice[0],
      s: hsl_slice[1],
      l: hsl_slice[2],
    };
    
  } catch (error:any) {
    // alert(" ====  oklch parse"+ oklch +"error in oklchToHSL ==== "+path);
    // console.log(" == this color ==== ", oklch);
    // console.log(" =========  oklch parse error ============ ",error.message);
    return {
      h: 0,
      s: 0,
      l: 0,
    };
    
  }
}

export function hslObjectToStringtinyColor(hsl: HSLColor, path: string) {
  try {
    return tinycolor(hsl).toHslString();
  } catch (error: any) {
    alert(" ====  hsl parse error in ==== " + path);
    console.log(" =========  hsl parse error ============ ",path ,error.message);
    return "50% 50% 50%";
  }
}


export function oklchStringFromHex(value2: string){
  try {
    const oklch = chroma(value2).oklch().map((val,idx) => {
      if(idx === 0){
     return (val*100).toFixed(3)+"%"
      }
      return val.toFixed(4)}
    );

    return `${oklch.join(" ")}`;
  } catch (error: any) {
    alert(" ====  oklch parse error in oklchFromHex ==== ");
    console.log(" =========  oklch parse error ============ ",error.message);
    return "0.5 0.5 0.5";
  }
}
