import { Swap } from "./Swap";

interface ActionsProps {}

export function Actions({}: ActionsProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 divide-y p-[5%]">
      {/* drop down */}
      <div className="w-[80%]">
        <h1 className="text-3xl font-bold">drop down</h1>
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
      <div className="flex w-full flex-col items-center justify-center gap-5 bg-base-200 md:flex-row">
        {/* form */}
        <form className="flex flex-col gap-3 p-[5%]">
          <h1 className="text-3xl font-bold">form</h1>
          <label className="input input-bordered flex items-center gap-2 rounded-lg">
            Name
            <input type="text" className="grow" placeholder="Daisy" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Email
            <input type="text" className="grow" placeholder="daisy@site.com" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <kbd className="kbd kbd-sm">⌘</kbd>
            <kbd className="kbd kbd-sm">K</kbd>
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <span className="badge badge-info">Optional</span>
          </label>
          <h1 className="text-xl font-bold">checkbox</h1>
          <div className="flex w-full gap-1">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-xs"
            />
            <input
              type="checkbox"
              defaultChecked
              className="checkbox-primary checkbox checkbox-sm"
            />
            <input
              type="checkbox"
              defaultChecked
              className="checkbox-secondary checkbox checkbox-md"
            />
            <input
              type="checkbox"
              defaultChecked
              className="checkbox-accent checkbox checkbox-lg"
            />
          </div>
          {/* file input */}
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="w-full text-xl font-bold">file</h1>
            <div className="flex items-center justify-center gap-2">
              {/* xs */}
              <input
                type="file"
                className="file-input file-input-bordered file-input-xs w-full max-w-xs"
              />
              {/* sm */}
              <input
                type="file"
                className="file-input file-input-bordered file-input-primary file-input-sm w-full max-w-xs"
              />
            </div>
          </div>
          {/* radio */}
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">radio</h1>
            <div className="flex gap-2">
              <input
                type="radio"
                name="radio-8"
                className="radio-primary radio"
                defaultChecked
              />
              <input
                type="radio"
                name="radio-8"
                className="radio-secondary radio"
                defaultChecked
              />
              <input
                type="radio"
                name="radio-8"
                className="radio-accent radio"
                defaultChecked
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">range</h1>
            <input
              type="range"
              min={0}
              max="100"
              value="40"
              className="range range-accent range-xs"
            />
            <input
              type="range"
              min={0}
              max="100"
              value="50"
              className="range range-primary range-sm"
            />
            <input
              type="range"
              min={0}
              max="100"
              value="60"
              className="range range-secondary range-md"
            />
          </div>

          <div className="rating rating-lg">
            <input
              type="radio"
              name="rating-9"
              className="rating-hidden bg-primary"
            />
            <input
              type="radio"
              name="rating-9"
              className="mask mask-star-2 bg-primary"
            />
            <input
              type="radio"
              name="rating-9"
              className="mask mask-star-2 bg-primary"
              defaultChecked
            />
            <div className="rating rating-half rating-lg">
              <input
                type="radio"
                name="rating-10"
                className="bg-green-500 mask mask-half-1 mask-star-2 bg-primary"
                defaultChecked
              />
            </div>
            <input
              type="radio"
              name="rating-9"
              className="mask mask-star-2 bg-primary"
            />
            <input
              type="radio"
              name="rating-9"
              className="mask mask-star-2 bg-primary"
            />
          </div>
        </form>
      </div>
      {/* Buttons  and bages*/}
      <div className="flex w-full flex-col items-center justify-center gap-5 md:flex-row">
        {/* buttons */}
        <div className="flex w-full flex-wrap justify-center gap-5">
          <h1 className="w-full text-center text-3xl font-bold">Buttons</h1>
          <button className="btn">Button</button>
          <button className="btn btn-neutral">Neutral</button>
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-accent">Accent</button>
          <button className="btn btn-ghost">Ghost</button>
          <button className="btn btn-link">Link</button>
        </div>
        {/* modal */}
        <div className="flex w-full flex-col justify-center gap-5">
          <h1 className="w-full text-center text-3xl font-bold">Modal</h1>
          <div className="flex w-full items-center justify-center gap-5">
            <button
              className="btn btn-primary"
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
        {/* badge */}
        <div className="flex w-full flex-wrap justify-center gap-5">
          <h1 className="w-full text-center text-3xl font-bold">badge</h1>
          <div className="badge">default</div>
          <div className="badge badge-neutral">neutral</div>
          <div className="badge badge-primary">primary</div>
          <div className="badge badge-secondary">secondary</div>
          <div className="badge badge-accent">accent</div>
          <div className="badge badge-ghost">ghost</div>
        </div>
      </div>

      {/* steps */}
      <div className="flex w-full flex-wrap items-center justify-center gap-5">
        <h1 className="w-full text-center text-3xl font-bold">Steps</h1>
        <ul className="steps steps-vertical lg:steps-horizontal">
          <li className="step step-primary">Register</li>
          <li className="step step-primary">Choose plan</li>
          <li className="step">Purchase</li>
          <li className="step">Receive Product</li>
        </ul>
      </div>

      {/* card   */}
      <div className="flex w-full flex-wrap items-center justify-center gap-5">
        <h1 className="w-full text-center text-3xl font-bold">Card</h1>
        <div className="card w-96 bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      {/* chat bubble   */}
      <div className="flex w-full flex-wrap items-center justify-center gap-5">
        <h1 className="w-full text-center text-3xl font-bold">Chat bubble</h1>
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-primary">
            What kind of nonsense is this
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-secondary">
            Put me on the Council and not make me a Master!??
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-accent">
            That's never been done in the history of the Jedi. It's insulting!
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-success">
            You have been given a great honor.
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-warning">
            To be on the Council at your age.
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-error">
            It's never happened before.
          </div>
        </div>
      </div>
    </div>
  );
}
