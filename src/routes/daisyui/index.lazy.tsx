import { AllDaisyUIComponents } from "@/components/daisyui/AllDaisyUI";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/daisyui/")({
  component: DaisyUIPage,
});


export function DaisyUIPage(){
return (
  <div className="flex h-full w-full flex-col items-center justify-center">
    <AllDaisyUIComponents/>
  </div>
);
}
