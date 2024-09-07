import { Info, X } from "lucide-react";
import { useState } from "react";

export function Intro() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-2">
      <div className="flex w-full justify-between gap-3">
        <div className="hidden lg:flex">
          {" "}
          👈 Open side drawer to Edit themes
        </div>
        <div className="flex w-fit gap-2 rounded-xl border border-info p-2 text-sm text-info">
          <Info className="size-4" />
          theme doesn't look right? try switching to dark/loight ☝️
        </div>
        <div className="hidden items-center gap-2 md:flex">
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
