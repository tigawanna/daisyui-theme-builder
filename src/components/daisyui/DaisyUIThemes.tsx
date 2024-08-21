import { DaisyUIThemeSearchParmsTypes } from "@/helpers/daisyui/daisy-ui-schema";
import {

  DaisyUIABaseCurvesThemeCard,
  GenericColorCard,
} from "./DaisyUIColorThemeCards";



export function DaisyUIThemes({ theme }: { theme: DaisyUIThemeSearchParmsTypes }) {
  const {  curves } = theme;
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-[5%]">
      <div className="w-full h-full flex flex-wrap items-center justify-center gap-2 p-2">
        {theme.colors?.primary&&<GenericColorCard theme_key="primary" theme={theme.colors?.primary} />}
        {theme.colors?.["primary-content"]&&<GenericColorCard theme_key="primary-content" theme={theme.colors?.["primary-content"]} />}
        {/* <GenericColorCard theme_key="secondary" theme={theme.colors?.secondary} />
        <GenericColorCard theme_key="accent" theme={theme.colors?.accent} />
        <GenericColorCard theme_key="neutral" theme={theme.colors?.neutral} /> */}
      </div>
      <div className="w-full flex flex-wrap items-center justify-center gap-2 p-2">
        {/* {base && <BaseColorCard theme={base} />} */}
      </div>
      <div className="w-full h-full flex flex-wrap items-center justify-center gap-2 p-2">
        {/* <GenericColorCard theme_key="info" theme={theme.colors?.info} />
        <GenericColorCard theme_key="success" theme={theme.colors?.success} />
        <GenericColorCard theme_key="warning" theme={theme.colors?.warning} />
        <GenericColorCard theme_key="error" theme={theme.colors?.error} /> */}
      </div>
      <div className="w-full h-full flex flex-wrap items-center justify-center gap-2 p-2">
        {curves && <DaisyUIABaseCurvesThemeCard theme_group={curves} />}
      </div>
    </div>
  );
}
