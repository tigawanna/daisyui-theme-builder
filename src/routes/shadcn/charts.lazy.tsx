import { createLazyFileRoute } from "@tanstack/react-router";
import ChartsDemo from "./-components/demos/ChartsDemo";

export const Route = createLazyFileRoute("/shadcn/charts")({
  component: Charts,
});

export function Charts() {
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center">
      <ChartsDemo />
    </div>
  );
}
