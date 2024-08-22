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
import { DaisyUIThemes } from "@/components/daisyui/DaisyUIThemes";
import { Palette, Save } from "lucide-react";
import { ExportTheme } from "@/components/daisyui/ExportTheme";

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
      const default_data_theme = defaultThemes({
        theme: { ...searchParams, theme_name: current_data_theme ?? undefined },
      });
      navigate({ 
        search: { ...default_data_theme }
    });
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
  // navigate({ search: (prev) => ({ ...prev,  }) });
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <MainNavBar />
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}

          <label htmlFor="my-drawer" className="drawer-button absolute top-5 left-5">
            <Palette className="ml-4" />
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 @container text-base-content min-h-full w-[40%] p-4">
            {/* Sidebar content here */}
            <DaisyUIThemes theme={searchParams} />
          </ul>
        </div>
      </div>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn-outline flex gap-2 absolute top-5 right-5">
            export <Save />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content min-h-full  md:w-[70%] p-4">
            {/* Sidebar content here */}
        <ExportTheme theme={searchParams}/>
          </ul>
        </div>
      </div>

      <Outlet />
      <TailwindIndicator />
      <TanStackRouterDevtools position="bottom-left" />
    </div>
  );
}
