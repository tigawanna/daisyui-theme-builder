import { createLazyFileRoute } from "@tanstack/react-router";
import { AllComponents } from "./-components/AllComponents";
import { Toaster } from "@/components/shadcn/ui/sonner";

export const Route = createLazyFileRoute("/shadcn/")({
  component: index,
});

function index() {
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center">
      <AllComponents />
      <Toaster />
    </div>
  );
}
