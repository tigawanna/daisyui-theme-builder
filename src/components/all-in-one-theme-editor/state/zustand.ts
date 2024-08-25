import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing
import { DaisyUIThemeSearchParmsTypes } from "@/helpers/daisyui/daisy-ui-schema";
import { defaultThemes } from "../utils/theme-default-values";


type KeyofTheme = keyof DaisyUIThemeSearchParmsTypes;

interface ThemeState {
  theme: DaisyUIThemeSearchParmsTypes;
  updateTheme: (item_key: KeyofTheme, new_item: DaisyUIThemeSearchParmsTypes[KeyofTheme]) => void;
}

export const useThemeStore = create<ThemeState>()(
  devtools(
    persist(
      (set, get) => ({
        theme: defaultThemes({}),
        updateTheme: (item_key: KeyofTheme, new_item: DaisyUIThemeSearchParmsTypes[KeyofTheme]) =>
          set((state) => ({ ...state, theme: { ...state.theme, [item_key]: new_item } })),
      }),
      {
        name: "theme-storage",
      }
    )
  )
);
