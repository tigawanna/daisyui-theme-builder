import { useNavigate, useSearch } from "@tanstack/react-router";
import { GenericThemeState } from "../utils/types";

export function useUpdateTheme() {
  const navigate = useNavigate();
  const searchParams = useSearch({
    from: "__root__",
  });
  const updateTheme = (newTheme: Record<string, GenericThemeState>) => {
    navigate({
      search: {
        ...searchParams,
        ...newTheme,
      },
    });
  };
  return { updateTheme, searchParams, navigate };
}
