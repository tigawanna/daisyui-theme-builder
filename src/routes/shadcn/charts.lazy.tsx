import { createLazyFileRoute } from '@tanstack/react-router'
import ChartsDemo from './-components/demos/ChartsDemo';

export const Route = createLazyFileRoute('/shadcn/charts')({
  component: Charts
})

export function Charts(){
return (
 <div className='w-full min-h-screen h-full flex flex-col items-center justify-center'>
    <ChartsDemo/>
 </div>
);
}
