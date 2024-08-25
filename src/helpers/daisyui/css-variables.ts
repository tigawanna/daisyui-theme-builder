
import { oklch } from "culori";
import { DaisyUIThemeSearchParmsTypes } from "@/helpers/daisyui/daisy-ui-schema";
import { isThemeNotNull } from "./default-values";


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

// export function loadCSSVariablesFromThemeObject({
//   theme,
// }: {
//   theme: DaisyUIThemeSearchParmsTypes;
// }) {
//   const { colors, curves } = theme;

//   //  set html data-theme attribute
//   if (theme.theme_name) {
//     document.documentElement.setAttribute("data-theme", theme.theme_name);
//   }
//   if (colors) {
//     if (theme?.["base-100"] && !theme?.["base-100"]?.locked) {
//       updateCSSVariable({ key: theme?.["base-100"].variable, value: theme?.["base-100"].value });
//     }

//     if (theme?.["base-200"] && !theme?.["base-200"]?.locked) {
//       updateCSSVariable({ key: theme?.["base-200"].variable, value: theme?.["base-200"].value });
//     }

//     if (theme?.["base-300"] && !theme?.["base-300"]?.locked) {
//       updateCSSVariable({ key: theme?.["base-300"].variable, value: theme?.["base-300"].value });
//     }

//     if (theme?.["base-content"] && !theme?.["base-content"]?.locked) {
//       updateCSSVariable({
//         key: theme?.["base-content"].variable,
//         value: theme?.["base-content"].value,
//       });
//     }

//     if (theme?.primary && !theme?.primary?.locked) {
//       updateCSSVariable({ key: theme?.primary.variable, value: theme?.primary.value });
//     }
//     if (theme?.["primary-content"] && !theme?.["primary-content"]?.locked) {
//       updateCSSVariable({
//         key: theme?.["primary-content"].variable,
//         value: theme?.["primary-content"].value,
//       });
//     }

//     if (theme?.secondary && !theme?.secondary?.locked) {
//       updateCSSVariable({ key: theme?.secondary.variable, value: theme?.secondary.value });
//     }
//     if (theme?.["secondary-content"] && !theme?.["secondary-content"]?.locked) {
//       updateCSSVariable({
//         key: theme?.["secondary-content"].variable,
//         value: theme?.["secondary-content"].value,
//       });
//     }

//     if (theme?.accent && !theme?.accent?.locked) {
//       updateCSSVariable({ key: theme?.accent.variable, value: theme?.accent.value });
//     }
//     if (theme?.["accent-content"] && !theme?.["accent-content"]?.locked) {
//       updateCSSVariable({
//         key: theme?.["accent-content"].variable,
//         value: theme?.["accent-content"].value,
//       });
//     }

//     if (theme?.neutral && !theme?.neutral?.locked) {
//       updateCSSVariable({ key: theme?.neutral.variable, value: theme?.neutral.value });
//     }
//     if (theme?.["neutral-content"] && !theme?.["neutral-content"]?.locked) {
//       updateCSSVariable({
//         key: theme?.["neutral-content"].variable,
//         value: theme?.["neutral-content"].value,
//       });
//     }

//     if (theme?.info && !theme?.info?.locked) {
//       updateCSSVariable({ key: theme?.info.variable, value: theme?.info.value });
//     }
//     if (theme?.["info-content"] && !theme?.["info-content"]?.locked) {
//       updateCSSVariable({
//         key: theme?.["info-content"].variable,
//         value: theme?.["info-content"].value,
//       });
//     }

//     if (theme?.success && !theme?.success?.locked) {
//       updateCSSVariable({ key: theme?.success.variable, value: theme?.success.value });
//     }
//     if (theme?.["success-content"] && !theme?.["success-content"]?.locked) {
//       updateCSSVariable({
//         key: theme?.["success-content"].variable,
//         value: theme?.["success-content"].value,
//       });
//     }

//     if (theme?.warning && !theme?.warning?.locked) {
//       updateCSSVariable({ key: theme?.warning.variable, value: theme?.warning.value });
//     }
//     if (theme?.["warning-content"] && !theme?.["warning-content"]?.locked) {
//       updateCSSVariable({
//         key: theme?.["warning-content"].variable,
//         value: theme?.["warning-content"].value,
//       });
//     }

//     if (theme?.error && !theme?.error?.locked) {
//       updateCSSVariable({ key: theme?.error.variable, value: theme?.error.value });
//     }
//     if (theme?.["error-content"] && !theme?.["error-content"]?.locked) {
//       updateCSSVariable({
//         key: theme?.["error-content"].variable,
//         value: theme?.["error-content"].value,
//       });
//     }
//   }

//   if (curves) {
//     if (theme?.animation_btn && !theme?.animation_btn?.locked) {
//       updateCSSVariable({ key: theme?.animation_btn.variable, value: theme?.animation_btn.value });
//     }
//     if (theme?.animation_input && !theme?.animation_input?.locked) {
//       updateCSSVariable({
//         key: theme?.animation_input.variable,
//         value: theme?.animation_input.value,
//       });
//     }
//     if (theme?.tab_border && !theme?.tab_border?.locked) {
//       updateCSSVariable({ key: theme?.tab_border.variable, value: theme?.tab_border.value });
//     }
//     if (theme?.tab_radius && !theme?.tab_radius?.locked) {
//       updateCSSVariable({ key: theme?.tab_radius.variable, value: theme?.tab_radius.value });
//     }
//     if (theme?.border_btn && !theme?.border_btn?.locked) {
//       updateCSSVariable({ key: theme?.border_btn.variable, value: theme?.border_btn.value });
//     }
//     if (theme?.rounded_box && !theme?.rounded_box?.locked) {
//       updateCSSVariable({ key: theme?.rounded_box.variable, value: theme?.rounded_box.value });
//     }
//     if (theme?.rounded_badge && !theme?.rounded_badge?.locked) {
//       updateCSSVariable({ key: theme?.rounded_badge.variable, value: theme?.rounded_badge.value });
//     }
//     if (theme?.btn_focus_scale && !theme?.btn_focus_scale?.locked) {
//       updateCSSVariable({
//         key: theme?.btn_focus_scale.variable,
//         value: theme?.btn_focus_scale.value,
//       });
//     }
//   }
// }

