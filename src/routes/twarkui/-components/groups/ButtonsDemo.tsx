import { Button } from "@/components/park/ui/button";

export function ButtonsDemo(){
return (
 <div className='w-full h-full flex flex-wrap gap-2 items-center justify-center'>
   <h1 className="w-full text-center text-xl p-2">Buttons</h1>
    <Button size="sm"> Small button</Button>
    <Button> Default button</Button>
    <Button size="lg"> Large button</Button>

    <Button variant="subtle"> sublte button</Button>
    <Button variant="outline"> Outline button</Button>
    <Button variant="ghost"> Ghost button</Button>
    <Button variant="link"> Link button</Button>

 </div>
);
}
