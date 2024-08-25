import { DaisyUIThemeEditor } from "@/components/all-in-one-theme-editor/DaisyUIThemeEditor";
import { useThemeStore } from "@/components/all-in-one-theme-editor/state/zustand";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,

});

interface HomePageProps {}

export function HomePage({}: HomePageProps) {
  const  {theme,updateTheme} = useThemeStore()
  return (
    <div className="w-full  h-full bg-uwu/10 min-h-screen flex flex-col items-center gap-7 ">     
        <DaisyUIThemeEditor theme={theme} saveChanges={(items_key,new_items)=>{
            updateTheme(items_key as any,new_items)
        }}/>
    </div>
  );
}
