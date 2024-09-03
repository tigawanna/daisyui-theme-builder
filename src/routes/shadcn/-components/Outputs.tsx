import { AccordionDemo } from "./demos/AccordionDemo";
import { AlertDemo } from "./demos/Alertdemo";
import { AlertDialogDemo } from "./demos/AlertDialogDemo";
import { AvatarDemo } from "./demos/AvatarDemo";
import { BadgeDemo } from "./demos/BadgeDemo";
import { BreadcrumbDemo } from "./demos/BreadCumbsDemo";
import { ButtonDemo } from "./demos/ButtonDemo";
import { CalendarDemo } from "./demos/CalenderDemo";
import { CardWithForm } from "./demos/CardDemo";

interface OutputsProps {}

export function Outputs({}: OutputsProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center gap-5 p-5">
        <BreadcrumbDemo/>
      <div className="flex w-full flex-wrap items-center justify-center gap-5 p-5">
        <AccordionDemo />
          <CalendarDemo/>
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-5 p-5">
          <AvatarDemo/>
          <AlertDemo/>
          <AlertDialogDemo />
           <ButtonDemo/>
          <BadgeDemo/>
          <CardWithForm/>
        </div>
      </div>
    </div>
  );
}
