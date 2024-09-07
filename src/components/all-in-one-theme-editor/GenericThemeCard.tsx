/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useTransition, memo, useMemo, useCallback } from "react";
import {
  DaisyUIColorSearchParmsTypes,
  DaisyUICurvesSearchParmsTypes,
} from "./utils/schema";
import { twMerge } from "tailwind-merge";
import { ColorpickerModal } from "./ColorpickerModal";
import {
  BaseDaisyUiThemeKeys,
  getTailwindBg,
} from "./utils/daisyui-css-variables-helpers";
import { GenericThemeState } from "./utils/types";
import { Lock, Unlock } from "lucide-react";
import { useDaisyUITheme } from "./utils/use-search-params-theme";

export type BGandContentObject<T extends BaseDaisyUiThemeKeys> = {
  [key in T]: GenericThemeState;
};

type BaseDaisyUiThemeKeysWithoutBase = keyof DaisyUIColorSearchParmsTypes;

interface GenericColorCardProps<T extends BaseDaisyUiThemeKeysWithoutBase> {
  // theme: DaisyUIThemeSearchParmsTypes["accent"];
  theme_key: T;
  theme: DaisyUIColorSearchParmsTypes[T];
  className?: string;
}
export const GenericColorCard = memo(
  <T extends BaseDaisyUiThemeKeysWithoutBase>({
    theme_key,
    theme,
    className,
  }: GenericColorCardProps<T>) => {

    const {  updateLockedTheme } = useDaisyUITheme();
  const {bg,content} = useMemo(() => getTailwindBg(theme?.name), [theme?.name]);
const handleLockClick = useCallback(
  () => updateLockedTheme(theme_key, true),
  [theme_key, updateLockedTheme],
);
const handleUnlockClick = useCallback(
  () => updateLockedTheme(theme_key, false),
  [theme_key, updateLockedTheme],
);

    return (
      <div
        className={twMerge(
          "relative flex h-full w-full cursor-pointer flex-col items-center justify-center gap-1 hover:scale-110 hover:animate-in",
          className,
        )}
      >
        <div
          className={
            "flex h-full w-full flex-col items-center justify-center gap-2"
          }
        >
          <ColorpickerModal
            theme={theme}
            theme_key={theme_key}
            bg_color={bg}
          >
            <div
              className={twMerge(
                "flex w-full flex-col items-center justify-between gap-0.5 rounded-lg p-1 text-sm",
                bg,
                content,
              )}
            >
              <div className="line-clamp-1 text-sm">{theme?.name}</div>
              <div className="line-clamp-1 text-[9px]">{theme?.value}</div>
            </div>
          </ColorpickerModal>
        </div>
        <div
          className={twMerge(
            `absolute right-[1%] top-[5%] flex flex-col items-center justify-center gap-2`,
          )}
        >
          {theme?.locked ? (
            <div className="rounded-lg bg-error-content p-1">
              <Lock
                className="size-3 text-error"
                onClick={handleUnlockClick}
              />
            </div>
          ) : (
            <div className="rounded-lg bg-error-content p-1">
              <Unlock
                className="size-3 bg-success-content text-success"
                onClick={handleLockClick}
              />
            </div>
          )}
        </div>
      </div>
    );
  },
);

type ThemeCurves = DaisyUICurvesSearchParmsTypes;
type ThemeCurveKeys = ThemeCurves extends undefined ? never : keyof ThemeCurves;

interface DaisyUIBaseCurvesThemeCardProps {
  theme_group: {
    [key in ThemeCurveKeys]?: ThemeCurves[key];
  }
}

export const DaisyUIBaseCurvesThemeCard = memo(
  ({
    theme_group,
  }: DaisyUIBaseCurvesThemeCardProps) => {
    const curves = useMemo(() => {
      return Object.entries<DaisyUIBaseCurvesThemeCardProps["theme_group"]>(
        theme_group as any,
      );
    }, [theme_group]);

    return (
      <div className="flex w-full flex-col items-center justify-center gap-1">
        <h1 className="">curves</h1>
        <ul className="flex w-full flex-wrap items-center justify-center">
          {curves.map(([key, theme]) => {
            if (!theme) return null;
            return (
              <GenericThemeCurveCard
                key={key}
                theme_key={key}
                row={theme as GenericThemeState}
      
              />
            );
          })}
        </ul>
      </div>
    );
  },
);

interface GenericThemeCurveCardProps {
  theme_key: string;
  row: GenericThemeState;

}

export const GenericThemeCurveCard = memo(
  ({ theme_key, row,  }: GenericThemeCurveCardProps) => {
    const {updateTheme,updateLockedTheme} = useDaisyUITheme()

   const updateChages = useCallback(
     ( new_items: string) =>
       updateTheme(theme_key, new_items),
     [updateTheme, theme_key],
   ) 

const handleLockClick = useCallback(
  () => updateLockedTheme(theme_key, true),
  [theme_key, updateLockedTheme],
);
const handleUnlockClick = useCallback(
  () => updateLockedTheme(theme_key, false),
  [theme_key, updateLockedTheme],
);
    const [input, setInput] = useState(row?.value);
    const [, startTransition] = useTransition();
    return (
      <div
        key={theme_key + row.variable}
        className="flex w-[48%] flex-col rounded-lg @md:w-1/3 @lg:w-[24%]"
      >
        <h2 className="text-sm font-bold">{theme_key.replace(/_/g, " ")}</h2>
        <div className="flex gap-1">
          <input
            className="input input-sm flex w-full flex-col justify-center rounded-lg"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              startTransition(() => {
                updateChages(e.target.value);
              });
            }}
          />
          <div
            className={twMerge(
              `right-[1%] flex flex-col items-center justify-center gap-2`,
            )}
          >
            {row?.locked ? (
              <div className="rounded-lg bg-error-content p-1">
                <Lock
                  className="size-4 text-error"
                  onClick={handleUnlockClick}
                />
              </div>
            ) : (
              <div className="rounded-lg bg-error-content p-1">
                <Unlock
                  className="size-4 bg-success-content text-success"
                  onClick={handleLockClick}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  },
);
