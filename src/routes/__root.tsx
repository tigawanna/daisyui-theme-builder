import { createRootRouteWithContext, Outlet, useNavigate, useSearch } from "@tanstack/react-router";
import type { RouterCntextTypes } from "@/main";
import { MainNavBar } from "@/components/navigation/MainNavBar";
import { useEffect, useTransition } from "react";
import { themeChange } from "theme-change";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { TailwindIndicator } from "@/components/navigation/tailwind-indicator";
import { daisyUIThemeSearchParamsSchema } from "../helpers/daisyui/daisy-ui-schema";
import { defaultThemes } from "@/helpers/daisyui/default-values";
import { loadCSSVariablesFromThemeObject } from "@/helpers/daisyui/css-variables";
import { useSearchParamsTheme } from "@/helpers/use-search-params-theme";

export const Route = createRootRouteWithContext<RouterCntextTypes>()({
  component: RootComponent,
  validateSearch: (input) => {
    return daisyUIThemeSearchParamsSchema.parse(input);
  },
});

export function RootComponent() {
  const { navigate, searchParams } = useSearchParamsTheme();

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  useEffect(() => {
    loadCSSVariablesFromThemeObject({ theme: searchParams });
    const mutationObserver = new MutationObserver(() => {
      navigate({ search: defaultThemes({ theme: searchParams }) });
    });
    mutationObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => {
      mutationObserver.disconnect();
    };
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
