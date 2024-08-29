import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/daisyui/")({
  component: () => <div>Hello /daisyui/!</div>,
});
