interface ActionsProps {}

export function Actions({}: ActionsProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2">
      {/* drop down */}
      <div className="w-[80%]">
        <div className="navbar rounded-box bg-base-300">
          <div className="flex-1 px-2 lg:flex-none">
            <a className="text-lg font-bold">daisyUI</a>
          </div>
          <div className="flex flex-1 justify-end px-2">
            <div className="flex items-stretch">
              <a className="btn btn-ghost rounded-btn">Button</a>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost rounded-btn"
                >
                  Dropdown
                </div>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content z-[1] mt-4 w-52 rounded-box bg-base-100 p-2 shadow"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Buttons  */}
      <div className="flex w-full flex-wrap items-center justify-center gap-2">
        <div className="w-full text-center">Buttons</div>
        <button className="btn">Button</button>
        <button className="btn btn-neutral">Neutral</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-ghost">Ghost</button>
        <button className="btn btn-link">Link</button>
      </div>
      {/*  */}
      <div className="flex w-full items-center justify-center gap-2">
        <button
          className="btn"
          onClick={() =>
            (
              document.getElementById("my_modal_1") as HTMLDialogElement
            ).showModal()
          }
        >
          open modal
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="text-lg font-bold">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}
