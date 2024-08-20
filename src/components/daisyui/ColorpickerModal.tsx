import { twMerge } from "tailwind-merge";
import { ReactColorPicker } from "../react-color/ReactColorPicker";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { useTransition } from "react";
import {GenericThemeOptions} from "./theme-cards/types";

interface ColorpickerModalProps {
  oklchString: string;
  colorKey: string;
  children: React.ReactNode;
  bg_color: string;
  className?: string;
  theme_key: string;
  theme: GenericThemeOptions;
}

export function ColorpickerModal({
  colorKey,
  oklchString,
  children,
  bg_color,
  theme_key,
  theme,
  className = "",
}: ColorpickerModalProps) {
  const searchParams = useSearch({
    from: "__root__",
  });
  const navigate = useNavigate();
  const [, startTransition] = useTransition();
  function saveColor(colorKey: string, newoklch: string) {
    const parentSearchParams = searchParams[theme_key]
    const new_color_param = {
      ...theme[theme_key as any],
      value: `oklch(${newoklch})`,
    }
    console.log("===== theme key ======",theme_key); 
    console.log(" ===== newoklch", newoklch);
    console.log("=====colorKey =====",colorKey);
    console.log("====== new_color_param =====",new_color_param);
    console.log("===================== parentSearchParams =====================",parentSearchParams);
    if (typeof window !== "undefined") {
      document.documentElement.style.setProperty(colorKey, newoklch);
      // startTransition(() => {
      //   navigate({ search: { ...searchParams,} });
      // });
    }
  }
  return (
    <div className={twMerge("w-full items-center", className)} key={oklchString}>
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
