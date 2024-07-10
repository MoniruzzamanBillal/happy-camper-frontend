import App from "@/App";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
