import { DaisyUIThemeSearchParmsTypes } from "@/routes/-routes-utils/daisy-ui-schema";
import { ColorpickerModal } from "../ColorpickerModal";
import { BaseDaisyUiThemeKeys, DaisyUIDefaulltColors, getTailwindBg } from "@/helpers/daisyui/daisyui-theme";
import { twMerge } from "tailwind-merge";

interface GenericThemeOptions {
  name: DaisyUIDefaulltColors["name"];
  value: string;
  variable:string;
  locked?: boolean | undefined;
}

type BaseDaisyUiThemeKeysWithoutBase = Omit<BaseDaisyUiThemeKeys,"base">

interface GenericColorCardProps<T extends BaseDaisyUiThemeKeysWithoutBase> {
  // theme: DaisyUIThemeSearchParmsTypes["accent"];
  theme_key: T;
  theme: DaisyUIThemeSearchParmsTypes;
}

export function GenericColorCard<T extends BaseDaisyUiThemeKeysWithoutBase>({
  theme_key,
  theme,
}: GenericColorCardProps<T>) {
  // for example key primary this pulls out an object that looks like
  // primary:{}
  // primary-content;{}
  const this_keys_theme = theme?.[theme_key as keyof DaisyUIThemeSearchParmsTypes];
  if (!this_keys_theme) return null;
  // @ts-expect-error extract the contemts in primary
  const main = this_keys_theme[theme_key] as GenericThemeOptions;
  const theme_content_key = `${theme_key}-content` as const;
  // @ts-expect-error extraxt the object in primary content
  const content = this_keys_theme[theme_content_key] as GenericThemeOptions;
  const main_bg=getTailwindBg(main.name)
  const content_bg=getTailwindBg(content.name)
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 h-full gap-1 flex flex-col items-center justify-center">
      <h1 className="font-bold">{theme_key}</h1>
      <div className="w-full  h-full gap-2 flex flex-col items-center justify-center">
        {main && (
          <ColorpickerModal bg_color={main_bg.bg} colorKey={main.variable} oklchString={main.value}>
            <div
              className={twMerge(
                "w-full flex flex-col text-sm rounded-lg gap-2 justify-between items-center  p-2",
                main_bg.bg,
                main_bg.content
              )}>
              <div className="w-fit">
                {" "}
                {main.name} {main.variable}
              </div>
              <div className="text-xs line-clamp-2"> {main.value}</div>
            </div>
          </ColorpickerModal>
        )}
        {content && (
          <ColorpickerModal
            bg_color={content_bg.bg}
            colorKey={content.variable}
            oklchString={content.value}>
            <div
              className={twMerge(
                "w-full flex flex-col text-sm rounded-lg gap-2 justify-between items-center p-2",
                content_bg.bg,
                content_bg.content
              )}>
              <div className="w-fit">
                {" "}
                {content.name} {content.variable}
              </div>
              <div className="w-fit"> {content.value}</div>
            </div>
          </ColorpickerModal>
        )}
      </div>
    </div>
  );
}
