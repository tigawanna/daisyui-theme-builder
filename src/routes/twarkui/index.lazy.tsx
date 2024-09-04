import { createLazyFileRoute, useSearch } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/twarkui/")({
  component: index,
});

export function index() {

  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center">
      <h1 className="text-9xl font-bold">Coming soon</h1>
    </div>
  );
}
