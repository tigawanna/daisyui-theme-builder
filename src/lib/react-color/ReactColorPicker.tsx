import { useState } from "react";
import { ColorResult, HSLColor, SketchPicker, SliderPicker, SwatchesPicker } from "react-color";
import { hslObjectToStringtinyColor} from "../tiny-color-2/colors";
import { hslToOKLCH } from "../chroma/convert-color-formats";
interface ReactColorPickerProps {
  initColor: HSLColor;
  colorKey: string;
}

export function ReactColorPicker({initColor,colorKey}: ReactColorPickerProps) {
const [color, setColor] = useState<HSLColor>(initColor);

  function handleChange(new_color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) {
    setColor(new_color.hsl);
    const hsl_string = hslObjectToStringtinyColor(new_color.hsl);
    const oklch_string = hslToOKLCH(hsl_string).join(" ")
    console.log("========== ", hsl_string, oklch_string);
    document.documentElement.style.setProperty(colorKey, oklch_string);
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
