import { cn } from '@/components/shadcn/lib/utils';
import { Accordion as AccordionPrimitive } from '@ark-ui/react/accordion'
import { type VariantProps, tv } from 'tailwind-variants'
import { createStyleContext } from '~/components/park/lib/create-style-context'
import * as React from "react";
import { ChevronDown } from 'lucide-react';

const accordion = tv(
  {
    base: "accordion",
    defaultVariants: { size: "md" },
    slots: {
      root: " p-2 flex flex-col items-center gap-1 ",
      item: "accordion__item w-full",
      itemTrigger:
        `w-full flex items-center justify-between py-4 
        font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180`,
      itemContent: "accordion__itemContent",
      itemIndicator: "accordion__itemIndicator",
    },
    variants: {
      size: {
        md: {
          root: "accordion__root--size_md",
          item: "accordion__item--size_md",
          itemTrigger: "accordion__itemTrigger--size_md",
          itemContent: "accordion__itemContent--size_md",
          itemIndicator: "accordion__itemIndicator--size_md",
        },
      },
    },
  },
  { twMerge: false },
);

const { withProvider, withContext } = createStyleContext(accordion)

export interface RootProps
  extends AccordionPrimitive.RootProps,
    VariantProps<typeof accordion> {}
export const Root = withProvider<HTMLDivElement, RootProps>(AccordionPrimitive.Root, 'root')

export const ItemContent = withContext<HTMLDivElement, AccordionPrimitive.ItemContentProps>(
  AccordionPrimitive.ItemContent,
  'itemContent',
)

export const ItemIndicator = withContext<HTMLDivElement, AccordionPrimitive.ItemIndicatorProps>(
  AccordionPrimitive.ItemIndicator,
  'itemIndicator',
)

export const Item = withContext<HTMLDivElement, AccordionPrimitive.ItemProps>(AccordionPrimitive.Item, 'item')

export const ItemTrigger = withContext<HTMLButtonElement, AccordionPrimitive.ItemTriggerProps>(
  AccordionPrimitive.ItemTrigger,
  'itemTrigger',
)

export {
  AccordionContext as Context,
  AccordionItemContext as ItemContext,
  type AccordionContextProps as ContextProps,
  type AccordionItemContextProps as ItemContextProps,
} from '@ark-ui/react/accordion'

export type {
  AccordionFocusChangeDetails as FocusChangeDetails,
  AccordionValueChangeDetails as ValueChangeDetails,
} from '@ark-ui/react/accordion'



const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.ItemTrigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.ItemTrigger>
>(({ className, children, ...props }, ref) => (

    <AccordionPrimitive.ItemTrigger
      ref={ref}
      className={cn(
        "w-full flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.ItemTrigger>

));
AccordionTrigger.displayName = AccordionPrimitive.ItemTrigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.ItemContent>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.ItemContent>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.ItemContent
    ref={ref}
    className={`data-[state=close]:animate-ark-accordion-up data-[state=open]:animate-ark-accordion-down
       overflow-hidden text-sm transition-all`}
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.ItemContent>
));

AccordionContent.displayName = AccordionPrimitive.ItemContent.displayName;
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
