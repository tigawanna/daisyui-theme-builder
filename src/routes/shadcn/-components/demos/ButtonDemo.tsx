import { Button } from "@/components/shadcn/ui/button";

export function ButtonDemo() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-1">
      <div className="w-full p-2 text-center text-xl">Buttons</div>
      <Button variant="default">Default Button</Button>
      <Button variant={"secondary"}>Secondary Button</Button>
      <Button variant="destructive">Destructive Button</Button>
      <Button variant={"ghost"}>Ghost Button</Button>
      <Button variant={"link"}>Link Button</Button>
      <Button variant={"outline"}>Outline Button</Button>
    </div>
  );
}
