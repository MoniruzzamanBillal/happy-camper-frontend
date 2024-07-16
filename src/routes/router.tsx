import App from "@/App";
import { createBrowserRouter } from "react-router-dom";

import HomePage from "@/pages/HomePage";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import ProductCart from "@/pages/ProductCart";
import Checkout from "@/pages/Checkout";
import AboutUs from "@/pages/AboutUs";
// import AddProduct from "@/pages/AddProduct";
import Test from "@/pages/Test";
import ProductTable from "@/pages/ProductTable";
import AddProduct from "@/pages/AddProduct";

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
        path: "/about-us",
        element: <AboutUs />,
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
      {
        path: "/all-product",
        element: <ProductTable />,
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "/test",
        element: <Test />,
      },
    ],
  },
]);

export default router;
