import { createBrowserRouter } from "react-router-dom";
import { App } from "../root";

export const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <App />,
        errorElement: <div>Failed to fetch</div>,
      },
      {
        path: "/about",
        element: <div>About Page</div>,
      },
      {
        path: "/onboarding",
        element: <App />,
      },
    ],
  },
]);
