import { Link, useRouterState, useSearch } from "@tanstack/react-router";
import { DaisyuiThemesSelect } from "./DaisyuiThemesSelect";
import { useSearchParamsTheme } from "../all-in-one-theme-editor/utils/use-search-params-theme";



interface MainNavBarProps {

}

export function MainNavBar({}:MainNavBarProps){
const {searchParams} = useSearchParamsTheme()
const {isLoading}=useRouterState()
return (
  <div className="w-full sticky top-0 flex flex-col  items-center justify-between ">
    <div className="w-full  flex  items-center justify-between p-5">
      <Link to="/" search={searchParams}>
        <h1 className="text-xl font-bold hover:text-accent">TWARK UI</h1>
      </Link>
      <div className="px-2 flex justify-between items-center gap-2">
        <Link
          search={searchParams}
          to="/daisyui"
          className="badge border border-accent hover:badge-accent">
          <h1 className="">daisyui</h1>
        </Link>
        <Link
          search={searchParams}
          to="/shadcn"
          className="badge border border-accent hover:badge-accent">
          <h1 className="">shadcn</h1>
        </Link>
        <Link
          search={searchParams}
          to="/twarkui"
          className="badge border border-accent hover:badge-accent">
          <h1 className="">twarkui</h1>
        </Link>
      </div>
      {/* <ManualThemeSwitcher/> */}
      <DaisyuiThemesSelect />
    </div>
    {isLoading ? <div className="bg-accent h-1 w-full skeleton" /> : <div className="h-1 w-full" />}
  </div>
);
}
