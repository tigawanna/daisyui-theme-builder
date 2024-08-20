
import { DaisyUIThemes } from "@/components/daisyui/DaisyUIThemes";
import { useThemeWithDefaults } from "@/helpers/daisyui/default-values";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,

});

interface HomePageProps {}

export function HomePage({}: HomePageProps) {
    const defaultTheme = useThemeWithDefaults();
  return (
    <div className="w-full  h-full bg-uwu/10 min-h-screen flex flex-col items-center gap-7 ">
      <h1 className="text-6xl font-bold">homepage </h1>
      {/* <TestUwuVariable /> */}
      <DaisyUIThemes theme={defaultTheme} />
    </div>
  );
}
