import {
  oklchToHSL,
  reactColorHSLToOKLCH,
} from "./utils/color-converters";
import { useState } from "react";
import { ColorResult, HSLColor, SketchPicker, SliderPicker, SwatchesPicker } from "react-color";

interface ReactColorPickerProps {
  oklchString: string; // oklch color string to be coverted into hsl from the editor
  colorKey: string; // css variable key ;
  saveColor: (color_key: string, new_color: string) => void;
}

export function ReactColorPicker({ oklchString, colorKey, saveColor }: ReactColorPickerProps) {
  const [color, setColor] = useState<HSLColor>(oklchToHSL(oklchString));
  const oklch_string = reactColorHSLToOKLCH(color);
  const [oklch, setOklch] = useState(oklch_string);
  function handleChange(new_color: ColorResult) {
    setColor(new_color.hsl);
    const oklch_string = reactColorHSLToOKLCH(new_color.hsl);
    if(!oklch_string) return
    setOklch(oklch_string);
    saveColor(colorKey, oklch_string);
  }
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
    {oklch&&<span className="bg-base-300 text-base-content rounded-lg p-1 px-2">{`oklch${oklch})`}</span>}
      <div className="flex max-h-[70vh] w-full  items-center justify-center gap-2 overflow-y-scroll rounded p-2 ">
        <SketchPicker color={color} onChange={handleChange} />
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
