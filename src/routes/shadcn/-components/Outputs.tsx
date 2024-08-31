import { AccordionDemo } from "./Accordion";
import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/shadcn/ui/alert";

interface OutputsProps {

}

export function Outputs({}:OutputsProps){
return (
  <div className="flex h-full w-full flex-col items-center justify-center">
    <div className="flex w-full flex-col items-center justify-center p-5 gap-5">
      <AccordionDemo />
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
    </div>
  </div>
);
}
