
import { oklch } from "culori";
import { DaisyUIThemeSearchParmsTypes } from "@/routes/-routes-utils/daisy-ui-schema";


const cutNumber = (number: number) => {
  try {
    if (number) {
      return +number.toFixed(6);
    }
    return 0;
  } catch (e) {
    // colorIsInvalid(number)
    return 0
  }
};

export function oklchColorObjectToString(input: { l: number; c: number; h: number }) {
  const { l, c, h } = input;
  return `${Number.parseFloat((cutNumber(l) * 100).toFixed(6))}% ${cutNumber(c)} ${cutNumber(h)}`;
}


export function updateCSSVariable({ key, value }: { key: string; value: string }) {
  const oklchValue = oklch(value);
  if(!oklchValue) return
  document.documentElement.style.setProperty(key, oklchColorObjectToString({
    c: oklchValue.c,
    l: oklchValue.l,
    h: oklchValue.h??0
  }));
}

export function loadCSSVariablesFromThemeObject({ theme }: { theme: DaisyUIThemeSearchParmsTypes }) {
  const { primary, secondary, accent, neutral, base, info, success, warning, error, curves } =
    theme;
  //  set html data-theme attribute
  if (theme.theme_name) {
    document.documentElement.setAttribute("data-theme", theme.theme_name);
  }
  if (base) {
    if (base?.["base-100"]) {
      updateCSSVariable({ key: base["base-100"].variable, value: base["base-100"].value });
    }

    if (base?.["base-200"]) {
      updateCSSVariable({ key: base["base-200"].variable, value: base["base-200"].value });
    }

    if (base?.["base-300"]) {
      updateCSSVariable({ key: base["base-300"].variable, value: base["base-300"].value });
    }

    if (base?.["base-content"]) {
      updateCSSVariable({ key: base["base-content"].variable, value: base["base-content"].value });
    }
  }

  if (primary) {
    if (primary?.primary) {
      updateCSSVariable({ key: primary.primary.variable, value: primary.primary.value });
    }
    if (primary?.["primary-content"]) {
      updateCSSVariable({
        key: primary["primary-content"].variable,
        value: primary["primary-content"].value,
      });
    }
  }
  if (secondary) {
    if (secondary?.secondary) {
      updateCSSVariable({ key: secondary.secondary.variable, value: secondary.secondary.value });
    }
    if (secondary?.["secondary-content"]) {
      updateCSSVariable({
        key: secondary["secondary-content"].variable,
        value: secondary["secondary-content"].value,
      });
    }
  }

  if (accent) {
    if (accent?.accent) {
      updateCSSVariable({ key: accent.accent.variable, value: accent.accent.value });
    }
    if (accent?.["accent-content"]) {
      updateCSSVariable({
        key: accent["accent-content"].variable,
        value: accent["accent-content"].value,
      });
    }
  }

  if (neutral) {
    if (neutral?.neutral) {
      updateCSSVariable({ key: neutral.neutral.variable, value: neutral.neutral.value });
    }
    if (neutral?.["neutral-content"]) {
      updateCSSVariable({
        key: neutral["neutral-content"].variable,
        value: neutral["neutral-content"].value,
      });
    }
  }

  if (info) {
    if (info?.info) {
      updateCSSVariable({ key: info.info.variable, value: info.info.value });
    }
    if (info?.["info-content"]) {
      updateCSSVariable({ key: info["info-content"].variable, value: info["info-content"].value });
    }
  }

  if (success) {
    if (success?.success) {
      updateCSSVariable({ key: success.success.variable, value: success.success.value });
    }
    if (success?.["success-content"]) {
      updateCSSVariable({
        key: success["success-content"].variable,
        value: success["success-content"].value,
      });
    }
  }

  if (warning) {
    if (warning?.warning) {
      updateCSSVariable({ key: warning.warning.variable, value: warning.warning.value });
    }
    if (warning?.["warning-content"]) {
      updateCSSVariable({
        key: warning["warning-content"].variable,
        value: warning["warning-content"].value,
      });
    }
  }

  if (error) {
    if (error?.error) {
      updateCSSVariable({ key: error.error.variable, value: error.error.value });
    }
    if (error?.["error-content"]) {
      updateCSSVariable({
        key: error["error-content"].variable,
        value: error["error-content"].value,
      });
    }
  }

  if (curves) {
    if (curves?.animation_btn) {
      updateCSSVariable({ key: curves.animation_btn.variable, value: curves.animation_btn.value });
    }
    if (curves?.animation_input) {
      updateCSSVariable({
        key: curves.animation_input.variable,
        value: curves.animation_input.value,
      });
    }
    if (curves?.tab_border) {
      updateCSSVariable({ key: curves.tab_border.variable, value: curves.tab_border.value });
    }
    if (curves?.tab_radius) {
      updateCSSVariable({ key: curves.tab_radius.variable, value: curves.tab_radius.value });
    }
    if (curves?.border_btn) {
      updateCSSVariable({ key: curves.border_btn.variable, value: curves.border_btn.value });
    }
    if (curves.rounded_box) {
      updateCSSVariable({ key: curves.rounded_box.variable, value: curves.rounded_box.value });
    }
    if (curves.rounded_badge) {
      updateCSSVariable({ key: curves.rounded_badge.variable, value: curves.rounded_badge.value });
    }
    if (curves.btn_focus_scale) {
      updateCSSVariable({
        key: curves.btn_focus_scale.variable,
        value: curves.btn_focus_scale.value,
      });
    }
  }
}


