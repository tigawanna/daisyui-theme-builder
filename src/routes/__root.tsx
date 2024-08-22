import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import type { RouterCntextTypes } from "@/main";
import { MainNavBar } from "@/components/navigation/MainNavBar";
import { useEffect} from "react";
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
    const mutationObserver = new MutationObserver((e) => {
    const elem = e[0].target as HTMLHtmlElement;
      const current_data_theme = elem.getAttribute("data-theme");
      navigate({ search: defaultThemes({ theme: {theme_name: current_data_theme??undefined, ...searchParams} }) });
          // loadCSSVariablesFromThemeObject({ theme: searchParams });
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
