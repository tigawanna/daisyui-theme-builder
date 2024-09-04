import { X } from "lucide-react";
import { useSearchParamsTheme } from "./utils/use-search-params-theme";
import { ReactColorPicker } from "./ReactColorPicker";
import { twMerge } from "tailwind-merge";

interface EditThemeDrawerProps {

}

export function EditThemeDrawer({}:EditThemeDrawerProps){
const {searchParams:{edit},updateTheme} =useSearchParamsTheme()
function saveColor(color_key: string, new_color: string){
    updateTheme(color_key,new_color)
}
return (
  <div className="drawer drawer-end sticky top-[12%] z-20">
    <input id="edit-theme-drawer" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content"></div>
    <div className="drawer-side">
      <label
        htmlFor="edit-theme-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      />
      <ul className={twMerge("menu min-h-full w-[90%] bg-base-200 justify-center text-base-content md:w-[60%] ", edit?.bgColor)}>
        <label
          htmlFor="edit-theme-drawer"
          aria-label="close sidebar"
          className="drawer-overlay sticky top-4"
        >
          <X />
        </label>
        {/* Page content here */}
        <div className="p-3 max-w-[95%]">
          {edit && (
            <ReactColorPicker
              saveColor={saveColor}
              oklchString={edit?.oklchString ?? ""}
              colorKey={edit?.colorKey}
            />
          )}
        </div>
      </ul>
    </div>
  </div>
);
}
