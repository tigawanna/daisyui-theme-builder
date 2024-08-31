import { createFileRoute } from "@tanstack/react-router";
import { AllDaisyUIComponents } from "@/components/daisyui/AllDaisyUI";

export const Route = createFileRoute("/")({
  component: HomePage,
});

interface HomePageProps {}

export function HomePage({}: HomePageProps) {
return (
    <div className="flex h-full min-h-screen w-full flex-col items-center gap-7 ">
      <AllDaisyUIComponents />
    </div>
  );
}
