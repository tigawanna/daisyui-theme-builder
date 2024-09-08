import { createLazyFileRoute } from '@tanstack/react-router'
import { TwarkUIPageComponent } from './-components/TwarkUIPageComponent';


export const Route = createLazyFileRoute('/twarkui/')({
  component: Index
})

export function Index(){
return (
 <div className='w-full h-full min-h-screen  flex flex-col items-center justify-center'>
  <TwarkUIPageComponent/>
 </div>
);
}
