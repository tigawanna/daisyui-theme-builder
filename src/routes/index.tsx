
import { TestUwuVariable } from "@/components/daisyui/TestUwuVariable";
import { ThemesList } from "@/components/themes/ThemesList";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

interface HomePageProps {}

export function HomePage({}: HomePageProps) {
  return (
    <div className="w-full  h-full bg-uwu/10 min-h-screen flex flex-col items-center gap-7 ">
      <h1 className="text-6xl font-bold">homepage </h1>
      <TestUwuVariable />
    </div>
  );
}
