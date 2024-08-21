import { twMerge } from "tailwind-merge";
import { ReactColorPicker } from "../react-color/ReactColorPicker";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { useTransition } from "react";
import { DaisyUIThemeSearchParmsTypes } from "@/helpers/daisyui/daisy-ui-schema";
import { useSearchParamsTheme } from "@/helpers/use-search-params-theme";

type BaseDaisyUiThemeKeysWithoutBase = keyof Required<DaisyUIThemeSearchParmsTypes>["colors"];
interface ColorpickerModalProps<T extends BaseDaisyUiThemeKeysWithoutBase> {
  theme_key: T;
  theme: Required<DaisyUIThemeSearchParmsTypes>["colors"][T];
  bg_color: string;
  children: React.ReactNode;
  className?: string;
}

export function ColorpickerModal<T extends BaseDaisyUiThemeKeysWithoutBase>({
  children,
  bg_color,
  theme_key,
  theme,
  className = "",
}: ColorpickerModalProps<T>) {
const {navigate,searchParams}=useSearchParamsTheme();
if(!theme)return null
  function saveColor(colorKey: string, newoklch: string) {
    const themeSearchParamsColors = searchParams["colors"];
    console.log("========== themeSearchParamsColors =========== ", themeSearchParamsColors);
    const newThemeSearchParamsColorsram = {
      ...themeSearchParamsColors,
      [colorKey]: {
        ...theme,
        value: `oklch(${newoklch})`,
      },
    };
    console.log("===== newThemeSearchParamsColorsram =====", newThemeSearchParamsColorsram);
    console.log("=====theme =====", theme);
    console.log("===== theme key ======", colorKey);
    console.log(" ===== newoklch", newoklch);

    // startTransition(() => {
    // });
    if (typeof window !== "undefined" && theme?.variable) {
      document.documentElement.style.setProperty(theme?.variable, newoklch);
      navigate({ search: { ...searchParams, colors:newThemeSearchParamsColorsram } });
    }
  }
  return (
    <div className={twMerge("w-full items-center", className)}>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <div
        className=""
        // @ts-expect-error
        onClick={() => document?.getElementById(`my_color_picker_modal-${theme_key}`)?.showModal()}>
        {children}
      </div>
      <dialog id={`my_color_picker_modal-${theme_key}`} className="modal w-full">
        <div className={twMerge("modal-box min-w-fit", bg_color)}>
          <ReactColorPicker saveColor={saveColor} oklchString={theme?.value} colorKey={theme_key} />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
