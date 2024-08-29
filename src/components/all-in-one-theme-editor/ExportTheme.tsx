import { useEffect, useState } from "react";
import { oklchToHexString } from "./utils/color-converters";
import { DaisyUIThemeSearchParmsTypes } from "./utils/schema";
import { Check, Copy } from "lucide-react";

interface ExportThemeProps {
  theme: DaisyUIThemeSearchParmsTypes;
}

export function ExportTheme({ theme }: ExportThemeProps) {
  const colors_to_export = [
    theme?.primary?.value
      ? `'primary':${oklchToHexString(theme?.primary?.value)}`
      : undefined,
    theme?.["primary-content"]?.value
      ? `'primary-content':${oklchToHexString(theme?.["primary-content"]?.value)}`
      : undefined,

    theme?.secondary?.value
      ? `'secondary':${oklchToHexString(theme?.secondary?.value)}`
      : undefined,

    theme?.["secondary-content"]?.value
      ? `'secondary-content':${oklchToHexString(theme?.["secondary-content"]?.value)}`
      : undefined,
    theme?.accent?.value
      ? `'accent':${oklchToHexString(theme?.accent?.value)}`
      : undefined,
    theme?.["accent-content"]?.value
      ? `'accent-content':${oklchToHexString(theme?.["accent-content"]?.value)}`
      : undefined,
    theme?.neutral?.value
      ? `'neutral':${oklchToHexString(theme?.neutral?.value)}`
      : undefined,
    theme?.["neutral-content"]?.value
      ? `'neutral-content':${oklchToHexString(theme?.["neutral-content"]?.value)}`
      : undefined,
    theme?.["base-100"]?.value
      ? `'base-100':${oklchToHexString(theme?.["base-100"]?.value)}`
      : undefined,
    theme?.["base-200"]?.value
      ? `'base-200':${oklchToHexString(theme?.["base-200"]?.value)}`
      : undefined,
    theme?.["base-300"]?.value
      ? `'base-300':${oklchToHexString(theme?.["base-300"]?.value)}`
      : undefined,
    theme?.["base-content"]?.value
      ? `'base-content':${oklchToHexString(theme?.["base-content"]?.value)}`
      : undefined,
    theme?.["success"]?.value
      ? `'success':${oklchToHexString(theme?.["success"]?.value)}`
      : undefined,
    theme?.["error"]?.value
      ? `'error':${oklchToHexString(theme?.["error"]?.value)}`
      : undefined,
    theme?.["info"]?.value
      ? `'info':${oklchToHexString(theme?.["info"]?.value)}`
      : undefined,
    theme?.["warning"]?.value
      ? `'warning':${oklchToHexString(theme?.["warning"]?.value)}`
      : undefined,
    theme.animation_btn?.value
      ? `'--animation-btn' :${theme.animation_btn?.value}`
      : undefined,
    theme.animation_input?.value
      ? `'--animation-input' :${theme.animation_input?.value}`
      : undefined,

    theme.border_btn?.value
      ? `'--border-btn' :${theme.border_btn?.value}`
      : undefined,
    theme.btn_focus_scale?.value
      ? `'--btn-focus-scale' :${theme.btn_focus_scale?.value}`
      : undefined,
    theme.rounded_badge?.value
      ? `'--rounded-badge' :${theme.rounded_badge?.value}`
      : undefined,
    theme.rounded_box?.value
      ? `'--rounded-box' :${theme.rounded_box?.value}`
      : undefined,
    theme.rounded_btn?.value
      ? `'--rounded-btn' :${theme.rounded_btn?.value}`
      : undefined,
    theme.tab_border?.value
      ? `'--tab-border' :${theme.tab_border?.value}`
      : undefined,
    theme.tab_radius?.value
      ? `'--tab-radius' :${theme.tab_radius?.value}`
      : undefined,
  ].filter(Boolean);

  // const exportFormatedTring = `{ \n 'custom_theme': {\n ${colors_to_export.join("',\n")} \n}\n}`;
  const exportFormatedTring = ` ${colors_to_export.join("',\n")}`;
  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);
  const copied_styles = copied ? "animate-bounce text-success" : "";
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3">
      <button className="flex items-center justify-center pt-2">
        <Copy
          className={`h-6 w-6 ${copied_styles}`}
          onClick={() => {
            setCopied(true);
            copyToClipboard(exportFormatedTring);
          }}
        />
        <div className="ml-2">
          {copied ? (
            <div className="flex items-center justify-center gap-1 rounded-lg text-success">
              Copied <Check className="h-6 w-6" />
            </div>
          ) : (
            "Copy"
          )}
        </div>
      </button>
      <pre className="bg-base-300 p-5">
        <code>{exportFormatedTring}</code>
      </pre>
    </div>
  );
}




