import { useNavigate, useSearch } from "@tanstack/react-router";
import type { GenericThemeState } from "./types";
import { DaisyUIThemeSearchParmsTypes } from "@/helpers/daisyui/daisy-ui-schema";
import { getColorValueFromTheme, getThemeVariable } from "./daisy-ui-culori-helpers";
import { useState } from "react";

function loadFormSearchParamsIfLocked(theme?: {
  name: string;
  value: string;
  variable: string;
  locked?: boolean | undefined;
}) {
  if(!theme) return ""
  const {value, variable, locked } = theme
  if (!locked) {
    const value_from_css_ariable =  getColorValueFromTheme(variable);
    return value_from_css_ariable
  }
  return value??""
}

export function defaultThemes({
  theme,
}: {
  theme?: DaisyUIThemeSearchParmsTypes;
}): DaisyUIThemeSearchParmsTypes {
  return {

      accent: {
        name: "accent",
        variable: "--a",
        value:loadFormSearchParamsIfLocked(theme?.accent),
        locked: theme?.accent?.locked ?? false,
      },
      "accent-content": {
        name: "accent-content",
        variable: "--ac",
        value: theme?.["accent-content"]?.value ?? getColorValueFromTheme("--ac") ?? "#fff",
        locked: theme?.["accent-content"]?.locked ?? false,
      },

      "base-100": {
        name: "base-100",
        variable: "--b1",
        value: theme?.["base-100"]?.value ?? getColorValueFromTheme("--b1") ?? "#f8fafc",
        locked: theme?.["base-100"]?.locked ?? false,
      },
      "base-200": {
        name: "base-200",
        variable: "--b2",
        value: theme?.["base-200"]?.value ?? getColorValueFromTheme("--b2") ?? "#f1f5f9",
        locked: theme?.["base-200"]?.locked ?? false,
      },
      "base-300": {
        name: "base-300",
        variable: "--b3",
        value: theme?.["base-300"]?.value ?? getColorValueFromTheme("--b3") ?? "#e2e8f0",
        locked: theme?.["base-300"]?.locked ?? false,
      },
      "base-content": {
        name: "base-content",
        variable: "--bc",
        value:
          theme?.["base-content"]?.value ?? getColorValueFromTheme("--bc") ?? "#1f2937",
        locked: theme?.["base-content"]?.locked ?? false,
      },

      error: {
        name: "error",
        variable: "--er",
        value: theme?.error?.value ?? getColorValueFromTheme("--er") ?? "#ef4444",
        locked: theme?.error?.locked ?? false,
      },
      "error-content": {
        name: "error-content",
        variable: "--erc",
        value: theme?.["error-content"]?.value ?? getColorValueFromTheme("--erc") ?? "#fff",
        locked: theme?.["error-content"]?.locked ?? false,
      },

      info: {
        name: "info",
        variable: "--in",
        value: theme?.info?.value ?? getColorValueFromTheme("--in") ?? "#3b82f6",
        locked: theme?.info?.locked ?? false,
      },
      "info-content": {
        name: "info-content",
        variable: "--inc",
        value: theme?.["info-content"]?.value ?? getColorValueFromTheme("--inc") ?? "#fff",
        locked: theme?.["info-content"]?.locked ?? false,
      },

      neutral: {
        name: "neutral",
        variable: "--n",
        value: theme?.neutral?.value ?? getColorValueFromTheme("--n") ?? "#64748b",
        locked: theme?.neutral?.locked ?? false,
      },
      "neutral-content": {
        name: "neutral-content",
        variable: "--nc",
        value:
          theme?.["neutral-content"]?.value ?? getColorValueFromTheme("--nc") ?? "#fff",
        locked: theme?.["neutral-content"]?.locked ?? false,
      },

      primary: {
        name: "primary",
        variable: "--p",
        value: theme?.primary?.value ?? getColorValueFromTheme("--p") ?? "#22d3ee",
        locked: theme?.primary?.locked ?? false,
      },
      "primary-content": {
        name: "primary-content",
        variable: "--pc",
        value: getColorValueFromTheme("--pc") ?? "#fff",
        locked: theme?.["primary-content"]?.locked ?? false,
      },

      success: {
        name: "success",
        variable: "--su",
        value: theme?.success?.value ?? getColorValueFromTheme("--su") ?? "#10b981",
        locked: theme?.success?.locked ?? false,
      },
      "success-content": {
        name: "success-content",
        variable: "--suc",
        value:
          theme?.["success-content"]?.value ?? getColorValueFromTheme("--suc") ?? "#fff",
        locked: theme?.["success-content"]?.locked ?? false,
      },

      secondary: {
        name: "secondary",
        variable: "--s",
        value: theme?.secondary?.value ?? getColorValueFromTheme("--s") ?? "#64748b",
        locked: theme?.secondary?.locked ?? false,
      },
      "secondary-content": {
        name: "secondary-content",
        variable: "--sc",
        value:
          theme?.["secondary-content"]?.value ?? getColorValueFromTheme("--sc") ?? "#fff",
        locked: theme?.["secondary-content"]?.locked ?? false,
      },

      warning: {
        name: "warning",
        variable: "--wa",
        value: theme?.warning?.value ?? getColorValueFromTheme("--wa") ?? "#f59e0b",
        locked: theme?.warning?.locked ?? false,
      },
      "warning-content": {
        name: "warning-content",
        variable: "--wac",
        value:
          theme?.["warning-content"]?.value ?? getColorValueFromTheme("--wac") ?? "#fff",
        locked: theme?.["warning-content"]?.locked ?? false,
      },

      rounded_box: {
        name: "rounded-box",
        variable: "--rounded-box",
        value: theme?.rounded_box?.value ?? getThemeVariable("--rounded-box"),
        locked: theme?.rounded_box?.locked ?? false,
      },
      rounded_btn: {
        name: "rounded-btn",
        variable: "--rounded-btn",
        value: theme?.rounded_btn?.value ?? getThemeVariable("--rounded-btn"),
        locked: theme?.rounded_btn?.locked ?? false,
      },
      rounded_badge: {
        name: "rounded-badge",
        variable: "--rounded-badge",
        value: theme?.rounded_badge?.value ?? getThemeVariable("--rounded-badge"),
        locked: theme?.rounded_badge?.locked ?? false,
      },
      animation_btn: {
        name: "animation-btn",
        variable: "--animation-btn",
        value: theme?.animation_btn?.value ?? getThemeVariable("--animation-btn"),
        locked: theme?.animation_btn?.locked ?? false,
      },
      animation_input: {
        name: "animation-input",
        variable: "--animation-input",
        value: theme?.animation_input?.value ?? getThemeVariable("--animation-input"),
        locked: theme?.animation_input?.locked ?? false,
      },
      border_btn: {
        name: "border-btn",
        variable: "--border-btn",
        value: theme?.border_btn?.value ?? getThemeVariable("--border-btn"),
        locked: theme?.border_btn?.locked ?? false,
      },
      tab_border: {
        name: "tab-border",
        variable: "--tab-border",
        value: theme?.tab_border?.value ?? getThemeVariable("--tab-border"),
        locked: theme?.tab_border?.locked ?? false,
      },
      tab_radius: {
        name: "tab-radius",
        variable: "--tab-radius",
        value: theme?.tab_radius?.value ?? getThemeVariable("--tab-radius"),
        locked: theme?.tab_radius?.locked ?? false,
      },

      btn_focus_scale: {
        name: "btn-focus-scale",
        variable: "--btn-focus-scale",
        value: theme?.btn_focus_scale?.value ?? getThemeVariable("--btn-focus-scale"),
        locked: theme?.btn_focus_scale?.locked ?? false,
      },

    theme_name: theme?.theme_name ?? "custom-light",
  };
}

export function useUpdateTheme() {
  const navigate = useNavigate();
  const searchParams = useSearch({
    from: "/",
  });
  const updateTheme = (newTheme: Record<string, GenericThemeState>) => {
    navigate({
      search: {
        ...searchParams,
        ...newTheme,
      },
    });
  };
  return { updateTheme };
}

export function useThemeWithDefaults() {
  const themeSearchParams = useSearch({
    from: "__root__",
  });
  const [themes] = useState(defaultThemes({ theme: themeSearchParams }));
  // useEffect(() => {
  //   const mutationObserver = new MutationObserver(() => {
  //     setThems(defaultThemes({}));
  //   });
  //   mutationObserver.observe(document.documentElement, {
  //     attributes: true,
  //     attributeFilter: ["data-theme"],
  //   });
  //   return () => {
  //     mutationObserver.disconnect();
  //   };
  // }, []);

  return themes;
}
