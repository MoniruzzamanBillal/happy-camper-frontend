import App from "@/App";
import { createBrowserRouter } from "react-router-dom";

import HomePage from "@/pages/HomePage";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";

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
      {
        path: "/product/detail",
        element: <ProductDetail />,
      },
    ],
  },
]);

export default router;
