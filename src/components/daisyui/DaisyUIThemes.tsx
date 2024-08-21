import { DaisyUIThemeSearchParmsTypes } from "@/helpers/daisyui/daisy-ui-schema";
import {

  DaisyUIABaseCurvesThemeCard,
} from "./DaisyUIColorThemeCards";

import { BaseColorCard } from "./theme-cards/BaseColorCard";
import { GenericColorCard } from "./theme-cards/GenericColorCard";


export function DaisyUIThemes({ theme }: { theme: DaisyUIThemeSearchParmsTypes }) {
  const { base ,curves } = theme;
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-[5%]">
      <div className="w-full h-full flex flex-wrap items-center justify-center gap-2 p-2">
        <GenericColorCard theme_key="primary" theme={theme} />
        <GenericColorCard theme_key="secondary" theme={theme} />
        <GenericColorCard theme_key="accent" theme={theme} />
        <GenericColorCard theme_key="neutral" theme={theme} />
      </div>
      <div className="w-full flex flex-wrap items-center justify-center gap-2 p-2">
        {base && <BaseColorCard theme={base} />}
      </div>
      <div className="w-full h-full flex flex-wrap items-center justify-center gap-2 p-2">
        <GenericColorCard theme_key="info" theme={theme} />
        <GenericColorCard theme_key="success" theme={theme} />
        <GenericColorCard theme_key="warning" theme={theme} />
        <GenericColorCard theme_key="error" theme={theme} />
      </div>
      <div className="w-full h-full flex flex-wrap items-center justify-center gap-2 p-2">
        {curves && <DaisyUIABaseCurvesThemeCard theme_group={curves} />}
      </div>
    </div>
  );
}
