import { ReactColorPicker } from "@/components/react-color/ReactColorPicker";
import { twMerge } from "tailwind-merge";

interface TestUwuVariableProps {}

export function TestUwuVariable({}: TestUwuVariableProps) {
  function updateUwuCssvariable(oklch:string) {
    document.documentElement.style.setProperty("--uwu", oklch);
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3">
      <div className="size-[200px] bg-uwu flex justify-center items-center p-5">uwu</div>
      <div className="flex justify-between gap-2 items-center text-xl">
        <button className="btn " onClick={() => updateUwuCssvariable("70% 0.1 44.87")}>
          pink uwu
        </button>
        <button className="btn " onClick={() => updateUwuCssvariable("70% 0.2042 314.07")}>
          purple uwu
        </button>

      </div>
    </div>
  );
}
