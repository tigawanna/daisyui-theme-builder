import { lazy, Suspense } from "react";
import { AccordionDemo } from "./demos/AccordionDemo";
import { AlertDemo } from "./demos/Alertdemo";
import { AlertDialogDemo } from "./demos/AlertDialogDemo";
import { AvatarDemo } from "./demos/AvatarDemo";
import { BadgeDemo } from "./demos/BadgeDemo";
import { BreadcrumbDemo } from "./demos/BreadCumbsDemo";
import { ButtonDemo } from "./demos/ButtonDemo";
import { CardWithForm } from "./demos/CardDemo";
import ChartsDemo from "./demos/ChartsDemo";

const CarouselDemo = lazy(() => import("./CarouselDemo"));
const CalendarDemo = lazy(() => import("./demos/CalenderDemo"));
interface OutputsProps {}

export function Outputs({}: OutputsProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center gap-5 p-5">
        <BreadcrumbDemo />
        <div className="flex w-full flex-wrap items-center justify-center gap-5 p-5">
          <AccordionDemo />
              <CalendarDemo />
          {/* <Suspense fallback={<div className="w-full bg-base-200 skeleton min-h-[200px] justify-center items-center">Loading...</div>}>
          </Suspense> */}
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-5 p-5">
          <AvatarDemo />
          <AlertDemo />
          <AlertDialogDemo />
          <ButtonDemo />
          <BadgeDemo />
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-6 p-5">
          <CardWithForm />
          <Suspense fallback={<div className="w-full bg-base-200 skeleton min-h-[200px] flex justify-center items-center">Loading...</div>}>
          <CarouselDemo />
          </Suspense>
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-6 p-5">
          <ChartsDemo/>
        </div>
      </div>
    </div>
  );
}
