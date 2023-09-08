import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { ShippingForm } from "./components/ShippingForm";
import { Contact } from "./components/Contact";
import {CartPage }from "./components/CartPage";
import { BanhoPage } from "./components/BanhoPage";
import { AlimentosPage } from "./components/AlimentosPage";
import { BrinquedosPage } from "./components/BrinquedosPage";
import { ProductList } from "./components/ProductList";






export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/produtos/Banho",
    element: <BanhoPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/envios",
    element: <ShippingForm />,
  },
  {
    path: "/cart",
    element: <CartPage />,

  },
  {
    path: "/produtos/alimentos",
    element: <AlimentosPage />,

  },
  {
    path: "/produtos/brinquedos",
    element: <BrinquedosPage/>,

  },
  {
    path: "/productList",
    element: <ProductList/>,

  },
  
  
]);
