import { DaisyUIDefaulltColors } from "@/helpers/daisyui/daisyui-theme";

export interface GenericThemeOptions {
  name: DaisyUIDefaulltColors["name"];
  value: string;
  variable: string;
  locked?: boolean | undefined;
}
