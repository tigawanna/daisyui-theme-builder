import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { AllComponents } from "./-components/AllComponents";

export const Route = createLazyFileRoute("/shadcn/")({
  component: index,
});

export function index(){
return (
  <div className="flex h-full w-full min-h-screen flex-col items-center justify-center">
    <nav className="w-full bg-base-200 sticky link top-[7%] flex justify-center items-center">
      <Link to="/shadcn/charts" className="btn btn-sm">charts</Link>
    </nav>
    <AllComponents />
  </div>
);
}
