/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useSearch } from "@tanstack/react-router";

export function useDaisyUITheme() {
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
  return {
    searchParams,
    navigate,
    updateTheme,
    updateLockedTheme,
    updateThemeName,
    updateWholeTheme,
  };
}
