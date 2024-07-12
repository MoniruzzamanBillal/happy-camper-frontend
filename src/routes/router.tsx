import App from "@/App";
import { createBrowserRouter } from "react-router-dom";

import HomePage from "@/pages/HomePage";
import Products from "@/pages/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);

export default router;
