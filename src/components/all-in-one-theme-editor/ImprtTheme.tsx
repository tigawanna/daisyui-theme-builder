import { useEffect, useState } from "react";
import { daisyUIThemeSearchParamsSchema, DaisyUIThemeSearchParmsTypes } from "./utils/schema";

interface ImportThemeProps {
  theme: DaisyUIThemeSearchParmsTypes;
  updateWholeTheme: (theme: Record<string, any>) => void;
}

export function ImportTheme({ theme, updateWholeTheme }: ImportThemeProps) {
  const samplePlaceholder = `
        {
        "primary": "#ffd900",
        "primary-content": "#4c4528",
        "secondary": "#ffa400",
        "secondary-content": "#5d3f18",
        "accent": "#ffa551",
        "accent-content": "#180a02",
        "neutral": "#060023",
        "neutral-content": "#c4c5d0",
        "base-100": "#ffffff",
        "base-200": "#e8e8e8",
        "base-300": "#d1d1d1",
        "base-content": "#291334",
        "success": "#00a96e",
        "error": "#ff5861",
        "info": "#00b5ff",
        "warning": "#ffbe00",
        "--animation-btn": "0.25s",
        "--animation-input": ".2s",
        "--border-btn": "1px",
        "--btn-focus-scale": "0.95",
        "--rounded-badge": "1.9rem",
        "--rounded-box": "1rem",
        "--rounded-btn": "1.9rem",
        "--tab-border": "2px",
        "--tab-radius": "0.7rem"
        }
  `;  
  const [input, setInput] = useState("");
  function handleImport() {
    if (!input.startsWith("{")) {
      setInput((prev) => "{" + input);
    }
    if (!input.endsWith("}")) {
      setInput((prev) => input + "}");
    }
  }
  useEffect(() => {
    if (input === "") return;
    try {
    const theme = daisyUIThemeSearchParamsSchema.parse(JSON.parse(input)); 
        console.log(theme);   
    }
    catch(e:any){
        console.log("========= Error =========",e.message);
    }
  }, [input]);
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <textarea
        placeholder={samplePlaceholder}
        className="textarea textarea-bordered h-full min-h-[70vh] w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

