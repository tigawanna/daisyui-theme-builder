import { twMerge } from "tailwind-merge";
import { ReactColorPicker } from "./ReactColorPicker";
import { DaisyUIColorSearchParmsTypes } from "./utils/schema";
import { useState } from "react";

type BaseDaisyUiThemeKeysWithoutBase = keyof DaisyUIColorSearchParmsTypes;
interface ColorpickerModalProps<T extends BaseDaisyUiThemeKeysWithoutBase> {
  theme_key: T;
  theme: DaisyUIColorSearchParmsTypes[T];
  bg_color: string;
  children: React.ReactNode;
  className?: string;
  saveColor: (color_key: string, new_color: string) => void;
}

export function ColorpickerModal<T extends BaseDaisyUiThemeKeysWithoutBase>({
  children,
  bg_color,
  theme_key,
  theme,
  saveColor,
  className = "",
}: ColorpickerModalProps<T>) {
  const current_modal = document.getElementById(
    `my_color_picker_modal-${theme_key}`,
  ) as HTMLDialogElement;
  const [curren, setOpen] = useState(current_modal);
  // if (!theme) return null;
  return (
    <div className={twMerge("w-full items-center", className)}>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <div
        key={current_modal?.id}
        className=""
        onClick={() => {
          console.log("current_modal", current_modal);
          current_modal?.showModal();
        }}
      >
        {children}
      </div>
      <dialog
        key={theme_key}
        id={`my_color_picker_modal-${theme_key}`}
        className="modal w-full"
      >
        {theme && (
          <div className={twMerge("modal-box min-w-fit", bg_color)}>
            <ReactColorPicker
              saveColor={saveColor}
              oklchString={theme?.value}
              colorKey={theme_key}
            />
          </div>
        )}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
