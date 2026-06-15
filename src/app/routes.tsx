import { createBrowserRouter } from "react-router";
import { AppLayout } from "./AppLayout";
import { Dashboard } from "./components/Dashboard";
import { Linktree } from "./components/Linktree";
import { PasswordGate } from "./components/PasswordGate";

// Only the dashboard is gated; the linkinbio (linktree) stays public.
const GatedDashboard = () => (
  <PasswordGate>
    <Dashboard />
  </PasswordGate>
);

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: AppLayout,
      children: [
        // Public linkinbio at the root.
        { index: true, Component: Linktree },
        // Gated dashboard.
        { path: "dashboard", Component: GatedDashboard },
      ],
    },
  ],
  // Matches Vite's base ("/tbx-monorepo/" in prod, "/" in dev) so routes
  // resolve correctly when the app is served from a sub-path on GitHub Pages.
  { basename: import.meta.env.BASE_URL }
);