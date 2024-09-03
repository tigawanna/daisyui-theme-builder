import { Badge } from "@/components/shadcn/ui/badge";

export function BadgeDemo() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center">
      <div className="w-full p-2 text-center text-lg font-bold">Badges</div>
      <Badge>Badge</Badge>
      <Badge variant={"secondary"}>Secondary Badge</Badge>
      <Badge variant={"outline"}>Outline Badge</Badge>
      <Badge variant={"destructive"}>DestructiveBadge</Badge>
    </div>
  );
}
