export const getColorValueFromTheme = (variable: string) => {
  const colorValues = getComputedStyle(document.documentElement).getPropertyValue(variable);
  return `oklch(${colorValues})`;
};

export const getThemeVariable = (variable: string) => {
  const colorValues = getComputedStyle(document.documentElement).getPropertyValue(variable);
  return colorValues;
};

export function getDaisyUiColors() {
  return [
    // primary
    {
      name: "primary",
      variable: "--p",
      value: getColorValueFromTheme("--p"),
    },
    {
      name: "primary-content",
      variable: "--pc",
      value: getColorValueFromTheme("--pc"),
    },
    // secondary
    {
      name: "secondary",
      variable: "--s",
      value: getColorValueFromTheme("--s"),
    },
    {
      name: "secondary-content",
      variable: "--sc",
      value: getColorValueFromTheme("--sc"),
    },
    // accent
    {
      name: "accent",
      variable: "--a",
      value: getColorValueFromTheme("--a"),
    },
    {
      name: "accent-content",
      variable: "--ac",
      value: getColorValueFromTheme("--ac"),
    },
    // neutral
    {
      name: "neutral",
      variable: "--n",
      value: getColorValueFromTheme("--n"),
    },
    {
      name: "neutral-content",
      variable: "--nc",
      value: getColorValueFromTheme("--nc"),
    },
    // base
    {
      name: "base-100",
      variable: "--b1",
      value: getColorValueFromTheme("--b1"),
    },
    {
      name: "base-200",
      variable: "--b2",
      value: getColorValueFromTheme("--b2"),
    },
    {
      name: "base-300",
      variable: "--b3",
      value: getColorValueFromTheme("--b3"),
    },
    {
      name: "base-content",
      variable: "--bc",
      value: getColorValueFromTheme("--bc"),
    },
    // info
    {
      name: "info",
      variable: "--in",
      value: getColorValueFromTheme("--in"),
    },
    {
      name: "info-content",
      variable: "--inc",
      value: getColorValueFromTheme("--inc"),
    },

    // success
    {
      name: "success",
      variable: "--su",
      value: getColorValueFromTheme("--su"),
    },
    {
      name: "success-content",
      variable: "--suc",
      value: getColorValueFromTheme("--suc"),
    },

    // warning
    {
      name: "warning",
      variable: "--wa",
      value: getColorValueFromTheme("--wa"),
    },
    {
      name: "warning-content",
      variable: "--wac",
      value: getColorValueFromTheme("--wac"),
    },

    // error
    {
      name: "error",
      variable: "--er",
      value: getColorValueFromTheme("--er"),
    },
    {
      name: "error-content",
      variable: "--erc",
      value: getColorValueFromTheme("--erc"),
    },
  ] as const;
}

export const daisyUiColors = getDaisyUiColors();

export const getTailwindBg = (
  color: (typeof daisyUiColors)[number]["name"]
): {
  bg: string;
  bg_muted: string;
  content: string;
} => {
  switch (color) {
    // primary
    case "primary":
      return { bg: "bg-primary", bg_muted: "bg-primary/20", content: "text-primary-content" };
    case "primary-content":
      return {
        bg: "bg-primary-content",
        bg_muted: "bg-primary-content/20",
        content: "text-primary",
      };

    // secondary
    case "secondary":
      return { bg: "bg-secondary", bg_muted: "bg-secondary/20", content: "text-secondary-content" };
    case "secondary-content":
      return {
        bg: "bg-secondary-content",
        bg_muted: "bg-secondary-content/20",
        content: "text-secondary",
      };

    // accent
    case "accent":
      return { bg: "bg-accent", bg_muted: "bg-accent/20", content: "text-accent-content" };
    case "accent-content":
      return { bg: "bg-accent-content", bg_muted: "bg-accent-content/20", content: "text-accent" };

    // neutral
    case "neutral":
      return { bg: "bg-neutral", bg_muted: "bg-neutral/20", content: "text-neutral-content" };
    case "neutral-content":
      return {
        bg: "bg-neutral-content",
        bg_muted: "bg-neutral-content/20",
        content: "text-neutral",
      };

    // base
    case "base-100":
      return { bg: "bg-base-100", bg_muted: "bg-base-100/20", content: "text-base-content" };
    case "base-200":
      return { bg: "bg-base-200", bg_muted: "bg-base-200/20", content: "text-base-content" };
    case "base-300":
      return { bg: "bg-base-300", bg_muted: "bg-base-300/20", content: "text-base-content" };
    case "base-content":
      return { bg: "bg-base-content", bg_muted: "bg-base-content/20", content: "text-base-100" };
    // info
    case "info":
      return { bg: "bg-info", bg_muted: "bg-info/20", content: "text-info-content" };
    case "info-content":
      return { bg: "bg-info-content", bg_muted: "bg-info-content/20", content: "text-info" };

    // success
    case "success":
      return { bg: "bg-success", bg_muted: "bg-success/20", content: "text-success-content" };
    case "success-content":
      return {
        bg: "bg-success-content",
        bg_muted: "bg-success-content/20",
        content: "text-success",
      };

    // warning
    case "warning":
      return { bg: "bg-warning", bg_muted: "bg-warning/20", content: "text-warning-content" };
    case "warning-content":
      return {
        bg: "bg-warning-content",
        bg_muted: "bg-warning-content/20",
        content: "text-warning",
      };

    // error
    case "error":
      return { bg: "bg-error", bg_muted: "bg-error/20", content: "text-error-content" };
    case "error-content":
      return { bg: "bg-error-content", bg_muted: "bg-error-content/20", content: "text-error" };

    default:
      return { bg: "bg-base-100", bg_muted: "bg-base-100/20", content: "text-base-content" };
  }
};

export type DaisyUIDefaulltColors = (typeof daisyUiColors)[number];

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
