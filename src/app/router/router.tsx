import { createBrowserRouter } from "react-router-dom"
import { Layout } from "../../features/layout/Layout"
import { HomePage } from "../../pages/HomePage/HomePage"
import { ProductPage } from "../../pages/ProductPage/ProductPage"
import { CartPage } from "../../pages/CartPage/CartPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "product/:id",
        element: <ProductPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);