import {
  createRootRouteWithContext,
  Link,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import type { RouterCntextTypes } from "@/main";
import { MainNavBar } from "@/components/navigation/MainNavBar";
import { useCallback, useEffect } from "react";
import { themeChange } from "theme-change";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { TailwindIndicator } from "@/components/navigation/tailwind-indicator";
import { getDaisyUiInlineCSSVariables } from "@/components/all-in-one-theme-editor/utils/daisyui-css-variables-helpers";
import { defaultThemes } from "@/components/all-in-one-theme-editor/utils/theme-default-values";
import { useDaisyUITheme } from "@/components/all-in-one-theme-editor/utils/use-search-params-theme";
import { daisyUIThemeSearchParamsSchema } from "@/components/all-in-one-theme-editor/utils/schema";
import {
  ExportThemeDaisyUiDrawer,
  ImportThemeDaisyUiDrawer,
  MainDaisyUiDrawer,
} from "@/components/navigation/DaisyUiDrawers";
import { hideSplashScreen } from "vite-plugin-splash-screen/runtime";
import { Intro } from "./-components/Intro";
import { DrawerIds } from "./-components/type";
import { DaisyUiDevtools } from "@/components/navigation/DaisyUiDevtools";




export const Route = createRootRouteWithContext<RouterCntextTypes>()({
  component: RootComponent,
  validateSearch: (input) => {
    return daisyUIThemeSearchParamsSchema.parse(input);
  },
});

function RootComponent() {
  const { searchParams, updateWholeTheme, navigate } = useDaisyUITheme();
  const { status } = useRouterState();

  useEffect(() => {
    hideSplashScreen();
    themeChange(false);
    // 👆 false parameter is required for react project
    navigate({
      search: defaultThemes({ theme: searchParams }),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const default_data_theme = defaultThemes({
      theme: { ...searchParams },
    });
    navigate({
      search: default_data_theme,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams?.["--theme-name"]?.value]);

  const closeDrawer = useCallback(
    (drawerId: DrawerIds) => {
      const drawer = document.getElementById(drawerId) as HTMLInputElement;
      if (drawer) {
        drawer.checked = false;
      }
    },
    [
      /* dependencies */
    ],
  );
  return (
    <div
      data-theme={searchParams?.["--theme-name"]?.value}
      style={getDaisyUiInlineCSSVariables(searchParams)}
      className="drawer flex h-full w-full flex-col items-center  justify-between bg-base-100 text-base-content"
    >
      <input id="main-page-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex w-full flex-col">
        {/* Navbar */}
        <div className="sticky top-0 flex flex-col items-center justify-center bg-base-200">
          <div className="flex h-full w-full items-center justify-center p-2">
            <label
              htmlFor="main-page-drawer"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost btn-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <Link to="/" search={searchParams} classID="px-2">
              <h1 className="mx-2 text-2xl font-bold hover:text-accent">UI</h1>
            </Link>

            <MainNavBar />
          </div>
          {status === "pending" ? (
            <div className="skeleton h-1 w-full bg-accent" />
          ) : (
            <div className="h-1 w-full" />
          )}
        </div>
        <Intro />
        <Outlet />
      </div>
      {/* Page content here */}
      <MainDaisyUiDrawer
        closeDrawer={closeDrawer}
        searchParams={searchParams}
      />
      {/* export theme drawer */}
      <ExportThemeDaisyUiDrawer searchParams={searchParams} />
      {/* import theme drawer */}
      <ImportThemeDaisyUiDrawer
        searchParams={searchParams}
        updateWholeTheme={updateWholeTheme}
      />
      <TailwindIndicator />
      <TanStackRouterDevtools position="bottom-left" />
      <DaisyUiDevtools position="start" iconClassname="size-6 "/>
      {/* <DaisyUIThemeEditor theme={searchParams} /> */}

      <footer className="flex w-full items-center justify-between bg-base-200 p-2 px-4">
        <a
          className="link-hover link"
          href="https://tigawanna-portfolio.vercel.app/"
          target="_blank"
        >
          tigawanna
        </a>
        <a
          className="link-hover link"
          href="https://github.com/tigawanna/daisyui-theme-builder"
          target="_blank"
        >
          code on github
        </a>
      </footer>
    </div>
  );
}
