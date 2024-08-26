import { DaisyUIThemeEditor } from "@/components/all-in-one-theme-editor/DaisyUIThemeEditor";
import { useThemeStore } from "@/components/all-in-one-theme-editor/state/zustand";
import { defaultThemes } from "@/helpers/daisyui/default-values";
import { useSearchParamsTheme } from "../components/all-in-one-theme-editor/utils/use-search-params-theme";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

interface HomePageProps {}

export function HomePage({}: HomePageProps) {
  // const { theme,updateTheme } = useThemeStore();
  const {navigate,searchParams,updateTheme} =useSearchParamsTheme()
  // const theme = useThemeStore((state) => state.theme);
  // const [theme, setTheme] = useState(defaultThemes({}));

  // useEffect(() => {
  //   console.log(" === local storage theme === ", localStorage.getItem("theme")?.primary?.value);
  //   },[theme?.primary?.value])
  // console.log("============= theme ============", theme?.primary?.value);
  return (
    <div className="w-full  h-full bg-uwu/10 min-h-screen flex flex-col items-center gap-7 ">
      <DaisyUIThemeEditor
        theme={searchParams}
        saveChanges={(items_key, new_items) => {
          console.log("items_key", items_key, "new_items", new_items);
          // setTheme({ ...theme, [items_key]: new_items });
          updateTheme(items_key as any, new_items);
        }}
      />
    </div>
  );
}
