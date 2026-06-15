import { RouterProvider } from 'react-router';
import { router } from './routes';

// Vercel Analytics is mounted once at the app root in main.tsx.
export default function App() {
  return <RouterProvider router={router} />;
}
