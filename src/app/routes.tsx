import { createBrowserRouter } from "react-router";
import { AppLayout } from "./AppLayout";
import { Dashboard } from "./components/Dashboard";
import { Linktree } from "./components/Linktree";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: AppLayout,
      children: [
        { index: true, Component: Dashboard },
        { path: "linktree", Component: Linktree },
      ],
    },
  ],
  // Matches Vite's base ("/tbx-monorepo/" in prod, "/" in dev) so routes
  // resolve correctly when the app is served from a sub-path on GitHub Pages.
  { basename: import.meta.env.BASE_URL }
);