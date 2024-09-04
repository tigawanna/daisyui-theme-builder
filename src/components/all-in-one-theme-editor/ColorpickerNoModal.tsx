import { Button } from "@/components/shadcn/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn/ui/dialog";
import { Input } from "@/components/shadcn/ui/input";
import { Label } from "@/components/shadcn/ui/label";
import { DaisyUIColorSearchParmsTypes } from "./utils/schema";
import { twMerge } from "tailwind-merge";
import { ReactColorPicker } from "./ReactColorPicker";
import { useState } from "react";

type BaseDaisyUiThemeKeysWithoutBase = keyof DaisyUIColorSearchParmsTypes;
interface ColorpickerNoModalProps<T extends BaseDaisyUiThemeKeysWithoutBase> {
  theme_key: T;
  theme: DaisyUIColorSearchParmsTypes[T];
  bg_color: string;
  children: React.ReactNode;
  className?: string;
  saveColor: (color_key: string, new_color: string) => void;
}

export function ColorpickerNoModal<T extends BaseDaisyUiThemeKeysWithoutBase>({
  children,
  bg_color,
  theme_key,
  theme,
  saveColor,
  className = "",
}: ColorpickerNoModalProps<T>) {
  if (!theme) return null;

  return (
    <div className={twMerge("w-full items-center", className)}>
      <div
        className="">
        {children}
      </div>
      {/* {open && (
        <div className=" bg-green-700">
          <div className="w-screen fixed z-40 bg-accent top-0 bottom-o left-0 right-0" onClick={() => setOpen(false)}/>
          <div className={twMerge("min-w-fit absolute z-30", bg_color)}>
            <ReactColorPicker
              saveColor={saveColor}
              oklchString={theme?.value}
              colorKey={theme_key}
            />
          </div>
        </div>
      )} */}
    </div>
  );
}
