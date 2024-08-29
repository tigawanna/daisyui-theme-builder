import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/shadcn/")({
  component: () => <div>Hello /shadcn/!</div>,
});
