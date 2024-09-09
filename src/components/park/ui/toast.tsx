import * as ToastPrimitive from "@ark-ui/react/toast";
import { type VariantProps, tv } from "tailwind-variants";
import { createStyleContext } from "~/components/park/lib/create-style-context";




    // .toast__title {
    //   color: var(--colors-fg-default);
    //   font-size: var(--font-sizes-sm);
    //   line-height: 1.25rem;
    //   font-weight: var(--font-weights-semibold);
    // }

    // .toast__description {
    //   color: var(--colors-fg-muted);
    //   font-size: var(--font-sizes-sm);
    //   line-height: 1.25rem;
    // }

    // .toast__actionTrigger {
    //   margin-top: var(--spacing-2);
    // }

    // .toast__closeTrigger {
    //   top: var(--spacing-3);
    //   right: var(--spacing-3);
    //   position: absolute;
    // }

    // .toast__root {
    //   background: var(--colors-bg-default);
    //   border-radius: var(--radii-l3);
    //   box-shadow: var(--shadows-lg);
    //   min-width: var(--sizes-xs);
    //   height: var(--height);
    //   opacity: var(--opacity);
    //   overflow-wrap: anywhere;
    //   padding: var(--spacing-4);
    //   scale: var(--scale);
    //   translate: var(--x) var(--y) 0;
    //   will-change: translate, opacity, scale;
    //   z-index: var(--z-index);
    //   --transition-duration: var(--durations-slow);
    //   transition-duration: var(--durations-slow);
    //   --transition-prop: translate, scale, opacity, height;
    //   --transition-easing: var(--easings-default);
    //   transition-property: translate, scale, opacity, height;
    //   transition-timing-function: var(--easings-default);
    //   position: relative;
    // }

const toast = tv(
  {
    base: "toast ",
    slots: {
      actionTrigger: "absolute right-0 bottom-0 p-2",
      closeTrigger: "absolute right-0 top-0 p-2",
      group: "",
      root: "toast__root min-w-[300px] bg-base-300 rounded-lg p-3  gap-1 z-50  ",
      title: "text-2xl font-bold",
      description: "text-sm",
    },
    defaultVariants: {
      type: "info",
    },
    variants: {
      type: {
        info: "bg-info text-blue-900",
        success: "toast--type__success",
        warning: "toast--type__warning",
        error: "toast--type__error",
      },
    },
  },
  { twMerge: false },
);
const { withProvider, withContext } = createStyleContext(toast);

export interface RootProps extends ToastPrimitive.Toast.RootProps, VariantProps<typeof toast> {}
export const Root = withProvider<HTMLDivElement, RootProps>(ToastPrimitive.Toast.Root, "root");

export const ActionTrigger = withContext<HTMLButtonElement, ToastPrimitive.Toast.ActionTriggerProps>(
  ToastPrimitive.Toast.ActionTrigger,
  "actionTrigger"
);

export const CloseTrigger = withContext<HTMLButtonElement, ToastPrimitive.Toast.CloseTriggerProps>(
  ToastPrimitive.Toast.CloseTrigger,
  "closeTrigger"
);

export const Description = withContext<HTMLDivElement, ToastPrimitive.Toast.DescriptionProps>(
  ToastPrimitive.Toast.Description,
  "description"
);

export const Title = withContext<HTMLDivElement, ToastPrimitive.Toast.TitleProps>(ToastPrimitive.Toast.Title, "title");

export {
  ToastContext as Context,
  Toaster,
  type ToastContextProps as ContextProps,
  type ToasterProps,
} from "@ark-ui/react/toast";





    // <Toast.Toaster toaster={toaster}>
    //   {(toast) => (

    //     <Toast.Root
    //       key={toast.id}
    //     >
    //       <Toast.Title>{toast.title}</Toast.Title>
    //       <Toast.Description>{toast.description}</Toast.Description>
    //       <Toast.ActionTrigger asChild>
    //         <Button variant="link" size="sm">
    //           Action
    //         </Button>
    //       </Toast.ActionTrigger>
    //       <Toast.CloseTrigger asChild>
    //         <Button size="sm" variant="link">
    //           <XIcon />
    //         </Button>
    //       </Toast.CloseTrigger>
    //     </Toast.Root>
    //   )}
    // </Toast.Toaster>
