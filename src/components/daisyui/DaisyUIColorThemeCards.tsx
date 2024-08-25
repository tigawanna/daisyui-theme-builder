import { useNavigate } from "@tanstack/react-router";
import { startTransition, useState, useTransition } from "react";
import { BaseDaisyUiThemeKeys, getTailwindBg } from "@/helpers/daisyui/daisyui-theme";
import { GenericThemeState } from "@/helpers/daisyui/types";
import {
  DaisyUIColorSearchParmsTypes,
  DaisyUICurvesSearchParmsTypes,
  DaisyUIThemeSearchParmsTypes,
} from "@/helpers/daisyui/daisy-ui-schema";
import { twMerge } from "tailwind-merge";
import { ColorpickerModal } from "./ColorpickerModal";

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

export function GenericColorCard<T extends BaseDaisyUiThemeKeysWithoutBase>({
  theme_key,
  theme,
  className,
}: GenericColorCardProps<T>) {
  if (!theme) return null;
  const { bg, content } = getTailwindBg(theme.name);
  return (
    <div
      className={twMerge(
        "w-full  h-full gap-1 flex flex-col items-center justify-center",
        className
      )}>
      <div className="w-full  h-full gap-2 flex flex-col items-center justify-center">
        <ColorpickerModal
          theme={theme}
          theme_key={theme_key}
          bg_color={bg}
          // colorKey={main.variable} oklchString={main.value}
        >
          <div
            className={twMerge(
              "w-full flex flex-col text-sm rounded-lg gap-2 justify-between items-center  p-2",
              bg,
              content
            )}>
            <div className="">{theme?.name}</div>
            <div className="text-xs line-clamp-1">{theme?.value}</div>
          </div>
        </ColorpickerModal>
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
}
export function DaisyUIABaseCurvesThemeCard({ theme_group }: DaisyUIBaseCurvesThemeCardProps) {
  const curves = Object.entries<DaisyUIBaseCurvesThemeCardProps["theme_group"]>(theme_group as any);
  const navigate = useNavigate();
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
    startTransition(() => {
      navigate({
        search: (prev) => ({
          ...prev,
          ...new_curves,
        }),
      });
    });
  }

  return (
    <div className="w-full   flex flex-col items-center justify-center gap-1">
      <h1 className="">curves</h1>
      <ul className="w-full flex flex-wrap items-center justify-center gap-2 ">
        {curves.map(([key, theme]) => {
          if (!theme) return null;
          const row = theme as GenericThemeState;
          const [input, setInput] = useState(row.value);
          const [, startTransition] = useTransition();
          return (
            <div
              key={key + row.variable}
              className="w-full @sm:w-[48%] @md:w-1/3 @lg:w-[24%]h-12   flex flex-col justify-center rounded-lg">
              <h2 className="text-sm font-bold">{key}</h2>
              <input
                className="w-full input input-sm flex flex-col justify-center rounded-lg"
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
            </div>
          );
        })}
      </ul>
    </div>
  );
}
