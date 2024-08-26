import { useNavigate, useSearch } from "@tanstack/react-router";

export function useSearchParamsTheme() {
  const searchParams = useSearch({
    from: "__root__",
  });
  const navigate = useNavigate();
  function updateTheme(items_key: string,new_items: string) {
    navigate({
      search:(prev)=>{
        return {
          ...prev,
          [items_key]: {
            ...prev[items_key as Exclude<keyof typeof prev, "theme_name">],
            value: new_items,
          },
        };
      }
    })
  }
  return { searchParams, navigate, updateTheme };
}
