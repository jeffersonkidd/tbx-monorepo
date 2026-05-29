import { createBrowserRouter } from "react-router";
import { AppLayout } from "./AppLayout";
import { Dashboard } from "./components/Dashboard";
import { Linktree } from "./components/Linktree";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "linktree", Component: Linktree },
    ],
  },
]);