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
  function updateThemeName(theme_name: string) {
    console.log("updating theme_name === ",theme_name)
    navigate({
      search:(prev)=>{
        return {
          ...prev,
          theme_name,
        };
      }
    })
  }
  function updateLockedTheme(items_key: string,is_locked: boolean) {
    console.log("locking === ",items_key,is_locked)
    navigate({
      search:(prev)=>{
        return {
          ...prev,
          [items_key]: {
            ...prev[items_key as Exclude<keyof typeof prev, "theme_name">],
            locked: is_locked,
          },
        };
      }
    })
  }
  return { searchParams, navigate, updateTheme, updateLockedTheme,updateThemeName };
}
