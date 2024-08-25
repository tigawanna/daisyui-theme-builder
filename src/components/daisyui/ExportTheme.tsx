import { oklchToHexString } from "@/helpers/color-converters";
import { DaisyUIThemeSearchParmsTypes } from "@/helpers/daisyui/daisy-ui-schema";
import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";
interface ExportThemeProps {
 theme: DaisyUIThemeSearchParmsTypes
}

export function ExportTheme({theme}:ExportThemeProps){

 const colors_to_export = [
   theme
   ?.primary?.value
     ? `'primary' :${oklchToHexString(theme
      ?.primary?.value)}`
     : undefined,
   theme
   ?.["primary-content"]?.value
     ? `'primary-content' :${oklchToHexString(theme
      ?.["primary-content"]?.value)}`
     : undefined,

   theme
   ?.secondary?.value
     ? `'secondary' :${oklchToHexString(theme
      ?.secondary?.value)}`
     : undefined,

   theme
   ?.["secondary-content"]?.value
     ? `'secondary-content' :${oklchToHexString(theme
      ?.["secondary-content"]?.value)}`
     : undefined,
    theme
    ?.accent?.value
     ? `'accent' :${oklchToHexString(theme
      ?.accent?.value)}`
     : undefined,
     theme
     ?.["accent-content"]?.value ?
     `'accent-content' :${oklchToHexString(theme
      ?.["accent-content"]?.value)}`
     : undefined,
    theme
    ?.neutral?.value
     ? `'neutral' :${oklchToHexString(theme
      ?.neutral?.value)}`
     : undefined,
     theme
     ?.["neutral-content"]?.value ?
     `'neutral-content' :${oklchToHexString(theme
      ?.["neutral-content"]?.value)}`
     : undefined,
    theme
    ?.["base-100"]?.value ?
     `'base-100' :${oklchToHexString(theme
      ?.["base-100"]?.value)}`
     : undefined,
    theme
    ?.["base-200"]?.value ?
     `'base-200' :${oklchToHexString(theme
      ?.["base-200"]?.value)}`
     : undefined,
    theme
    ?.["base-300"]?.value ?
     `'base-300' :${oklchToHexString(theme
      ?.["base-300"]?.value)}`
     : undefined,
    theme
    ?.["base-content"]?.value ?
     `'base-content' :${oklchToHexString(theme
      ?.["base-content"]?.value)}`
     : undefined,
    theme
    ?.["success"]?.value ?
     `'success' :${oklchToHexString(theme
      ?.["success"]?.value)}`
     : undefined,
    theme
    ?.["error"]?.value ?
     `'error' :${oklchToHexString(theme
      ?.["error"]?.value)}`
     : undefined,
    theme
    ?.["info"]?.value ?
     `'info' :${oklchToHexString(theme
      ?.["info"]?.value)}`
     : undefined,
    theme
    ?.["warning"]?.value ?
     `'warning' :${oklchToHexString(theme
      ?.["warning"]?.value)}`
     : undefined,
    theme
    .animation_btn?.value ?
     `'--animation-btn' :${theme
     .animation_btn?.value}`
     : undefined,
    theme
    .animation_input?.value ?
     `'--animation-input' :${theme
     .animation_input?.value}`
     : undefined,

    theme
    .border_btn?.value ?
     `'--border-btn' :${theme
     .border_btn?.value}`
     : undefined,
    theme
    .btn_focus_scale?.value ?
     `'--btn-focus-scale' :${theme
     .btn_focus_scale?.value}`
     : undefined,
    theme
    .rounded_badge?.value ?
     `'--rounded-badge' :${theme
     .rounded_badge?.value}`
     : undefined,
    theme
    .rounded_box?.value ?
     `'--rounded-box' :${theme
     .rounded_box?.value}`
     : undefined,
    theme
    .rounded_btn?.value ?
     `'--rounded-btn' :${theme
     .rounded_btn?.value}`
     : undefined,
    theme
    .tab_border?.value ?
     `'--tab-border' :${theme
     .tab_border?.value}`
     : undefined,
    theme
    .tab_radius?.value ?
     `'--tab-radius' :${theme
     .tab_radius?.value}`
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
