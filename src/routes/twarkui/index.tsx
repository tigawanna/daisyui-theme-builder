import { createFileRoute, useSearch } from '@tanstack/react-router'


export const Route = createFileRoute("/twarkui/")({
  component: index,
});



export function index(){
  const searchParams = useSearch({
    from:"__root__"
  })
return (
  <div className="w-full h-full flex flex-col items-center justify-center">
    <p className="p-[6%]">{JSON.stringify(searchParams.primary, null, 2)}</p>
    <div>
      {searchParams.primary?.primary.value}
      {searchParams.primary?.['primary-content']?.value}
    </div>
  </div>
);
}
