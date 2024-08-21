
import { oklch } from "culori";
import { DaisyUIThemeSearchParmsTypes } from "@/helpers/daisyui/daisy-ui-schema";


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
  const { colors, curves } = theme;

  //  set html data-theme attribute
  if (theme.theme_name) {
    document.documentElement.setAttribute("data-theme", theme.theme_name);
  }
  if(colors){
  
    if (colors?.["base-100"]) {
      updateCSSVariable({ key: colors["base-100"].variable, value: colors["base-100"].value });
    }

    if (colors?.["base-200"]) {
      updateCSSVariable({ key: colors["base-200"].variable, value: colors["base-200"].value });
    }

    if (colors?.["base-300"]) {
      updateCSSVariable({ key: colors["base-300"].variable, value: colors["base-300"].value });
    }

    if (colors?.["base-content"]) {
      updateCSSVariable({ key: colors["base-content"].variable, value: colors["base-content"].value });
    }
  


    if (colors?.primary) {
      updateCSSVariable({ key: colors.primary.variable, value: colors.primary.value });
    }
    if (colors?.["primary-content"]) {
      updateCSSVariable({
        key: colors["primary-content"].variable,
        value: colors["primary-content"].value,
      });
    }
  

    if (colors.secondary) {
      updateCSSVariable({ key: colors.secondary.variable, value: colors.secondary.value });
    }
    if (colors?.["secondary-content"]) {
      updateCSSVariable({
        key: colors["secondary-content"].variable,
        value: colors["secondary-content"].value,
      });
    }
  


    if (colors?.accent) {
      updateCSSVariable({ key: colors.accent.variable, value: colors.accent.value });
    }
    if (colors?.["accent-content"]) {
      updateCSSVariable({
        key: colors["accent-content"].variable,
        value: colors["accent-content"].value,
      });
    }
  


    if (colors?.neutral) {
      updateCSSVariable({ key: colors.neutral.variable, value: colors.neutral.value });
    }
    if (colors?.["neutral-content"]) {
      updateCSSVariable({
        key: colors["neutral-content"].variable,
        value: colors["neutral-content"].value,
      });
    }
  


    if (colors?.info) {
      updateCSSVariable({ key: colors.info.variable, value: colors.info.value });
    }
    if (colors?.["info-content"]) {
      updateCSSVariable({ key: colors["info-content"].variable, value: colors["info-content"].value });
    }
  


    if (colors?.success) {
      updateCSSVariable({ key: colors.success.variable, value: colors.success.value });
    }
    if (colors?.["success-content"]) {
      updateCSSVariable({
        key: colors["success-content"].variable,
        value: colors["success-content"].value,
      });
    }
  


    if (colors?.warning) {
      updateCSSVariable({ key: colors.warning.variable, value: colors.warning.value });
    }
    if (colors?.["warning-content"]) {
      updateCSSVariable({
        key: colors["warning-content"].variable,
        value: colors["warning-content"].value,
      });
    }
  

    if (colors?.error) {
      updateCSSVariable({ key: colors.error.variable, value: colors.error.value });
    }
    if (colors?.["error-content"]) {
      updateCSSVariable({
        key: colors["error-content"].variable,
        value: colors["error-content"].value,
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


