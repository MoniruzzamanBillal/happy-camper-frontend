import App from "@/App";
import { createBrowserRouter } from "react-router-dom";

import HomePage from "@/pages/HomePage";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import ProductCart from "@/pages/ProductCart";
import Checkout from "@/pages/Checkout";

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
      {
        path: "/cart",
        element: <ProductCart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

export default router;
