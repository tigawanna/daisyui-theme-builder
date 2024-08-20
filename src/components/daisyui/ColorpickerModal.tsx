import { twMerge } from "tailwind-merge";
import { ReactColorPicker } from "../react-color/ReactColorPicker";

interface ColorpickerModalProps {
  oklchString: string;
  colorKey: string;
  children: React.ReactNode;
  bg_color: string;
  className?:string;
}

export function ColorpickerModal({ colorKey, oklchString,children,bg_color,className="" }: ColorpickerModalProps) {
  function saveColor(colorKey: string, new_oklch: string) {
    if (typeof window !== "undefined") {
      document.documentElement.style.setProperty(colorKey, new_oklch);
    }
  }
  return (
    <div className={twMerge("w-full items-center",className)}>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <div
        className=""
        // @ts-expect-error
        onClick={() => document?.getElementById(`my_color_picker_modal-${colorKey}`)?.showModal()}>
        {children}
      </div>
      <dialog id={`my_color_picker_modal-${colorKey}`} className="modal w-full">
        <div className={twMerge("modal-box min-w-fit", bg_color)}>
          <ReactColorPicker saveColor={saveColor} oklchString={oklchString} colorKey={colorKey} />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
