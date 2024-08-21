import { DaisyUIThemeSearchParmsTypes } from "@/helpers/daisyui/daisy-ui-schema";
import { ColorpickerModal } from "../ColorpickerModal";

interface BaseColorCardProps {
  theme: DaisyUIThemeSearchParmsTypes["base"];
}

export function BaseColorCard({ theme }: BaseColorCardProps) {
  return (
    <div className="w-full  h-full gap-2 flex flex-col items-center justify-center">
      <h1 className="font-bold">base</h1>
      <div className="w-full  h-full gap-2 flex flex-wrap items-center justify-center ">
        {theme?.["base-100"] && (
          <ColorpickerModal
            theme={theme["base-100"] as any}
            theme_key="base-100"
            className="sm:w-1/2 md:w-1/3"
            bg_color="bg-base-100"
            colorKey={theme?.["base-100"].variable}
            oklchString={theme?.["base-100"].value}>
            <div className="cursor-pointer w-full  items-center flex flex-col p-2 text-sm bg-base-100 text-base-content rounded-lg gap-2 justify-between ">
              <div className="w-fit">
                {" "}
                {theme?.["base-100"].name} {theme?.["base-100"].variable}
              </div>
              <div className="text-xs line-clamp-2"> {theme?.["base-100"].value}</div>
            </div>
          </ColorpickerModal>
        )}
        {theme?.["base-200"] && (
          <ColorpickerModal
            theme={theme["base-200"] as any}
            theme_key="base-200"
            className="sm:w-1/2 md:w-1/3"
            bg_color="bg-base-200"
            colorKey={theme?.["base-200"].variable}
            oklchString={theme?.["base-200"].value}>
            <div className="cursor-pointer  items-center flex flex-col p-2 text-sm bg-base-200 text-base-content  rounded-lg gap-2 justify-between ">
              <div className="w-fit">
                {" "}
                {theme?.["base-200"].name} {theme?.["base-200"].variable}
              </div>
              <div className="text-xs line-clamp-2"> {theme?.["base-200"].value}</div>
            </div>
          </ColorpickerModal>
        )}
        {theme?.["base-300"] && (
          <ColorpickerModal
            theme={theme["base-300"] as any}
            theme_key="base-300"
            className="sm:w-1/2 md:w-1/3"
            bg_color="bg-base-300"
            colorKey={theme?.["base-300"].variable}
            oklchString={theme?.["base-300"].value}>
            <div className="cursor-pointer  items-center flex flex-col p-2 text-sm bg-base-300 text-base-content  rounded-lg gap-2 justify-between ">
              <div className="w-fit">
                {" "}
                {theme?.["base-300"].name} {theme?.["base-300"].variable}
              </div>
              <div className="text-xs line-clamp-2"> {theme?.["base-300"].value}</div>
            </div>
          </ColorpickerModal>
        )}
        {theme?.["base-content"] && (
          <ColorpickerModal
            theme={theme["base-content"] as any}
            theme_key="base-content"
            className="sm:w-1/2 md:w-1/3"
            bg_color="bg-base-content"
            colorKey={theme?.["base-content"].variable}
            oklchString={theme?.["base-content"].value}>
            <div className=" cursor-pointer  items-center flex flex-col p-2 text-sm bg-base-content text-base-100  rounded-lg gap-2 justify-between ">
              <div className="w-fit">
                {" "}
                {theme?.["base-content"].name} {theme?.["base-content"].variable}
              </div>
              <div className="text-xs line-clamp-2"> {theme?.["base-content"].value}</div>
            </div>
          </ColorpickerModal>
        )}
      </div>
    </div>
  );
}
