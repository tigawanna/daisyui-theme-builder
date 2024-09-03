import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { AllComponents } from "./-components/AllComponents";

export const Route = createLazyFileRoute("/shadcn/")({
  component: index,
});

export function index(){
return (
  <div className="flex h-full w-full min-h-screen flex-col items-center justify-center">
    <AllComponents />
  </div>
);
}
