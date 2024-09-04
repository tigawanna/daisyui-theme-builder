import { useNavigate, useSearch } from "@tanstack/react-router";

export function useSearchParamsTheme() {
  const searchParams = useSearch({
    from: "__root__",
  });
  const navigate = useNavigate();
  function updateTheme(items_key: string, new_items: string) {
    navigate({
      search: (prev) => {
        return {
          ...prev,
          [items_key]: {
            ...prev[items_key as Exclude<keyof typeof prev, "theme_name">],
            value: new_items,
          },
        };
      },
    });
  }
  function updateWholeTheme(theme: Record<string, any>) {
    navigate({
      search: (prev) => {
        return {
          ...prev,
          ...theme,
        };
      },
    });
  }
  function updateThemeName(theme_name: string) {
    navigate({
      search: (prev) => {
        return {
          ...prev,
          "--theme-name": {
            // ...prev["--theme-name"],
            value: theme_name,
            name: "theme-name",
            variable: "data-theme",
          },
        };
      },
    });
  }
  function updateLockedTheme(items_key: string, is_locked: boolean) {
    navigate({
      search: (prev) => {
        return {
          ...prev,
          [items_key]: {
            ...prev[items_key as Exclude<keyof typeof prev, "theme_name">],
            locked: is_locked,
          },
        };
      },
    });
  }
  // oklchString: string; // oklch color string to be coverted into hsl from the editor
  // colorKey: string; // css variable key ;
  function updateEditTheme(colorKey: string, oklchString: string,bgColor:string) {
    navigate({
      search: (prev) => {
        return {
          ...prev,
          edit: {
            oklchString,
            colorKey,
            bgColor
          },
        };
      },
    });
    
  }
  return {
    searchParams,
    navigate,
    updateTheme,
    updateLockedTheme,
    updateThemeName,
    updateWholeTheme,
    updateEditTheme,
  };
}
