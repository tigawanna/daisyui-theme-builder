import { oklchToHSL, hslObjectToStringtinyColor, hslToOKLCH } from "./utils/color-converters";
import { useState } from "react";
import { ColorResult, HSLColor, SketchPicker, SliderPicker, SwatchesPicker } from "react-color";

interface ReactColorPickerProps {
  oklchString: string; // oklch color string to be coverted into hsl from the editor
  colorKey: string; // css variable key ;
  saveColor: (color_key: string, new_color: string) => void;
}

export function ReactColorPicker({ oklchString, colorKey, saveColor }: ReactColorPickerProps) {
  const [color, setColor] = useState<HSLColor>(
    oklchToHSL(oklchString, "src/components/react-color/ReactColorPicker.tsx")
  );
  function handleChange(new_color: ColorResult) {
    setColor(new_color.hsl);
    const hsl_string = hslObjectToStringtinyColor(
      new_color.hsl,
      "src/components/react-color/ReactColorPicker.tsx"
    );
    const oklch_string = hslToOKLCH(
      hsl_string,
      "src/components/react-color/ReactColorPicker.tsx"
    ).join(" ");
    document.documentElement.style.setProperty(colorKey, oklch_string);
    saveColor(colorKey, oklch_string);
  }
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
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
