import { createLazyFileRoute } from '@tanstack/react-router'
import { TwarkUIPageComponent } from './-components/TwarkUIPageComponent';
import { ToasterContainer } from "./-components/groups/ToasterDemo";


export const Route = createLazyFileRoute('/twarkui/')({
  component: Index
})

export function Index(){
return (
  <div className="flex h-full min-h-screen w-full flex-col items-center justify-center">
    <TwarkUIPageComponent />
    <ToasterContainer />
  </div>
);
}
