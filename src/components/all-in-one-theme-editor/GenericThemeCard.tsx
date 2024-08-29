import { useState, useTransition } from "react";
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

export type BGandContentObject<T extends BaseDaisyUiThemeKeys> = {
  [key in T]: GenericThemeState;
};

type BaseDaisyUiThemeKeysWithoutBase = keyof DaisyUIColorSearchParmsTypes;

interface GenericColorCardProps<T extends BaseDaisyUiThemeKeysWithoutBase> {
  // theme: DaisyUIThemeSearchParmsTypes["accent"];
  theme_key: T;
  theme: DaisyUIColorSearchParmsTypes[T];
  className?: string;
  saveChanges: (item_key: string, new_item: string) => void;
  lockTheme: (item_key: string, new_item: boolean) => void;
}

export function GenericColorCard<T extends BaseDaisyUiThemeKeysWithoutBase>({
  theme_key,
  theme,
  className,
  saveChanges,
  lockTheme,
}: GenericColorCardProps<T>) {
  const { bg, content } = getTailwindBg(theme?.name);
  return (
    <div
      className={twMerge(
        "relative flex h-full w-full flex-col items-center cursor-pointer justify-center gap-1 hover:animate-in hover:scale-110",
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
          saveColor={(color_key, new_color) =>
            saveChanges(color_key, new_color)
          }
          // colorKey={main.variable} oklchString={main.value}
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
              onClick={() => lockTheme(theme_key, false)}
            />
          </div>
        ) : (
          <div className="rounded-lg bg-error-content p-1">
            <Unlock
              className="size-3 bg-success-content text-success"
              onClick={() => lockTheme(theme_key, true)}
            />
          </div>
        )}
      </div>
    </div>
  );
}

type ThemeCurves = DaisyUICurvesSearchParmsTypes;
type ThemeCurveKeys = ThemeCurves extends undefined ? never : keyof ThemeCurves;

interface DaisyUIBaseCurvesThemeCardProps {
  theme_group: {
    [key in ThemeCurveKeys]?: ThemeCurves[key];
  };
  saveChanges: (item_key: string, new_item: string) => void;
  lockTheme: (item_key: string, new_item: boolean) => void;
}
export function DaisyUIBaseCurvesThemeCard({
  theme_group,
  saveChanges,
  lockTheme,
}: DaisyUIBaseCurvesThemeCardProps) {
  const curves = Object.entries<DaisyUIBaseCurvesThemeCardProps["theme_group"]>(
    theme_group as any,
  );
  function handleVariableChange({
    theme_key,
    value_key,
    css_varaiable_key,
    value,
    theme,
  }: {
    theme_key: string;
    css_varaiable_key: string;
    value_key: string;
    value: string;
    theme: GenericThemeState;
  }) {
    const new_curves = {
      ...theme_group,
      [theme_key]: {
        ...theme,
        [value_key]: value,
      },
    };
    document.documentElement.style.setProperty(css_varaiable_key, value);
    saveChanges(theme_key, value);
  }

  return (
    <div className="flex w-full flex-col items-center justify-center gap-1">
      <h1 className="">curves</h1>
      <ul className="flex w-full flex-wrap items-center justify-center">
        {curves.map(([key, theme]) => {
          const row = theme as GenericThemeState;
          const [input, setInput] = useState(row?.value);
          const [, startTransition] = useTransition();
          if (!theme) return null;
          return (
            <div
              key={key + row.variable}
              className="flex w-[48%] flex-col rounded-lg @md:w-1/3 @lg:w-[24%]"
            >
              <h2 className="text-sm font-bold">{key.replace(/_/g, " ")}</h2>
              <div className="flex gap-1">
                <input
                  className="input input-sm flex w-full flex-col justify-center rounded-lg"
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    startTransition(() => {
                      handleVariableChange({
                        css_varaiable_key: row.variable,
                        theme_key: key,
                        value_key: "value",
                        value: e.target.value,
                        theme: row,
                      });
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
                        onClick={() => lockTheme(key, false)}
                      />
                    </div>
                  ) : (
                    <div className="rounded-lg bg-error-content p-1">
                      <Unlock
                        className="size-4 bg-success-content text-success"
                        onClick={() => lockTheme(key, true)}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
