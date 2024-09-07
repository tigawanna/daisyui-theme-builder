import { Actions } from "./Actions";
import { DaisyUIDisplayComponents } from "./DaisyUIDisplayComponents";
import { DaisyUIForm } from "./DaisyUIForm";

export function AllDaisyUIComponents() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Actions />
      <DaisyUIForm />
      <DaisyUIDisplayComponents />
    </div>
  );
}
