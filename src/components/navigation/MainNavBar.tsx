import { Link, useRouterState } from "@tanstack/react-router";
import { DaisyuiThemesSelect } from "./DaisyuiThemesSelect";
import { useSearchParamsTheme } from "../all-in-one-theme-editor/utils/use-search-params-theme";
import { FileUp, Import, Loader, Moon, Sun } from "lucide-react";

interface MainNavBarProps {}

export function MainNavBar({}: MainNavBarProps) {
  const { searchParams,updateTheme } = useSearchParamsTheme();
  const color_scheme = searchParams?.["--color-scheme"]?.value;

  // const isLoading=true
  // // console.log(" ========= isLoading ========= ", isLoading)
  return (
    <header className="flex w-full flex-col items-center justify-between">
      <nav className="flex w-full items-center justify-end md:justify-between">
        <div className="hidden w-full items-center justify-center gap-2 text-sm md:flex">
          <Link
            search={searchParams}
            to="/shadcn"
            className="badge border border-accent hover:badge-accent"
          >
            <h1 className="">shadcn</h1>
          </Link>
          <Link
            search={searchParams}
            to="/twarkui"
            className="badge border border-accent hover:badge-accent"
          >
            <h1 className="">twarkui</h1>
          </Link>
        </div>

        <button
          aria-lable="change color scheme"
          className="btn btn-ghost btn-sm flex gap-2  brightness-150"
        >
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
