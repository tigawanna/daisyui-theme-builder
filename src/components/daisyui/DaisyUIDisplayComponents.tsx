export function DaisyUIDisplayComponents() {
  return (
    <div className="flex h-full w-full flex-wrap items-center justify-center gap-2 divide-x divide-y p-[5%]">
      {/* steps */}
      <div className="flex flex-wrap items-center justify-center gap-1 p-5">
        <h1 className="w-full text-center text-3xl font-bold">Steps</h1>
        <ul className="steps steps-vertical lg:steps-horizontal">
          <li className="step step-primary">Register</li>
          <li className="step step-primary">Choose plan</li>
          <li className="step">Purchase</li>
          <li className="step">Receive Product</li>
        </ul>
      </div>

      {/* card   */}
      <div className="flex flex-wrap items-center justify-center gap-1 p-5">
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
      <div className="flex w-full flex-wrap items-center justify-center gap-1 p-5">
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
