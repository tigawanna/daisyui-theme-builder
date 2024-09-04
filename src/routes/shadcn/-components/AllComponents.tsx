import { NavbarDemo } from "./NavbarDemo";
import { Outputs } from "./Outputs";

interface AllComponentsProps {}

export function AllComponents({}: AllComponentsProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3">
      <NavbarDemo />
      <Outputs />
    </div>
  );
}
