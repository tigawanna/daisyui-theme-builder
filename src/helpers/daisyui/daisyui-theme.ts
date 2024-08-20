import { getColorValueFromTheme } from "./daisy-ui-culori-helpers";

export function getDaisyUiColors(dark = false) {
  return [
    // primary
    {
      name: "primary",
      variable: "--p",
      value: getColorValueFromTheme("--p", dark),
    },
    {
      name: "primary-content",
      variable: "--pc",
      value: getColorValueFromTheme("--pc", dark),
    },
    // secondary
    {
      name: "secondary",
      variable: "--s",
      value: getColorValueFromTheme("--s", dark),
    },
    {
      name: "secondary-content",
      variable: "--sc",
      value: getColorValueFromTheme("--sc", dark),
    },
    // accent
    {
      name: "accent",
      variable: "--a",
      value: getColorValueFromTheme("--a", dark),
    },
    {
      name: "accent-content",
      variable: "--ac",
      value: getColorValueFromTheme("--ac", dark),
    },
    // neutral
    {
      name: "neutral",
      variable: "--n",
      value: getColorValueFromTheme("--n", dark),
    },
    {
      name: "neutral-content",
      variable: "--nc",
      value: getColorValueFromTheme("--nc", dark),
    },
    // base
    {
      name: "base-100",
      variable: "--b1",
      value: getColorValueFromTheme("--b1", dark),
    },
    {
      name: "base-200",
      variable: "--b2",
      value: getColorValueFromTheme("--b2", dark),
    },
    {
      name: "base-300",
      variable: "--b3",
      value: getColorValueFromTheme("--b3", dark),
    },
    {
      name: "base-content",
      variable: "--bc",
      value: getColorValueFromTheme("--bc", dark),
    },
    // info
    {
      name: "info",
      variable: "--in",
      value: getColorValueFromTheme("--in", dark),
    },
    {
      name: "info-content",
      variable: "--inc",
      value: getColorValueFromTheme("--inc", dark),
    },

    // success
    {
      name: "success",
      variable: "--su",
      value: getColorValueFromTheme("--su", dark),
    },
    {
      name: "success-content",
      variable: "--suc",
      value: getColorValueFromTheme("--suc", dark),
    },

    // warning
    {
      name: "warning",
      variable: "--wa",
      value: getColorValueFromTheme("--wa", dark),
    },
    {
      name: "warning-content",
      variable: "--wac",
      value: getColorValueFromTheme("--wac", dark),
    },

    // error
    {
      name: "error",
      variable: "--er",
      value: getColorValueFromTheme("--er", dark),
    },
    {
      name: "error-content",
      variable: "--erc",
      value: getColorValueFromTheme("--erc", dark),
    },
  ] as const;
}

export const daisyUiColors = getDaisyUiColors();

export const getTailwindBg = (
  color: (typeof daisyUiColors)[number]["name"]
): {
  bg: string;
  content: string;
} => {
  switch (color) {
    // primary
    case "primary":
      return { bg: "bg-primary", content: "text-primary-content" };
    case "primary-content":
      return { bg: "bg-primary-content", content: "text-primary" };

    // secondary
    case "secondary":
      return { bg: "bg-secondary", content: "text-secondary-content" };
    case "secondary-content":
      return { bg: "bg-secondary-content", content: "text-secondary" };

    // accent
    case "accent":
      return { bg: "bg-accent", content: "text-accent-content" };
    case "accent-content":
      return { bg: "bg-accent-content", content: "text-accent" };

    // neutral
    case "neutral":
      return { bg: "bg-neutral", content: "text-neutral-content" };
    case "neutral-content":
      return { bg: "bg-neutral-content", content: "text-neutral" };

    // base
    case "base-100":
      return { bg: "bg-base-100", content: "text-base-content" };
    case "base-200":
      return { bg: "bg-base-200", content: "text-base-content" };
    case "base-300":
      return { bg: "bg-base-300", content: "text-base-content" };
    case "base-content":
      return { bg: "bg-base-content", content: "text-base-100" };
    // info
    case "info":
      return { bg: "bg-info", content: "text-info-content" };
    case "info-content":
      return { bg: "bg-info-content", content: "text-info" };

    // success
    case "success":
      return { bg: "bg-success", content: "text-success-content" };
    case "success-content":
      return { bg: "bg-success-content", content: "text-success" };

    // warning
    case "warning":
      return { bg: "bg-warning", content: "text-warning-content" };
    case "warning-content":
      return { bg: "bg-warning-content", content: "text-warning" };

    // error
    case "error":
      return { bg: "bg-error", content: "text-error-content" };
    case "error-content":
      return { bg: "bg-error-content", content: "text-error" };

    default:
      return { bg: "bg-base-100", content: "text-base-content" };
  }
};

export const base_daisyui_theme_names = [
  "primary",
  "secondary",
  "accent",
  "neutral",
  "base",
  "info",
  "success",
  "warning",
  "error",
] as const;

export type BaseDaisyUiThemeKeys = (typeof base_daisyui_theme_names)[number];
