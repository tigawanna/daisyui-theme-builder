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
import { ComboboxDemo } from "./demos/ComboboxDemo";
import { DataTableDemo } from "./demos/DataTableDemo";

const CommandDemo = lazy(() => import("./demos/CommandDemo"));
const CarouselDemo = lazy(() => import("./CarouselDemo"));
const CalendarDemo = lazy(() => import("./demos/CalenderDemo"));
const ContextMenuDemo = lazy(() => import("./demos/ContextMenuDemo"));
const DrawerDemo = lazy(() => import("./demos/DrawerDemo"));


interface OutputsProps {}

export function Outputs({}: OutputsProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center gap-5 p-5">
 
        <div className="flex w-full flex-wrap items-center justify-center gap-5 p-5">
          <AccordionDemo />
          <CalendarDemo />

        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-5 p-5">

          <AlertDemo />
          <AlertDialogDemo />
          <ButtonDemo />
          <BadgeDemo />
            <div className="flex w-fit flex-col items-center justify-center gap-1 md:max-w-[50%]">
            <h1 className="text-xl">Combobox</h1>
          <ComboboxDemo />
          </div>
          <div className="flex w-fit flex-col items-center justify-center gap-1 md:max-w-[50%]">
            <h1 className="text-xl">Context Menu</h1>
            <Suspense
              fallback={
                <div className="skeleton flex min-h-[200px] w-full items-center justify-center bg-base-200">
                  Loading...
                </div>
              }
            >
              <ContextMenuDemo />
            </Suspense>
          </div>

          <div className="flex w-fit flex-col items-center justify-center gap-1 md:max-w-[50%]">
            <h1 className="text-xl">Dropdown Menu</h1>
            <Suspense
              fallback={
                <div className="skeleton flex min-h-[200px] w-full items-center justify-center bg-base-200">
                  Loading...
                </div>
              }
            >
              <>uwu</>
       
            </Suspense>
          </div>
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-6 p-5">
          <CardWithForm />
          <Suspense
            fallback={
              <div className="skeleton flex min-h-[200px] w-full items-center justify-center bg-base-200">
                Loading...
              </div>
            }
          >
            <CarouselDemo />
          </Suspense>
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-6 p-5">
          <Suspense
            fallback={
              <div className="skeleton flex min-h-[200px] w-full items-center justify-center bg-base-200">
                Loading...
              </div>
            }
          >
            <CommandDemo />
          </Suspense>
          <div className="flex w-full flex-col items-center justify-center gap-1 md:max-w-[50%]">
            <h1 className="text-xl">Chart</h1>
            <Suspense
              fallback={
                <div className="skeleton flex min-h-[200px] w-full items-center justify-center bg-base-200">
                  Loading...
                </div>
              }
            >
              <ChartsDemo />
            </Suspense>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-1 md:max-w-[50%]">
          <h1 className="text-xl">Data Table</h1>
          <Suspense
            fallback={
              <div className="skeleton flex min-h-[200px] w-full items-center justify-center bg-base-200">
                Loading...
              </div>
            }
          >
            <DataTableDemo />
          </Suspense>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-6 p-5">
          <Suspense
            fallback={
              <div className="skeleton flex min-h-[200px] w-full items-center justify-center bg-base-200">
                Loading...
              </div>
            }
          >
            <DrawerDemo />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
