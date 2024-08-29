import { DaisyUIThemeEditor } from "@/components/all-in-one-theme-editor/DaisyUIThemeEditor";
import { useSearchParamsTheme } from "../components/all-in-one-theme-editor/utils/use-search-params-theme";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

interface HomePageProps {}

export function HomePage({}: HomePageProps) {
  const { updateLockedTheme, searchParams, updateTheme } =
    useSearchParamsTheme();

  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center gap-7 bg-uwu/10">
      {/* <DaisyUIThemeEditor
        theme={searchParams}
        saveChanges={(items_key, new_items) => {
          updateTheme(items_key as any, new_items);
        }}
        lockTheme={(items_key, new_items) => {
          updateLockedTheme(items_key as any, new_items);
        }}
      /> */}
    </div>
  );
}
