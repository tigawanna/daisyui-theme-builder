import { Actions } from "./Actions";
import { DaisyUIDisplayComponents } from "./DaisyUIDisplayComponents";
import { DaisyUIForm } from "./DaisyUIForm";

interface AllDaisyUIComponentsProps {

}

export function AllDaisyUIComponents({}:AllDaisyUIComponentsProps){
return (
  <div className="flex h-full w-full flex-col items-center justify-center">
    <Actions />
   <DaisyUIForm/>
   <DaisyUIDisplayComponents/>
  </div>
);
}
