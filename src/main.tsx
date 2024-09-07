import * as React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { Loader } from "lucide-react";
import { App } from "./App";

export interface RouterCntextTypes {}

export const router = createRouter({
  routeTree,
  defaultNotFoundComponent() {
    return (
      <div className="flex h-full min-h-screen w-full flex-col items-center justify-center">
        <div className="bg-bg-emphasized flex flex-col items-center justify-center rounded-lg p-[5%]">
          <h1 className="text-9xl font-bold">404</h1>
          <p className="text-2xl">Page Not Found</p>
        </div>
      </div>
    );
  },
  defaultPendingComponent: () => (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center">
      <div className="rounded-full border-b-2 border-primary">
        <Loader className="animate-spin" />
      </div>
    </div>
  ),
  defaultErrorComponent: ({ error }: { error: Error }) => (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center">
      <div className="rounded-lg bg-error p-[2%] text-error-content">
        <p className="">{error.name}</p>
        <p className="text-sm">{error.message}</p>
      </div>
    </div>
  ),
  context: {},
  defaultPreload: "intent",
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// biome-ignore lint/style/noNonNullAssertion: <explanation>
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
