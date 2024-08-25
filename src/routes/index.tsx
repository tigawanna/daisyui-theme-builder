import { LoadedDaisyUITheme } from "@/components/daisyui/LoadedDaisyUITheme";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,

});

interface HomePageProps {}

export function HomePage({}: HomePageProps) {
  return (
    <div className="w-full  h-full bg-uwu/10 min-h-screen flex flex-col items-center gap-7 ">     
    <LoadedDaisyUITheme/>
    </div>
  );
}
