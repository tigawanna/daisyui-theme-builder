import { useState } from "react";
import DaisyUIThemeEditor from "../all-in-one-theme-editor/DaisyUIThemeEditor";
import { twMerge } from "tailwind-merge";
import { defaultThemes } from "../all-in-one-theme-editor/utils/theme-default-values";
import { useDaisyUITheme } from "../all-in-one-theme-editor/utils/use-search-params-theme";


interface DaisyUiDevtoolsProps {
position?:"start"|"end"
drawerID?:string;
drawerClassname?:string;
toggleClassname?:string;
iconClassname?:string;
}

export function DaisyUiDevtools({
  drawerID = "daisyui-devtools-drawer",
  position="end",
  toggleClassname="",
  drawerClassname="",
  iconClassname="",
}: DaisyUiDevtoolsProps) {

  const {searchParams,updateLockedTheme,updateTheme} = useDaisyUITheme() 
  if(process.env.NODE_ENV !== "development"){
    return
 }
 const drawerPositionStyles =
   position === "end"
     ? "drawer drawer-end sticky  z-50"
     : "drawer sticky  z-50";
  return (
    <>
      <label
        htmlFor="daisyui-devtools-drawer"
        className={twMerge("btn drawer-button fixed right-[5%] top-[10%] z-50 flex gap-2 rounded-full text-primary", toggleClassname)}
      >
        <svg
          className={twMerge("h-8 w-8 fill-primary text-primary hover:fill-accent", iconClassname)}
          viewBox="0 0 16.00 16.00"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 8C16 8.33866 15.979 8.67241 15.9381 9H8V11L11 14V15.4185C10.0736 15.7935 9.0609 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM3 9C3.55228 9 4 8.55229 4 8C4 7.44772 3.55228 7 3 7C2.44772 7 2 7.44772 2 8C2 8.55229 2.44772 9 3 9ZM9 3C9 3.55228 8.55229 4 8 4C7.44772 4 7 3.55228 7 3C7 2.44772 7.44772 2 8 2C8.55229 2 9 2.44772 9 3ZM5.17137 5.17158C5.56189 4.78106 5.56189 4.14789 5.17137 3.75737C4.78084 3.36685 4.14768 3.36685 3.75716 3.75737C3.36663 4.14789 3.36663 4.78106 3.75716 5.17158C4.14768 5.56211 4.78084 5.56211 5.17137 5.17158ZM12.2428 5.17161C11.8522 5.56214 11.2191 5.56214 10.8285 5.17161C10.438 4.78109 10.438 4.14792 10.8285 3.7574C11.2191 3.36688 11.8522 3.36688 12.2428 3.7574C12.6333 4.14792 12.6333 4.78109 12.2428 5.17161ZM5.17146 10.8284C4.78094 10.4379 4.14777 10.4379 3.75725 10.8284C3.36672 11.2189 3.36672 11.8521 3.75725 12.2426C4.14777 12.6331 4.78094 12.6331 5.17146 12.2426C5.56199 11.8521 5.56199 11.2189 5.17146 10.8284Z"
            ></path>{" "}
          </g>
        </svg>
      </label>

      <div className={twMerge(drawerPositionStyles,drawerClassname)}>
        <input id={drawerID} type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">{/* Page content here */}</div>
        <div className="drawer-side">
          <label
            htmlFor={drawerID}
            aria-label="close sidebar"
            className="drawer-overlay"
          />
          <ul className="menu min-h-full w-[90%] bg-base-200 text-base-content md:w-[40%]">
            <label
              htmlFor={drawerID}
              aria-label="close sidebar"
              className="drawer-overlay sticky top-4"
            >
              🗙
            </label>
            {/* Sidebar content here */}

            <DaisyUIThemeEditor theme={searchParams} updateTheme={updateTheme} updateLockedTheme={updateLockedTheme}/>
          </ul>
        </div>
      </div>
    </>
  );
}
