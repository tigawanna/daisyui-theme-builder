import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/twarkui/")({
  component: index,
});

function index() {
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center bg-gradient-to-tr from-secondary-content via-accent-content to-primary-content">
      <div className="background-animate flex h-fit w-full flex-col items-center justify-center bg-gradient-to-tr from-primary to-secondary bg-clip-text text-7xl text-transparent">
        <h1 className="text-4xl font-bold">tailwind + ARK ui</h1>
        <h1 className="text-9xl font-bold">Coming soon</h1>
      </div>
    </div>
  );
}
