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

type BaseDaisyUiThemeKeysWithoutBase = keyof DaisyUIColorSearchParmsTypes;
interface ShadcnColorpickerModalProps<
  T extends BaseDaisyUiThemeKeysWithoutBase,
> {
  theme_key: T;
  theme: DaisyUIColorSearchParmsTypes[T];
  bg_color: string;
  children: React.ReactNode;
  className?: string;
  saveColor: (color_key: string, new_color: string) => void;
}

export function ShadcnColorpickerModal<
  T extends BaseDaisyUiThemeKeysWithoutBase,
>({
  children,
  bg_color,
  theme_key,
  theme,
  saveColor,
  className = "",
}: ShadcnColorpickerModalProps<T>) {
  if (!theme) return null;


  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className={twMerge("w-full items-center", className)}>
          <>{children}</>
        </div>
      </DialogTrigger>
      <DialogContent className="w-fit min-w-fit">
        <DialogHeader>
          <DialogTitle>{theme.name}</DialogTitle>
          <DialogDescription>{theme.value}</DialogDescription>
        </DialogHeader>
        <div className={twMerge("h-fit w-fit", bg_color)}>
          <ReactColorPicker
            saveColor={saveColor}
            oklchString={theme?.value}
            colorKey={theme_key}
          />
        </div>
        {/* <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
