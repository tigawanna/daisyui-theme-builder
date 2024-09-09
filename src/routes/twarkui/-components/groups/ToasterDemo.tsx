import { toaster } from "@/components/park/lib/create-taost";
import { Button } from "@/components/park/ui/button";
import * as Toast from "@/components/park/ui/toast"
import { XIcon } from "lucide-react";
export function ToasterContainer(){
return (
  <>
    <Toast.Toaster toaster={toaster}>
      {(toast) => (
        <Toast.Root
          key={toast.id}
          type="success"
        >
          <Toast.Title>{toast.title}</Toast.Title>
          <Toast.Description>{toast.description}</Toast.Description>
          <Toast.ActionTrigger asChild>
            <Button variant="link" size="sm">
              Action
            </Button>
          </Toast.ActionTrigger>
          <Toast.CloseTrigger asChild>
            <Button size="sm" variant="link">
              <XIcon />
            </Button>
          </Toast.CloseTrigger>
        </Toast.Root>
      )}
    </Toast.Toaster>
  </>
);
}

export function ToasterDemo(){
return (
  <div className="flex h-full w-full flex-wrap items-center justify-center">
    <Button
      onClick={() => {
        toaster.create({
          title: "info",
          description: `this is a info toast`,
          type: "info",
          duration:5000,
          placement:"bottom-end"
        });
      }}
    >
    Info  Toast
    </Button>
    <Button
      onClick={() => {
        toaster.create({
          title: "Success",
          description: `this is a success toast`,
          type: "success",
          duration:5000,
          placement:"bottom-end"
        });
      }}
    >
    Success  Toast
    </Button>

    <Button
      onClick={() => {
        toaster.create({
          title: "Warning",
          description: `this is a warning toast`,
          type: "loading",
          duration:5000,
          placement:"bottom-end"
        });
      }}
    >
    Warning  Toast
    </Button>


    <Button
      onClick={() => {
        toaster.create({
          title: "Success",
          description: `this is an error toast`,
          type: "error",
          duration:5000,
          placement:"bottom-end"
        });
      }}
    >
    Error  Toast
    </Button>
  </div>
);
}
