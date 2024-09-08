import { Link } from "@tanstack/react-router";
import { DaisyuiThemesSelect } from "./DaisyuiThemesSelect";
import { useDaisyUITheme } from "../all-in-one-theme-editor/utils/use-search-params-theme";
import { FileUp, Import, Moon, Sun } from "lucide-react";



export function MainNavBar() {
  const { searchParams, updateTheme } = useDaisyUITheme();
  const color_scheme = searchParams?.["--color-scheme"]?.value;

  return (
    <header className="flex w-full flex-col items-center justify-between">
      <nav className="flex w-full items-center justify-end md:justify-between">
        <div className="hidden w-full items-center justify-center gap-2 text-sm md:flex">
          <Link search={searchParams} to="/twarkui" className="btn btn-link">
            twark
          </Link>
          <Link
            search={searchParams}
            to="/shadcn"
            className="btn btn-link btn-sm"
          >
            shadcn
          </Link>
        </div>

        <button className="btn btn-ghost btn-sm flex gap-2 bg-slate-900 text-slate-50 brightness-150">
          {color_scheme === "dark" ? (
            <Moon
              className=""
              onClick={() => updateTheme("--color-scheme", "light")}
            />
          ) : (
            <Sun
              className=""
              onClick={() => updateTheme("--color-scheme", "dark")}
            />
          )}
        </button>
        {/* <ManualThemeSwitcher/> */}
        <DaisyuiThemesSelect />
        <div className="flex min-w-[20%] justify-end gap-3">
          <div className="hidden items-center justify-center gap-2 md:flex">
            <label
              htmlFor="import-theme-drawer"
              className="btn drawer-button btn-sm flex gap-2"
            >
              import <Import />
            </label>
            <label
              htmlFor="export-theme-drawer"
              className="btn drawer-button btn-sm flex gap-2"
            >
              export <FileUp />
            </label>
          </div>
        </div>
      </nav>
    </header>
  );
}
