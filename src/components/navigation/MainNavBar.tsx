import { Link, useRouterState } from "@tanstack/react-router";
import { DaisyuiThemesSelect } from "./DaisyuiThemesSelect";
import { useSearchParamsTheme } from "../all-in-one-theme-editor/utils/use-search-params-theme";

interface MainNavBarProps {}

export function MainNavBar({}: MainNavBarProps) {
  const { searchParams } = useSearchParamsTheme();
  const { isLoading } = useRouterState();
  // const isLoading=true
  // // console.log(" ========= isLoading ========= ", isLoading)
  return (
    <div className="sticky top-0 flex w-full flex-col items-center justify-between">
      <div className="flex w-full items-center justify-between p-5">
        <Link to="/" search={searchParams}>
          <h1 className="text-xl font-bold hover:text-accent">UI</h1>
        </Link>
        <div className="hidden md:flex items-center justify-between gap-2 px-2">
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
        {/* <ManualThemeSwitcher/> */}
        <DaisyuiThemesSelect />
      </div>
      {isLoading ? (
        <div className="skeleton h-1 w-full bg-accent" />
      ) : (
        <div className="h-1 w-full" />
      )}
    </div>
  );
}
