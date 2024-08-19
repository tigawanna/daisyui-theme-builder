import { ThemesList } from "@/components/themes/ThemesList";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

interface HomePageProps {}

export function HomePage({}: HomePageProps) {
  return <div className="w-full h-full min-h-screen flex flex-col items-center justify-center">
    <h1 className="text-9xl font-bold">homepage </h1>
    <ThemesList/>
  </div>;
}
