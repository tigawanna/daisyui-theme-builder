import { useState } from "react";
import { ColorResult, HSLColor, SketchPicker, SliderPicker, SwatchesPicker } from "react-color";
import { hslObjectToStringtinyColor} from "../tiny-color-2/colors";
import { hslToOKLCH } from "../chroma/convert-color-formats";
import { oklchToHSL } from "./color-utils";
interface ReactColorPickerProps {
  oklchString:string; // oklch color string to be coverted into hsl from the editor
  colorKey: string;  // css variable key ;
  saveColor: (color: string) => void; 
}

export function ReactColorPicker({oklchString,colorKey,saveColor}: ReactColorPickerProps) {
const [color, setColor] = useState<HSLColor>(oklchToHSL(oklchString));
console.log("============= hsl color  ================== ",color)
console.log("============= oklch color  ================== ",color)
  function handleChange(new_color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) {
    setColor(new_color.hsl);
    const hsl_string = hslObjectToStringtinyColor(new_color.hsl);
    const oklch_string = hslToOKLCH(hsl_string).join(" ")
     document.documentElement.style.setProperty(colorKey, oklch_string);
     saveColor(oklch_string)
    }
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="flex max-h-[70vh] w-full  items-center justify-center gap-2 overflow-y-scroll rounded p-2 ">
        <SketchPicker color={color}  onChange={handleChange} />
        <div className="hidden md:flex">
          <SwatchesPicker color={color} onChange={handleChange} />
        </div>
      </div>
      <div className="w-full">
        <SliderPicker color={color} onChange={handleChange} />
      </div>
    </div>
  );
}
