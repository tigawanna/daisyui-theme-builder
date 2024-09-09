import { AccordionDemo } from "./groups/AccordionDemo";
import { ButtonsDemo } from "./groups/ButtonsDemo";
import { ToasterDemo } from "./groups/ToasterDemo";


export function ActionComponents(){
return (
 <div className='w-full h-full flex flex-col items-center justify-center'>
    <ButtonsDemo/>
    <AccordionDemo/>
   <ToasterDemo/>
 </div>
);
}