export function loadCSSVariablesFromThemeObject({ theme }: { theme: DaisyUIThemeSearchParmsTypes }) {
  if(!isThemeNotNull(theme)){
    return
  }
  
    //  set html data-theme attribute
  if (theme.theme_name) {
    document.documentElement.setAttribute("data-theme", theme.theme_name);
  }

  // #region colors
    if (theme?.["base-100"]) {
      updateCSSVariable({ key: theme?.["base-100"].variable, value: theme?.["base-100"].value });
    }

    if (theme?.["base-200"]) {
      updateCSSVariable({ key: theme?.["base-200"].variable, value: theme?.["base-200"].value });
    }

    if (theme?.["base-300"]) {
      updateCSSVariable({ key: theme?.["base-300"].variable, value: theme?.["base-300"].value });
    }

    if (theme?.["base-content"]) {
      updateCSSVariable({ key: theme?.["base-content"].variable, value: theme?.["base-content"].value });
    }
  


    if (theme?.primary&&!theme?.primary?.locked) {
      updateCSSVariable({ key: theme?.primary.variable, value: theme?.primary.value });
    }
    if (theme?.["primary-content"]&&!theme?.["primary-content"]?.locked) {
      updateCSSVariable({
        key: theme?.["primary-content"].variable,
        value: theme?.["primary-content"].value,
      });
    }
  

    if (theme?.secondary) {
      updateCSSVariable({ key: theme?.secondary.variable, value: theme?.secondary.value });
    }
    if (theme?.["secondary-content"]) {
      updateCSSVariable({
        key: theme?.["secondary-content"].variable,
        value: theme?.["secondary-content"].value,
      });
    }
  


    if (theme?.accent) {
      updateCSSVariable({ key: theme?.accent.variable, value: theme?.accent.value });
    }
    if (theme?.["accent-content"]) {
      updateCSSVariable({
        key: theme?.["accent-content"].variable,
        value: theme?.["accent-content"].value,
      });
    }
  


    if (theme?.neutral) {
      updateCSSVariable({ key: theme?.neutral.variable, value: theme?.neutral.value });
    }
    if (theme?.["neutral-content"]) {
      updateCSSVariable({
        key: theme?.["neutral-content"].variable,
        value: theme?.["neutral-content"].value,
      });
    }
  


    if (theme?.info) {
      updateCSSVariable({ key: theme?.info.variable, value: theme?.info.value });
    }
    if (theme?.["info-content"]) {
      updateCSSVariable({ key: theme?.["info-content"].variable, value: theme?.["info-content"].value });
    }
  


    if (theme?.success) {
      updateCSSVariable({ key: theme?.success.variable, value: theme?.success.value });
    }
    if (theme?.["success-content"]) {
      updateCSSVariable({
        key: theme?.["success-content"].variable,
        value: theme?.["success-content"].value,
      });
    }
  


    if (theme?.warning) {
      updateCSSVariable({ key: theme?.warning.variable, value: theme?.warning.value });
    }
    if (theme?.["warning-content"]) {
      updateCSSVariable({
        key: theme?.["warning-content"].variable,
        value: theme?.["warning-content"].value,
      });
    }
  

    if (theme?.error) {
      updateCSSVariable({ key: theme?.error.variable, value: theme?.error.value });
    }
    if (theme?.["error-content"]) {
      updateCSSVariable({
        key: theme?.["error-content"].variable,
        value: theme?.["error-content"].value,
      });
    }
  // #endregion

    //  #region curves

    if (theme?.animation_btn) {
      updateCSSVariable({ key: theme?.animation_btn.variable, value: theme?.animation_btn.value });
    }
    if (theme?.animation_input) {
      updateCSSVariable({
        key: theme?.animation_input.variable,
        value: theme?.animation_input.value,
      });
    }
    if (theme?.tab_border) {
      updateCSSVariable({ key: theme?.tab_border.variable, value: theme?.tab_border.value });
    }
    if (theme?.tab_radius) {
      updateCSSVariable({ key: theme?.tab_radius.variable, value: theme?.tab_radius.value });
    }
    if (theme?.border_btn) {
      updateCSSVariable({ key: theme?.border_btn.variable, value: theme?.border_btn.value });
    }
    if (theme?.rounded_box) {
      updateCSSVariable({ key: theme?.rounded_box.variable, value: theme?.rounded_box.value });
    }
    if (theme?.rounded_badge) {
      updateCSSVariable({ key: theme?.rounded_badge.variable, value: theme?.rounded_badge.value });
    }
    if (theme?.btn_focus_scale) {
      updateCSSVariable({
        key: theme?.btn_focus_scale.variable,
        value: theme?.btn_focus_scale.value,
      });
    }
    // #endregion
  }



