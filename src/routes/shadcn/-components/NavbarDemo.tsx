import { lazy, Suspense } from "react";
import { AvatarDemo } from "./demos/AvatarDemo";
import { BreadcrumbDemo } from "./demos/BreadCumbsDemo";
const DropdownMenuDemo = lazy(() => import("./demos/DropdownMenuDemo"));
interface NavbarDemoProps {

}

export function NavbarDemo({}:NavbarDemoProps){
return (
  <nav className="flex h-10 w-full items-center justify-between bg-primary/10 p-2 gap-3">
    <h1 className="text-xl font-bold">shadcn</h1>
    <BreadcrumbDemo />
    <nav className="flex w-fit items-center justify-center gap-2">
      <AvatarDemo />
      <Suspense
        fallback={
          <div className="skeleton h-8 w-full items-center justify-center bg-base-200">
            Loading...
          </div>
        }
      >
        <DropdownMenuDemo />
      </Suspense>
    </nav>
  </nav>
);
}
