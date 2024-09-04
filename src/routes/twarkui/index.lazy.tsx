import { createLazyFileRoute, useSearch } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/twarkui/")({
  component: index,
});

export function index() {
  const searchParams = useSearch({
    from: "__root__",
  });
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center">
      <p className="p-[6%]">{JSON.stringify(searchParams?.primary, null, 2)}</p>
      <div>
        {searchParams?.primary?.value}
        {searchParams?.["primary-content"]?.value}
      </div>
    </div>
  );
}
