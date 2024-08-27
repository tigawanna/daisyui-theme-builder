import { DaisyUIBaseCurvesThemeCard, GenericColorCard } from "./GenericThemeCard";
import { DaisyUIThemeSearchParmsTypes } from "./utils/schema";

export function DaisyUIThemeEditor({
  theme,
  saveChanges,
  lockTheme,
}: {
  theme: DaisyUIThemeSearchParmsTypes;
  saveChanges: (item_key: string, new_item: string) => void;
  lockTheme: (item_key: string, new_item: boolean) => void;
}) {
  const {
    tab_border,
    tab_radius,
    btn_focus_scale,
    border_btn,
    rounded_box,
    rounded_badge,
    animation_btn,
    animation_input,
  } = theme;

  const curves = {
    tab_border,
    tab_radius,
    btn_focus_scale,
    border_btn,
    rounded_box,
    rounded_badge,
    animation_btn,
    animation_input,
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-[5%] gap-3">
      <div className="w-full h-full flex flex-wrap items-center justify-center gap-2 p-2">
        <div className="w-full @sm:w-[48%] @md:w-1/3 @lg:w-[24%] h-full flex flex-col items-center justify-center">
          <h3>Primary</h3>
          <GenericColorCard
            lockTheme={lockTheme}
            saveChanges={saveChanges}
            theme_key="primary"
            theme={theme?.primary}
          />
          <GenericColorCard
            lockTheme={lockTheme}
            saveChanges={saveChanges}
            theme_key="primary-content"
            theme={theme?.["primary-content"]}
          />
        </div>
        <div className="w-full @sm:w-[48%] @md:w-1/3 @lg:w-[24%] h-full flex flex-col items-center justify-center">
          <h3>Secondary</h3>
          <GenericColorCard
            lockTheme={lockTheme}
            saveChanges={saveChanges}
            theme_key="secondary"
            theme={theme?.secondary}
          />
          <GenericColorCard
            lockTheme={lockTheme}
            saveChanges={saveChanges}
            theme_key="secondary-content"
            theme={theme?.["secondary-content"]}
          />
        </div>
        <div className="w-full @sm:w-[48%] @md:w-1/3 @lg:w-[24%] h-full flex flex-col items-center justify-center">
          <h3>Accent</h3>
          <GenericColorCard
            lockTheme={lockTheme}
            saveChanges={saveChanges}
            theme_key="accent"
            theme={theme?.accent}
          />
          <GenericColorCard
            lockTheme={lockTheme}
            saveChanges={saveChanges}
            theme_key="accent-content"
            theme={theme?.["accent-content"]}
          />
        </div>
        <div className="w-full @sm:w-[48%] @md:w-1/3 @lg:w-[24%] h-full flex flex-col items-center justify-center">
          <h3>Neutral</h3>
          <GenericColorCard
            lockTheme={lockTheme}
            saveChanges={saveChanges}
            theme_key="neutral"
            theme={theme?.neutral}
          />
          <GenericColorCard
            lockTheme={lockTheme}
            saveChanges={saveChanges}
            theme_key="neutral-content"
            theme={theme?.["neutral-content"]}
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center  p-2">
        <h3>Base</h3>
        <div className="w-full flex flex-wrap items-center justify-center gap-2 p-2">
          <GenericColorCard
            lockTheme={lockTheme}
            saveChanges={saveChanges}
            className="w-full @sm:w-[48%] @md:w-[30%] @lg:w-[24%] "
            theme_key="base-100"
            theme={theme?.["base-100"]}
          />
          <GenericColorCard
            lockTheme={lockTheme}
            saveChanges={saveChanges}
            className="w-full @sm:w-[48%] @md:w-1/3 @lg:w-[24%] "
            theme_key="base-200"
            theme={theme?.["base-200"]}
          />
          <GenericColorCard
            lockTheme={lockTheme}
            saveChanges={saveChanges}
            className="w-full @sm:w-[48%] @md:w-1/3 @lg:w-[24%] "
            theme_key="base-300"
            theme={theme?.["base-300"]}
          />
          <GenericColorCard
            lockTheme={lockTheme}
            saveChanges={saveChanges}
            className="w-full @sm:w-[48%] @md:w-1/3 @lg:w-[24%] "
            theme_key="base-content"
            theme={theme?.["base-content"]}
          />
        </div>
      </div>
      <div className="w-full h-full flex flex-wrap items-center justify-center gap-2 p-2">
        <div className="w-full @sm:w-[48%] @md:w-1/3 @lg:w-[24%] h-full flex flex-col items-center justify-center">
          <h3>Info</h3>
          <GenericColorCard
            lockTheme={lockTheme}
            saveChanges={saveChanges}
            theme_key="info"
            theme={theme?.info}
          />
          <GenericColorCard
            lockTheme={lockTheme}
            saveChanges={saveChanges}
            theme_key="info-content"
            theme={theme?.["info-content"]}
          />
        </div>
        <div className="w-full @sm:w-[48%] @md:w-1/3 @lg:w-[24%] h-full flex flex-col items-center justify-center">
          <h3>Success</h3>
          <GenericColorCard
            lockTheme={lockTheme}
            saveChanges={saveChanges}
            theme_key="success"
            theme={theme?.success}
          />
          <GenericColorCard
            lockTheme={lockTheme}
            saveChanges={saveChanges}
            theme_key="success-content"
            theme={theme?.["success-content"]}
          />
        </div>
        <div className="w-full @sm:w-[48%] @md:w-1/3 @lg:w-[24%] h-full flex flex-col items-center justify-center">
          <h3>Warning</h3>
          <GenericColorCard
            lockTheme={lockTheme}
            saveChanges={saveChanges}
            theme_key="warning"
            theme={theme?.warning}
          />
          <GenericColorCard
            lockTheme={lockTheme}
            saveChanges={saveChanges}
            theme_key="warning-content"
            theme={theme?.["warning-content"]}
          />
        </div>
        <div className="w-full @sm:w-[48%] @md:w-1/3 @lg:w-[24%] h-full flex flex-col items-center justify-center">
          <h3>Error</h3>
          <GenericColorCard
            lockTheme={lockTheme}
            saveChanges={saveChanges}
            theme_key="error"
            theme={theme?.error}
          />
          <GenericColorCard
            lockTheme={lockTheme}
            saveChanges={saveChanges}
            theme_key="error-content"
            theme={theme?.["error-content"]}
          />
        </div>
      </div>
      <div className="w-full h-full flex flex-wrap items-center justify-center bg-base-200 gap-2 p-2">
        {curves && (
          <DaisyUIBaseCurvesThemeCard
            theme_group={curves}
            saveChanges={saveChanges}
            lockTheme={lockTheme}
          />
        )}
      </div>
    </div>
  );
}
