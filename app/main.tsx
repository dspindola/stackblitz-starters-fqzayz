import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import "./base.css";

const router = createRouter({ routeTree });

const root = document.getElementById("root") as HTMLElement;

if (!root?.innerHTML) {
  createRoot(root).render(<RouterProvider router={router} />);
}

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
