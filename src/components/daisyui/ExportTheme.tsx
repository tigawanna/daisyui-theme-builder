import { oklchToHexString } from "@/helpers/color-converters";
import { DaisyUIThemeSearchParmsTypes } from "@/helpers/daisyui/daisy-ui-schema";
import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";
interface ExportThemeProps {
 theme: DaisyUIThemeSearchParmsTypes
}

export function ExportTheme({theme}:ExportThemeProps){

 const colors_to_export = [
   theme.colors?.primary?.value
     ? `'primary' :${oklchToHexString(theme.colors?.primary?.value)}`
     : undefined,
   theme.colors?.["primary-content"]?.value
     ? `'primary-content' :${oklchToHexString(theme.colors?.["primary-content"]?.value)}`
     : undefined,

   theme.colors?.secondary?.value
     ? `'secondary' :${oklchToHexString(theme.colors?.secondary?.value)}`
     : undefined,

   theme.colors?.["secondary-content"]?.value
     ? `'secondary-content' :${oklchToHexString(theme.colors?.["secondary-content"]?.value)}`
     : undefined,
    theme.colors?.accent?.value
     ? `'accent' :${oklchToHexString(theme.colors?.accent?.value)}`
     : undefined,
     theme.colors?.["accent-content"]?.value ?
     `'accent-content' :${oklchToHexString(theme.colors?.["accent-content"]?.value)}`
     : undefined,
    theme.colors?.neutral?.value
     ? `'neutral' :${oklchToHexString(theme.colors?.neutral?.value)}`
     : undefined,
     theme.colors?.["neutral-content"]?.value ?
     `'neutral-content' :${oklchToHexString(theme.colors?.["neutral-content"]?.value)}`
     : undefined,
    theme.colors?.["base-100"]?.value ?
     `'base-100' :${oklchToHexString(theme.colors?.["base-100"]?.value)}`
     : undefined,
    theme.colors?.["base-200"]?.value ?
     `'base-200' :${oklchToHexString(theme.colors?.["base-200"]?.value)}`
     : undefined,
    theme.colors?.["base-300"]?.value ?
     `'base-300' :${oklchToHexString(theme.colors?.["base-300"]?.value)}`
     : undefined,
    theme.colors?.["base-content"]?.value ?
     `'base-content' :${oklchToHexString(theme.colors?.["base-content"]?.value)}`
     : undefined,
    theme.colors?.["success"]?.value ?
     `'success' :${oklchToHexString(theme.colors?.["success"]?.value)}`
     : undefined,
    theme.colors?.["error"]?.value ?
     `'error' :${oklchToHexString(theme.colors?.["error"]?.value)}`
     : undefined,
    theme.colors?.["info"]?.value ?
     `'info' :${oklchToHexString(theme.colors?.["info"]?.value)}`
     : undefined,
    theme.colors?.["warning"]?.value ?
     `'warning' :${oklchToHexString(theme.colors?.["warning"]?.value)}`
     : undefined,
    theme.curves?.animation_btn?.value ?
     `'--animation-btn' :${theme.curves?.animation_btn?.value}`
     : undefined,
    theme.curves?.animation_input?.value ?
     `'--animation-input' :${theme.curves?.animation_input?.value}`
     : undefined,

    theme.curves?.border_btn?.value ?
     `'--border-btn' :${theme.curves?.border_btn?.value}`
     : undefined,
    theme.curves?.btn_focus_scale?.value ?
     `'--btn-focus-scale' :${theme.curves?.btn_focus_scale?.value}`
     : undefined,
    theme.curves?.rounded_badge?.value ?
     `'--rounded-badge' :${theme.curves?.rounded_badge?.value}`
     : undefined,
    theme.curves?.rounded_box?.value ?
     `'--rounded-box' :${theme.curves?.rounded_box?.value}`
     : undefined,
    theme.curves?.rounded_btn?.value ?
     `'--rounded-btn' :${theme.curves?.rounded_btn?.value}`
     : undefined,
    theme.curves?.tab_border?.value ?
     `'--tab-border' :${theme.curves?.tab_border?.value}`
     : undefined,
    theme.curves?.tab_radius?.value ?
     `'--tab-radius' :${theme.curves?.tab_radius?.value}`
     : undefined,
].filter(Boolean)

const exportFormatedTring = ` ${colors_to_export.join("',\n")}`;
const [prettyJson,setPrettyJson] = useState("");
useEffect(() => {
    codeToHtml(exportFormatedTring, {
      lang: "typescript",
      theme: "github-dark-high-contrast",
    }).then((res) => setPrettyJson(res))
    .catch((err) => console.log(err))
},[])

return (
  <div className="w-full h-full flex flex-col items-center justify-center p-5">
    <div contentEditable className="w-full h-full" dangerouslySetInnerHTML={{ __html: prettyJson }}></div>
  </div>
);
}
