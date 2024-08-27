import { DaisyUIThemeEditor } from "@/components/all-in-one-theme-editor/DaisyUIThemeEditor";
import { useSearchParamsTheme } from "../components/all-in-one-theme-editor/utils/use-search-params-theme";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { getDaisyUiColors } from "@/helpers/daisyui/daisyui-theme";


export const Route = createFileRoute("/")({
  component: HomePage,
});

interface HomePageProps {}

export function HomePage({}: HomePageProps) {
    const primaryalueRef = useRef([""]);
  // const { theme,updateTheme } = useThemeStore();
  const {updateLockedTheme,searchParams,updateTheme} =useSearchParamsTheme()

      useEffect(() => {
          const theme = getDaisyUiColors();
          console.log("theme", theme);
        
      }, [searchParams.theme_name]);

  return (
    <div className="w-full  h-full bg-uwu/10 min-h-screen flex flex-col items-center gap-7 ">
      <button className="btn" onClick={() => {
        console.log("is primary locked  === ", searchParams?.primary?.locked);
      }}>go pink</button>
      <DaisyUIThemeEditor
        theme={searchParams}
        saveChanges={(items_key, new_items) => {
          console.log("items_key", items_key, "new_items", new_items);
          // setTheme({ ...theme, [items_key]: new_items });
          updateTheme(items_key as any, new_items);
          
        }}
        lockTheme={(items_key, new_items) => {
          console.log("locking  === ", items_key, new_items);
          // setTheme({ ...theme, [items_key]: new_items });
          updateLockedTheme(items_key as any, new_items);
        }}
      />

    </div>
  );
}
