import { DaisyUIThemeEditor } from "@/components/all-in-one-theme-editor/DaisyUIThemeEditor";
import { useSearchParamsTheme } from "../components/all-in-one-theme-editor/utils/use-search-params-theme";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";


export const Route = createFileRoute("/")({
  component: HomePage,
});

interface HomePageProps {}

export function HomePage({}: HomePageProps) {
    const primaryalueRef = useRef([""]);
  // const { theme,updateTheme } = useThemeStore();
  const {navigate,searchParams,updateTheme} =useSearchParamsTheme()
//   useEffect(()=>{
//     if (searchParams.primary?.value){
//       primaryalueRef.current.push(searchParams.primary?.value);
// } 
//   console.log("primaryalueRef.current",primaryalueRef.current)
//   },[])
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
