import { DaisyUIThemeSearchParmsTypes } from "@/helpers/daisyui/daisy-ui-schema";
import {

  DaisyUIABaseCurvesThemeCard,
  GenericColorCard,
} from "./DaisyUIColorThemeCards";



export function DaisyUIThemes({ theme }: { theme: DaisyUIThemeSearchParmsTypes }) {
  const {  curves } = theme;
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-[5%] gap-3">
      <div className="w-full h-full flex flex-wrap items-center justify-center gap-2 p-2">
        <div className="w-full @sm:w-[48%] @md:w-1/3 @lg:w-[24%] h-full flex flex-col items-center justify-center">
          <h3>Primary</h3>
          <GenericColorCard theme_key="primary" theme={theme.colors?.primary} />
          <GenericColorCard theme_key="primary-content" theme={theme.colors?.["primary-content"]} />
        </div>
        <div className="w-full @sm:w-[48%] @md:w-1/3 @lg:w-[24%] h-full flex flex-col items-center justify-center">
          <h3>Secondary</h3>
          <GenericColorCard theme_key="secondary" theme={theme.colors?.secondary} />
          <GenericColorCard
            theme_key="secondary-content"
            theme={theme.colors?.["secondary-content"]}
          />
        </div>
        <div className="w-full @sm:w-[48%] @md:w-1/3 @lg:w-[24%] h-full flex flex-col items-center justify-center">
          <h3>Accent</h3>
          <GenericColorCard theme_key="accent" theme={theme.colors?.accent} />
          <GenericColorCard theme_key="accent-content" theme={theme.colors?.["accent-content"]} />
        </div>
        <div className="w-full @sm:w-[48%] @md:w-1/3 @lg:w-[24%] h-full flex flex-col items-center justify-center">
          <h3>Neutral</h3>
          <GenericColorCard theme_key="neutral" theme={theme.colors?.neutral} />
          <GenericColorCard theme_key="neutral-content" theme={theme.colors?.["neutral-content"]} />
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center  p-2">
        <h3>Base</h3>
      <div className="w-full flex flex-wrap items-center justify-center gap-2 p-2">
        <GenericColorCard
          className="w-full @sm:w-[48%] @md:w-[30%] @lg:w-[24%] "
          theme_key="base-100"
          theme={theme.colors?.["base-100"]}
        />
        <GenericColorCard
          className="w-full @sm:w-[48%] @md:w-1/3 @lg:w-[24%] "
          theme_key="base-200"
          theme={theme.colors?.["base-200"]}
        />
        <GenericColorCard
          className="w-full @sm:w-[48%] @md:w-1/3 @lg:w-[24%] "
          theme_key="base-300"
          theme={theme.colors?.["base-300"]}
        />
        <GenericColorCard
          className="w-full @sm:w-[48%] @md:w-1/3 @lg:w-[24%] "
          theme_key="base-content"
          theme={theme.colors?.["base-content"]}
        />
      </div>
      </div>
      <div className="w-full h-full flex flex-wrap items-center justify-center gap-2 p-2">
        <div className="w-full @sm:w-[48%] @md:w-1/3 @lg:w-[24%] h-full flex flex-col items-center justify-center">
          <h3>Info</h3>
          <GenericColorCard theme_key="info" theme={theme.colors?.info} />
          <GenericColorCard theme_key="info-content" theme={theme.colors?.["info-content"]} />
        </div>
        <div className="w-full @sm:w-[48%] @md:w-1/3 @lg:w-[24%] h-full flex flex-col items-center justify-center">
          <h3>Success</h3>
          <GenericColorCard theme_key="success" theme={theme.colors?.success} />
          <GenericColorCard theme_key="success-content" theme={theme.colors?.["success-content"]} />
        </div>
        <div className="w-full @sm:w-[48%] @md:w-1/3 @lg:w-[24%] h-full flex flex-col items-center justify-center">
          <h3>Warning</h3>
          <GenericColorCard theme_key="warning" theme={theme.colors?.warning} />
          <GenericColorCard theme_key="warning-content" theme={theme.colors?.["warning-content"]} />
        </div>
        <div className="w-full @sm:w-[48%] @md:w-1/3 @lg:w-[24%] h-full flex flex-col items-center justify-center">
          <h3>Error</h3>
          <GenericColorCard theme_key="error" theme={theme.colors?.error} />
          <GenericColorCard theme_key="error-content" theme={theme.colors?.["error-content"]} />
        </div>
      </div>
      <div className="w-full h-full flex flex-wrap items-center justify-center bg-base-200 gap-2 p-2">
        {curves && <DaisyUIABaseCurvesThemeCard theme_group={curves} />}
      </div>
    </div>
  );
}



