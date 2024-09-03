import { AccordionDemo } from "./demos/AccordionDemo";
import { Outputs } from "./Outputs";

interface AllComponentsProps {

}

export function AllComponents({}:AllComponentsProps){
return (
  <div className="flex h-full w-full flex-col items-center  justify-center gap-3">
    <Outputs />
    {/* <div className="flex h-full w-full flex-wrap items-center  justify-center gap-3">

    <div className="bg-primary p-5 text-base-100">primary</div>
    <div className="bg-primary-content p-5 text-base-100">primary-content</div>
    <div className="bg-primary-foreground p-5 text-base-100">primary-foreground</div>


    <div className="bg-base-content p-5 text-base-100">base-content</div>
      <div className="bg-foreground p-5 ">foreground</div>

    <div className="bg-background  p-5 ">bg background</div>
    <div className="bg-base-100  p-5 ">base 100</div>

    <div className="bg-destructive p-5 ">bg destructive</div>
    <div className="bg-error p-5 ">bg error</div>

    <div className="bg-accent p-5 ">content</div>
    <div className="bg-accent-content p-5 text-accent-content">accent content</div>

  </div> */}
  </div>
);
}
