import { AccordionDemo } from "./Accordion";
import { Outputs } from "./Outputs";

interface AllComponentsProps {

}

export function AllComponents({}:AllComponentsProps){
return (
  <div className="flex h-full w-full flex-col items-center  justify-center gap-3">
    <Outputs />
      <div className="flex h-full w-full flex-wrap items-center  justify-center gap-3">

    <div className="bg-primary-content p-5 text-base-100">primary-content</div>
    <div className="bg-primary-foreground p-5 text-base-100">primary-foreground</div>
    <div className="bg-base-content p-5 text-base-100">uwu</div>

    <div className="bg-foreground p-5 ">bg foreground</div>
    <div className="bg-base-content p-5 ">bg foreground</div>
    <div className="bg-background text-foreground p-5 ">bg background</div>

    <div className="bg-destructive p-5 ">bg destructive</div>

    <div className="bg-accent-content p-5 text-accent-content">uwu</div>
    <div className="bg-accent-foreground p-5 text-accent-content">uwu</div>
  </div>
  </div>
);
}
