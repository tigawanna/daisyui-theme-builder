import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import type { RouterCntextTypes } from "@/main";
import { MainNavBar } from "@/components/navigation/MainNavBar";
import { useEffect, useLayoutEffect } from "react";
import { themeChange } from "theme-change";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { TailwindIndicator } from "@/components/navigation/tailwind-indicator";
import { Palette, Save, X } from "lucide-react";
import { getDaisyUiInlineCSSVariables } from "@/components/all-in-one-theme-editor/utils/daisyui-css-variables-helpers";
import { defaultThemes } from "@/components/all-in-one-theme-editor/utils/theme-default-values";
import { DaisyUIThemeEditor } from "@/components/all-in-one-theme-editor/DaisyUIThemeEditor";
import { useSearchParamsTheme } from "@/components/all-in-one-theme-editor/utils/use-search-params-theme";
import { daisyUIThemeSearchParamsSchema } from "@/components/all-in-one-theme-editor/utils/schema";
import { ExportTheme } from "@/components/all-in-one-theme-editor/ExportTheme";

export const Route = createRootRouteWithContext<RouterCntextTypes>()({
  component: RootComponent,
  validateSearch: (input) => {
    return daisyUIThemeSearchParamsSchema.parse(input);
  },
});

export function RootComponent() {
  const { updateLockedTheme, searchParams, updateTheme, navigate } =
    useSearchParamsTheme();
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  useEffect(() => {
    navigate({
      search: defaultThemes({ theme: searchParams }),
    });
    // if (!isThemeNotNull(searchParams)) {
    // }
  }, []);
  useLayoutEffect(() => {
    const default_data_theme = defaultThemes({
      theme: { ...searchParams },
    });
    navigate({
      search: default_data_theme,
    });
  }, [searchParams.theme_name]);

  // useLayoutEffect(() => {
  //   const mutationObserver = new MutationObserver((e) => {
  //     const elem = e[0].target as HTMLHtmlElement;
  //     const current_data_theme = elem.getAttribute("data-theme");
  //       const default_data_theme = defaultThemes({
  //         theme: { ...searchParams },
  //       });
  //     navigate({
  //       search: default_data_theme,
  //     });

  //   });
  //   mutationObserver.observe(document.documentElement, {
  //     attributes: true,
  //     attributeFilter: ["data-theme"],
  //   });
  //   return () => {
  //     mutationObserver.disconnect();
  //   };
  // }, []);

  // const inline_css_variables = Object.entries(searchParams).map(([key, value]) =>{
  //   if(typeof value === "string") return
  //   return `${value.variable}: ${value.value};`
  // }).join(";")

  return (
    <div
      data-theme={searchParams.theme_name}
      // @ts-expect-error
      style={getDaisyUiInlineCSSVariables(searchParams)}
      className="flex h-full w-full flex-col items-center justify-center"
    >
      <MainNavBar />
      <div className="drawer sticky top-[10%] z-20">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="drawer-button absolute left-2 top-5"
          >
            <Palette className="ml-4" />
          </label>
        </div>
        <div className="drawer-side">
          <ul className="menu min-h-full w-[70%] bg-base-200 text-base-content @container md:w-[40%] md:p-4">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay sticky top-4"
            >
              <X />
            </label>
            {/* Sidebar content here */}
            <DaisyUIThemeEditor
              theme={searchParams}
              saveChanges={(items_key, new_items) => {
                updateTheme(items_key as any, new_items);
              }}
              lockTheme={(items_key, new_items) => {
                updateLockedTheme(items_key as any, new_items);
              }}
            />
          </ul>
        </div>
      </div>
      <div className="drawer drawer-end sticky top-[12%]">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="btn-outline drawer-button absolute right-5 top-0 flex gap-2"
          >
            export <Save />
          </label>
        </div>
        <div className="drawer-side">
          <ul className="menu min-h-full w-[90%] bg-base-200 text-base-content md:w-[40%]">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay sticky top-4"
            >
              <X />
            </label>
            {/* Sidebar content here */}
            <ExportTheme theme={searchParams} />
          </ul>
        </div>
      </div>

      <Outlet />
      <TailwindIndicator />
      <TanStackRouterDevtools position="bottom-left" />
    </div>
  );
}
