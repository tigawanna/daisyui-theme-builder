import { useNavigate, useSearch } from "@tanstack/react-router";

export function useSearchParamsTheme() {
  const searchParams = useSearch({
    from: "__root__",
  });
  const navigate = useNavigate();
  return { searchParams, navigate };
}
