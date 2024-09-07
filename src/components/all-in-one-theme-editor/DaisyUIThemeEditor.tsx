import { useCallback, useMemo } from "react";
import {
  DaisyUIBaseCurvesThemeCard,
  GenericColorCard,
} from "./GenericThemeCard";
import { DaisyUIThemeSearchParmsTypes } from "./utils/schema";

export default function DaisyUIThemeEditor({
  theme,
  saveChanges,
  lockTheme,
}: {
  theme: DaisyUIThemeSearchParmsTypes;
  saveChanges: (item_key: string, new_item: string) => void;
  lockTheme: (item_key: string, new_item: boolean) => void;
}) {
  const localSaveChanges = useCallback(
    (color_key: string, new_color: string) => {
      saveChanges(color_key, new_color);
    },
    [saveChanges],
  );
  const localLockTheme = useCallback(
    (item_key: string, new_item: boolean) => {
      lockTheme(item_key, new_item);
    },
    [lockTheme],
  );
  const localTheme = useMemo(() => theme, [theme]);

  const curves = useMemo(
    () => ({
      "--tab-border": theme?.["--tab-border"],
      "--tab-radius": theme?.["--tab-radius"],
      "--btn-focus-scale": theme?.["--btn-focus-scale"],
      "--border-btn": theme?.["--border-btn"],
      "--rounded-box": theme?.["--rounded-box"],
      "--rounded-badge": theme?.["--rounded-badge"],
      "--animation-btn": theme?.["--animation-btn"],
      "--animation-input": theme?.["--animation-input"],
    }),
    [theme],
  ); // Memoize the curves object using the theme as the dependency array

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-[5%]">
      <div className="flex h-full w-full flex-wrap items-center justify-center gap-2 p-2">
        <div className="flex h-full w-[48%] flex-col items-center justify-center gap-1 @md:w-[23%] @lg:w-[40%]">
          <h3>Primary</h3>
          <GenericColorCard
            lockTheme={localLockTheme}
            saveChanges={localSaveChanges}
            theme_key="primary"
            theme={localTheme?.primary}
          />
          <GenericColorCard
            lockTheme={localLockTheme}
            saveChanges={localSaveChanges}
            theme_key="primary-content"
            theme={localTheme?.["primary-content"]}
          />
        </div>
        <div className="flex h-full w-[48%] flex-col items-center justify-center gap-1 @md:w-[23%] @lg:w-[40%]">
          <h3>Secondary</h3>
          <GenericColorCard
            lockTheme={localLockTheme}
            saveChanges={localSaveChanges}
            theme_key="secondary"
            theme={localTheme?.secondary}
          />
          <GenericColorCard
            lockTheme={localLockTheme}
            saveChanges={localSaveChanges}
            theme_key="secondary-content"
            theme={localTheme?.["secondary-content"]}
          />
        </div>
        <div className="flex h-full w-[48%] flex-col items-center justify-center gap-1 @md:w-[23%] @lg:w-[40%]">
          <h3>Accent</h3>
          <GenericColorCard
            lockTheme={localLockTheme}
            saveChanges={localSaveChanges}
            theme_key="accent"
            theme={localTheme?.accent}
          />
          <GenericColorCard
            lockTheme={localLockTheme}
            saveChanges={localSaveChanges}
            theme_key="accent-content"
            theme={localTheme?.["accent-content"]}
          />
        </div>
        <div className="flex h-full w-[48%] flex-col items-center justify-center gap-1 @md:w-[23%] @lg:w-[40%]">
          <h3>Neutral</h3>
          <GenericColorCard
            lockTheme={localLockTheme}
            saveChanges={localSaveChanges}
            theme_key="neutral"
            theme={localTheme?.neutral}
          />
          <GenericColorCard
            lockTheme={localLockTheme}
            saveChanges={localSaveChanges}
            theme_key="neutral-content"
            theme={localTheme?.["neutral-content"]}
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center p-2">
        <h3>Base</h3>
        <div className="flex w-full flex-wrap items-center justify-center gap-2 p-2">
          <GenericColorCard
            lockTheme={localLockTheme}
            saveChanges={localSaveChanges}
            className="w-[48%] @md:w-[30%] @lg:w-[24%]"
            theme_key="base-100"
            theme={localTheme?.["base-100"]}
          />
          <GenericColorCard
            lockTheme={localLockTheme}
            saveChanges={localSaveChanges}
            className="w-[48%] gap-1 @md:w-[23%] @lg:w-[40%]"
            theme_key="base-200"
            theme={localTheme?.["base-200"]}
          />
          <GenericColorCard
            lockTheme={localLockTheme}
            saveChanges={localSaveChanges}
            className="w-[48%] gap-1 @md:w-[23%] @lg:w-[40%]"
            theme_key="base-300"
            theme={localTheme?.["base-300"]}
          />
          <GenericColorCard
            lockTheme={localLockTheme}
            saveChanges={localSaveChanges}
            className="w-[48%] gap-1 @md:w-[23%] @lg:w-[40%]"
            theme_key="base-content"
            theme={localTheme?.["base-content"]}
          />
        </div>
      </div>
      <div className="flex h-full w-full flex-wrap items-center justify-center gap-2 p-2">
        <div className="flex h-full w-[48%] flex-col items-center justify-center gap-1 @md:w-[23%] @lg:w-[40%]">
          <h3>Info</h3>
          <GenericColorCard
            lockTheme={localLockTheme}
            saveChanges={localSaveChanges}
            theme_key="info"
            theme={localTheme?.info}
          />
          <GenericColorCard
            lockTheme={localLockTheme}
            saveChanges={localSaveChanges}
            theme_key="info-content"
            theme={localTheme?.["info-content"]}
          />
        </div>
        <div className="flex h-full w-[48%] flex-col items-center justify-center gap-1 @md:w-[23%] @lg:w-[40%]">
          <h3>Success</h3>
          <GenericColorCard
            lockTheme={localLockTheme}
            saveChanges={localSaveChanges}
            theme_key="success"
            theme={localTheme?.success}
          />
          <GenericColorCard
            lockTheme={localLockTheme}
            saveChanges={localSaveChanges}
            theme_key="success-content"
            theme={localTheme?.["success-content"]}
          />
        </div>
        <div className="flex h-full w-[48%] flex-col items-center justify-center gap-1 @md:w-[23%] @lg:w-[40%]">
          <h3>Warning</h3>
          <GenericColorCard
            lockTheme={localLockTheme}
            saveChanges={localSaveChanges}
            theme_key="warning"
            theme={localTheme?.warning}
          />
          <GenericColorCard
            lockTheme={localLockTheme}
            saveChanges={localSaveChanges}
            theme_key="warning-content"
            theme={localTheme?.["warning-content"]}
          />
        </div>
        <div className="flex h-full w-[48%] flex-col items-center justify-center gap-1 @md:w-[23%] @lg:w-[40%]">
          <h3>Error</h3>
          <GenericColorCard
            lockTheme={localLockTheme}
            saveChanges={localSaveChanges}
            theme_key="error"
            theme={localTheme?.error}
          />
          <GenericColorCard
            lockTheme={localLockTheme}
            saveChanges={localSaveChanges}
            theme_key="error-content"
            theme={localTheme?.["error-content"]}
          />
        </div>
      </div>
      <div className="flex h-full w-full flex-wrap items-center justify-center gap-2 bg-base-200 p-2 @container">
        {curves && (
          <DaisyUIBaseCurvesThemeCard
            theme_group={curves}
            saveChanges={localSaveChanges}
            lockTheme={localLockTheme}
          />
        )}
      </div>
    </div>
  );
}
