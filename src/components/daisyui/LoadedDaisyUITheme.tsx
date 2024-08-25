import { getDaisyUiColors } from "@/helpers/daisyui/daisyui-theme";
import { useState } from "react";
import { GenericColorCard } from "./DaisyUIColorThemeCards";

interface LoadedDaisyUIThemeProps {

}

export function LoadedDaisyUITheme({}:LoadedDaisyUIThemeProps){
    const [theme, setTheme] = useState(getDaisyUiColors());
return (
 <div className='w-full h-full flex flex-col items-center justify-center'>
    <div className="w-full h-full flex flex-wrap gap-2 items-center justify-center p-[5%]">
        {theme.map((theme) => (
          <GenericColorCard
             className="w-[48%] @md:w-1/3 @lg:w-[24%] h-full flex flex-col items-center justify-center"
            key={theme.name}
            theme_key={theme.name}
            theme={theme}
          />
        ))}
    </div>
 </div>
);
}


