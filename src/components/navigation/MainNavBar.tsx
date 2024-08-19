import { Link } from "@tanstack/react-router";
import { DaisyuiThemesSelect } from "./DaisyuiThemesSelect";

interface MainNavBarProps {

}

export function MainNavBar({}:MainNavBarProps){
return (
  <div className="w-full sticky top-0 flex  items-center justify-between p-5">
    <Link to="/">
      <h1 className="text-xl font-bold hover:text-accent">TWARK UI</h1>
    </Link>
    <div className="px-2 flex justify-between items-center gap-2">
      <Link to="/daisyui" className="badge border border-accent hover:badge-accent">
        <h1 className="">daisyui</h1>
      </Link>
      <Link to="/shadcn" className="badge border border-accent hover:badge-accent">
        <h1 className="">shadcn</h1>
      </Link>
      <Link to="/twarkui" className="badge border border-accent hover:badge-accent">
        <h1 className="">twarkui</h1>
      </Link>
    </div>
    <DaisyuiThemesSelect />
  </div>
);
}
