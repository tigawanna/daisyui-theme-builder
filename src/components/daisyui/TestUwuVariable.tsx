import { ReactColorPicker } from "@/components/react-color/ReactColorPicker";

interface TestUwuVariableProps {}

export function TestUwuVariable({}: TestUwuVariableProps) {
  function updateUwuCssvariable(oklch:string) {
    document.documentElement.style.setProperty("--uwu", oklch);
  }
  function saveColor(colorKey:string,new_oklch:string) {
    document.documentElement.style.setProperty(colorKey, new_oklch);
  }
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3">
      <div className="size-[200px] bg-uwu flex justify-center items-center p-5">uwu</div>
      <div className="flex justify-between gap-2 items-center text-xl">
        <button className="btn " onClick={() => updateUwuCssvariable("70% 0.1 44.87")}>
          pink uwu
        </button>
        <button className="btn " onClick={() => updateUwuCssvariable("70% 0.2042 314.07")}>
          purple uwu
        </button>
        <div className="w-full">
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn"
            // @ts-expect-error
            onClick={() => document?.getElementById("my_color_picker_modal")?.showModal()}>
            open modal
          </button>
          <dialog id="my_color_picker_modal" className="modal w-full">
             <div className="modal-box bg-base-100 min-w-fit ">
              <ReactColorPicker
                saveColor={saveColor}
                oklchString="70% 0.1 44.87"
                colorKey="--uwu"
              />
            </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
          </dialog>
        </div>
      </div>
    </div>
  );
}
