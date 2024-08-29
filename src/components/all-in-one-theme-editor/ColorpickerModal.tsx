import { twMerge } from "tailwind-merge";
import { ReactColorPicker } from "./ReactColorPicker";
import { DaisyUIColorSearchParmsTypes } from "./utils/schema";

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
  if (!theme) return null;

  return (
    <div className={twMerge("w-full items-center", className)}>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <div
        className=""
        // @ts-expect-error
        onClick={() =>
          document
            ?.getElementById(`my_color_picker_modal-${theme_key}`)
            ?.showModal()
        }
      >
        {children}
      </div>
      <dialog
        id={`my_color_picker_modal-${theme_key}`}
        className="modal w-full"
      >
        <div className={twMerge("modal-box min-w-fit", bg_color)}>
          <ReactColorPicker
            saveColor={saveColor}
            oklchString={theme?.value}
            colorKey={theme_key}
          />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
