import { Info, X } from "lucide-react";
import { useState } from "react";

interface IntroProps {

}

export function Intro({}:IntroProps){
const [open,setOpen] = useState(true)
if(!open) return null    
return (
  <div className="flex h-full w-full p-2 flex-col items-center justify-center">
    <div className="flex w-full justify-between gap-3">
      <div> 👈 Open side drawer to Edit themes</div>
      <div className="flex w-fit gap-2 rounded-xl border border-info p-2 text-sm text-info">
        <Info className="size-4" />
        if a theme doesn't look right try switching to dark it's dark/loight
        mode ☝️
      </div>
      <div className="flex items-center gap-2">
        Import and export ☝️{" "}
        <X
          onClick={() => setOpen(!open)}
          className="size-4 cursor-pointer text-error"
        />
      </div>
    </div>
  </div>
);
}
