import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, createRouter } from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen";

const queryClient = new QueryClient();
const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// biome-ignore lint/style/noNonNullAssertion: This is a root file, so we can be sure that the element exists
const rootElement = document.getElementById("app")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <NextUIProvider>
          <main className="font-body">
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
          </main>
        </NextUIProvider>
      </QueryClientProvider>
    </StrictMode>,
  );
}
