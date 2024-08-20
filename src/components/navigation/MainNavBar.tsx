import { Link, useSearch } from "@tanstack/react-router";
import { DaisyuiThemesSelect } from "./DaisyuiThemesSelect";
import {useThemeWithDefaults } from "@/helpers/daisyui/default-values";


interface MainNavBarProps {

}

export function MainNavBar({}:MainNavBarProps){

  const defaultTheme = useThemeWithDefaults()
return (
  <div className="w-full sticky top-0 flex  items-center justify-between p-5">
    <Link to="/" search={defaultTheme}>
      <h1 className="text-xl font-bold hover:text-accent">TWARK UI</h1>
    </Link>
    <div className="px-2 flex justify-between items-center gap-2">
      <Link
        search={defaultTheme}
        to="/daisyui"
        className="badge border border-accent hover:badge-accent">
        <h1 className="">daisyui</h1>
      </Link>
      <Link
        search={defaultTheme}
        to="/shadcn"
        className="badge border border-accent hover:badge-accent">
        <h1 className="">shadcn</h1>
      </Link>
      <Link
        search={defaultTheme}
        to="/twarkui"
        className="badge border border-accent hover:badge-accent">
        <h1 className="">twarkui</h1>
      </Link>
    </div>
    <DaisyuiThemesSelect />
  </div>
);
}
