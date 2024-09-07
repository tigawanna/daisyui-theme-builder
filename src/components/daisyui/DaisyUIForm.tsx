export function DaisyUIForm() {
  return (
    <form className="flex w-[90%] flex-col items-center justify-center gap-3 bg-base-200 p-[5%] md:w-[60%]">
      <h1 className="text-3xl font-bold">form</h1>
      {/* inputs */}
      <div className="flex w-full flex-col gap-2">
        <h1 className="text-xl font-bold">inputs</h1>
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
        <label className="input input-bordered">
          <input
            type="file"
            className="file-input file-input-bordered file-input-primary w-full max-w-xs"
          />
        </label>
      </div>
      {/* clickable inputs */}
      <div className="flex w-full flex-wrap items-center justify-center gap-5">
        {/* checkbox */}
        <div className="flex flex-col items-center justify-center rounded-lg bg-base-100 p-4">
          <h1 className="text-sm">checkbox</h1>
          <div className="flex w-full items-center justify-center gap-2">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox-primary checkbox checkbox-sm"
            />
            <input
              type="checkbox"
              defaultChecked
              className="checkbox-secondary checkbox checkbox-sm"
            />
            <input
              type="checkbox"
              defaultChecked
              className="checkbox-accent checkbox checkbox-sm"
            />
          </div>
        </div>

        {/* radio */}
        <div className="flex flex-col items-center justify-center rounded-lg bg-base-100 p-4">
          <h1 className="text-sm">radio</h1>
          <div className="flex items-center justify-center gap-2">
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
        {/* rating */}
        <div className="flex flex-col items-center justify-center rounded-lg bg-base-100 p-4">
          <h1 className="text-sm">rating</h1>
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
                className="mask mask-half-1 mask-star-2 bg-green-500 bg-primary"
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
        </div>
      </div>
      {/* range */}
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <h1 className="text-sm">range</h1>
        <input
          type="range"
          min={0}
          max="100"
          value="40"
          className="range range-accent range-xs"
          onChange={() => {}}
        />
        <input
          type="range"
          min={0}
          max="100"
          value="50"
          onChange={() => {}}
          className="range range-primary range-sm"
        />
        <input
          type="range"
          min={0}
          max="100"
          value="60"
          onChange={() => {}}
          className="range range-secondary range-md"
        />
      </div>
    </form>
  );
}
