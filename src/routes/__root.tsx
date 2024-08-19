import { createRootRouteWithContext, Outlet} from "@tanstack/react-router";
import type { RouterCntextTypes } from "@/main";
import { MainNavBar } from "@/components/navigation/MainNavBar";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { TailwindIndicator } from "@/components/navigation/tailwind-indicator";
import { daisyUIThemeSearchParamsSchema } from "./-routes-utils/daisy-ui-schema";

export const Route = createRootRouteWithContext<RouterCntextTypes>()({
  component: RootComponent,
  validateSearch:(input)=>{
    return daisyUIThemeSearchParamsSchema.parse(input)
  }
});

export function RootComponent() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <MainNavBar />
      <Outlet />
      <TailwindIndicator />
      <TanStackRouterDevtools position="bottom-left" />
    </div>
  );
}
