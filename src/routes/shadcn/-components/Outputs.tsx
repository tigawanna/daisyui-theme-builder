import { lazy, Suspense } from "react";
import { AccordionDemo } from "./demos/AccordionDemo";
import { AlertDemo } from "./demos/Alertdemo";
import { AlertDialogDemo } from "./demos/AlertDialogDemo";
import { BadgeDemo } from "./demos/BadgeDemo";
import { ButtonDemo } from "./demos/ButtonDemo";
import ChartsDemo from "./demos/ChartsDemo";
import { ComboboxDemo } from "./demos/ComboboxDemo";
import { SonnerDemo } from "./demos/Sonnerdemo";
import { SkeletonDemo } from "./demos/SkeletonDemo";
import { DataTableDemo } from "./demos/data-table/DataTableDemo";

const CommandDemo = lazy(() => import("./demos/CommandDemo"));
const CarouselDemo = lazy(() => import("./CarouselDemo"));
const CalendarDemo = lazy(() => import("./demos/CalenderDemo"));
const ContextMenuDemo = lazy(() => import("./demos/ContextMenuDemo"));
const DrawerDemo = lazy(() => import("./demos/DrawerDemo"));
const TabsDemo = lazy(() => import("./demos/TabsDemo"));
const CardWithForm = lazy(() => import("./demos/CardDemo"));

export function Outputs() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center gap-5 p-5">
        <div className="flex w-full flex-wrap items-center justify-center gap-5 p-5">
          <AccordionDemo />
          <CalendarDemo />
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-5 p-5">
          <AlertDemo />
          <ButtonDemo />
          <BadgeDemo />
          <div className="flex w-fit min-w-[25%] flex-col items-center justify-center gap-1 md:max-w-[50%]">
            <h1 className="text-xl">skeleton</h1>
            <SkeletonDemo />
          </div>
          <div className="flex w-fit min-w-[25%] flex-col items-center justify-center gap-1 md:max-w-[50%]">
            <h1 className="text-xl">Alert dialog</h1>
            <AlertDialogDemo />
          </div>

          <div className="flex w-fit min-w-[25%] flex-col items-center justify-center gap-1 md:max-w-[50%]">
            <h1 className="text-xl">Combobox</h1>
            <ComboboxDemo />
          </div>
          <div className="flex w-fit min-w-[25%] flex-col items-center justify-center gap-1 md:max-w-[50%]">
            <h1 className="text-xl">Sonner</h1>
            <SonnerDemo />
          </div>
          <div className="flex w-fit min-w-[25%] flex-col items-center justify-center gap-1 md:max-w-[50%]">
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
          <div className="flex w-fit min-w-[25%] flex-col items-center justify-center gap-1 md:max-w-[50%]">
            <h1 className="text-xl">Tabs</h1>
            <Suspense
              fallback={
                <div className="skeleton flex min-h-[200px] w-full items-center justify-center bg-base-200">
                  Loading...
                </div>
              }
            >
              <TabsDemo />
            </Suspense>
          </div>
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-6 p-5">
          <div className="flex w-fit min-w-[25%] flex-col items-center justify-center gap-1 md:max-w-[50%]">
            <h1 className="text-xl">Card with form</h1>
            <Suspense
              fallback={
                <div className="skeleton flex min-h-[200px] w-full items-center justify-center bg-base-200">
                  Loading...
                </div>
              }
            >
              <CardWithForm />
            </Suspense>
          </div>
          <div className="flex w-fit min-w-[25%] flex-col items-center justify-center gap-1 md:max-w-[50%]">
            <h1 className="text-xl">Carousel</h1>
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
