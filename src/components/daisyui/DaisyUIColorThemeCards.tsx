import { twMerge } from "tailwind-merge";
import { useNavigate } from "@tanstack/react-router";
import { useState, useTransition } from "react";
import { BaseDaisyUiThemeKeys, getTailwindBg } from "@/helpers/daisyui/daisyui-theme";
import { GenericThemeState } from "@/helpers/daisyui/types";
import { DaisyUIThemeSearchParmsTypes } from "@/helpers/daisyui/daisy-ui-schema";
import { ColorpickerModal } from "./ColorpickerModal";

export type BGandContentObject<T extends BaseDaisyUiThemeKeys> = {
  [key in T]: GenericThemeState;
};

interface DaisyUIColorThemeCardProps<T extends BaseDaisyUiThemeKeys> {
  group_name: T;
  theme_group: BGandContentObject<T>;
}

export function DaisyUIColorThemeCard<T extends BaseDaisyUiThemeKeys>({
  theme_group,
  group_name,
}: DaisyUIColorThemeCardProps<T>) {
  const themes = Object.entries<GenericThemeState>(theme_group);
  console.log("themes", themes[0]);
  return (
    <div className="w-full   xs:w-1/2 sm:w-1/3  lg:w-1/5  flex flex-col items-center justify-center gap-1">
      <h1 className="text-xl font-bold">{group_name}</h1>
      <ul className="w-full h-full flex flex-col items-center justify-center gap-1">
        {themes.map(([key, theme]) => {
          const { bg,bg_muted, content } = getTailwindBg(theme.name as any);
          return (
            <li
              key={key + theme.variable}
              className="w-full h-12 flex flex-col justify-center rounded-lg">
                <div className={twMerge(bg, content, "w-full bg-accent h-full rounded-lg")}>{theme.value}</div>
              <ColorpickerModal bg_color={bg_muted} colorKey={key} oklchString={theme.value}>
              <div
                key={theme.name}
                className={twMerge(
                  bg,
                  content,
                  "w-full h-full rounded-lg flex flex-col  justify-center items-center"
                )}>
                {theme.value}
                <span className="text-xs">{theme.name}</span>
              </div>
                </ColorpickerModal>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
interface DaisyUIBaseColorThemeCardProps {
  theme_group: {
    "base-100": GenericThemeState;
    "base-200": GenericThemeState;
    "base-300": GenericThemeState;
    "base-content": GenericThemeState;
  };
}
export function DaisyUIABaseColorThemeCard({ theme_group }: DaisyUIBaseColorThemeCardProps) {
  const themes = Object.entries<GenericThemeState>(theme_group);
  return (
    <div className="w-full   flex flex-col items-center justify-center gap-1">
      <h1 className="text-xl font-bold">base</h1>
      <ul className="w-full flex flex-wrap items-center justify-center gap-1">
        {themes.map(([key, theme]) => {
          const { bg,bg_muted ,content } = getTailwindBg(theme.name as any);
          return (
            <li
              key={key + theme.variable}
            className="w-full h-12  xs:w-1/2 sm:w-1/3  lg:w-1/5  flex flex-col justify-center rounded-lg">
                   <ColorpickerModal bg_color={bg_muted} colorKey={key} oklchString={theme.value}>
              <div
                key={theme.name}
                className={twMerge(
                  bg,
                  content,
                  "w-full h-full rounded-lg flex flex-col  justify-center items-center"
                )}>
                {theme.value}
                <span className="text-xs">{theme.name}</span>
              </div>
                  </ColorpickerModal>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

type ThemeCurves = DaisyUIThemeSearchParmsTypes["curves"];
type ThemeCurveKeys = ThemeCurves extends undefined ? never : keyof ThemeCurves;

interface DaisyUIBaseCurvesThemeCardProps {
  theme_group: {
    [key in ThemeCurveKeys]: ThemeCurves[key];
  };
}
export function DaisyUIABaseCurvesThemeCard({ theme_group }: DaisyUIBaseCurvesThemeCardProps) {
  const curves = Object.entries<DaisyUIBaseCurvesThemeCardProps["theme_group"]>(theme_group);
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
    navigate({
      search: {
        curves: new_curves,
      },
    });
  }

  return (
    <div className="w-full   flex flex-col items-center justify-center gap-1">
      <h1 className="text-xl font-bold">curves</h1>
      <ul className="w-full flex flex-wrap items-center justify-center gap-2 ">
        {curves.map(([key, theme]) => {
          const row = theme as GenericThemeState;
          const [input, setInput] = useState(row.value);
          const [, startTransition] = useTransition();

          return (
            <div
              key={key + row.variable}
              className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 h-12   flex flex-col justify-center rounded-lg">
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
