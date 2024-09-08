import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/twarkui/')({
  component: Index
})

export function Index(){
return (
 <div className='w-full h-full flex flex-col items-center justify-center'>
  <div>
    twark ui
  </div>
 </div>
);
}
