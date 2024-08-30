import { DrawerIds } from "@/routes/__root";
import { Link, Outlet } from "@tanstack/react-router";
import { MainNavBar } from "./MainNavBar";
import { DaisyUIThemeSearchParmsTypes } from "../all-in-one-theme-editor/utils/schema";
import { FileUp, Import, Save, X } from "lucide-react";
import { DaisyUIThemeEditor } from "../all-in-one-theme-editor/DaisyUIThemeEditor";
import { ExportTheme } from "../all-in-one-theme-editor/ExportTheme";

interface MainDaisyUiDrawerProps {
  searchParams:DaisyUIThemeSearchParmsTypes;
  closeDrawer: (drawerId: DrawerIds) => void;
  updateLockedTheme: (items_key: string, is_locked: boolean) => void;
  updateTheme: (items_key: string, new_items: string) => void;
}

export function MainDaisyUiDrawer({searchParams,closeDrawer,updateLockedTheme,updateTheme}:MainDaisyUiDrawerProps){
return (
  <>
    <div className="drawer-content flex w-full flex-col">
      {/* Navbar */}
      <div className="sticky top-0 flex items-center justify-center bg-base-200 p-2">
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

      {/* Page content here */}
      <Outlet />
    </div>
    <div className="drawer-side">
      <label
        htmlFor="main-page-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu min-h-full w-[70%] bg-base-200 text-base-content @container md:w-[40%] md:p-4">
        {/* Sidebar content here */}
        <div className="flex w-full justify-end">
          <button
            className="btn btn-square btn-ghost btn-sm"
            onClick={() => closeDrawer("main-page-drawer")}
          >
            <X />
          </button>
        </div>
        {/* links */}
        <div
          onClick={() => closeDrawer("main-page-drawer")}
          className="flex w-full flex-col justify-between gap-2 divide-y"
        >
          <Link
            search={searchParams}
            to="/"
            className="bg-base-100/70 p-10 text-center text-2xl font-bold hover:bg-base-100/20"
          >
            UI
          </Link>
          <Link
            search={searchParams}
            to="/shadcn"
            className="bg-base-100/70 p-1 hover:bg-base-100/20"
          >
            shadcn
          </Link>
          <Link
            search={searchParams}
            to="/twarkui"
            className="bg-base-100/70 p-1 hover:bg-base-100/20"
          >
            twarkui
          </Link>
        </div>
        <div className="flex items-center justify-center gap-2">
          <label
            htmlFor="import-theme-drawer"
            className="btn drawer-button btn-sm flex gap-2"
          >
            import <Import />
          </label>

          <label
            htmlFor="export-theme-drawer"
            className="btn drawer-button btn-sm flex gap-2"
          >
            export <FileUp />
          </label>
        </div>
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
  </>
);
}
interface ExportThemeDaisyUiDrawerProps {
  searchParams: DaisyUIThemeSearchParmsTypes;
}

export function ExportThemeDaisyUiDrawer({searchParams}:ExportThemeDaisyUiDrawerProps){
return (
  <div className="drawer drawer-end sticky top-[12%] z-20">
    <input id="export-theme-drawer" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">{/* Page content here */}</div>
    <div className="drawer-side">
      <label
        htmlFor="export-theme-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      />
      <ul className="menu min-h-full w-[90%] bg-base-200 text-base-content md:w-[40%]">
        <label
          htmlFor="export-theme-drawer"
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
);
}
interface ImportThemeDaisyUiDrawerProps {
  searchParams: DaisyUIThemeSearchParmsTypes;
}

export function ImportThemeDaisyUiDrawer({searchParams}:ImportThemeDaisyUiDrawerProps){
return (


      <div className="drawer drawer-end sticky top-[12%] z-20">
        <input
          id="import-theme-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">{/* Page content here */}</div>
        <div className="drawer-side">
          <label
            htmlFor="import-theme-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          />
          <ul className="menu min-h-full w-[90%] bg-base-200 text-base-content md:w-[40%]">
            <label
              htmlFor="import-theme-drawer"
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
);
}
