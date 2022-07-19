import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { CartProvider } from "react-use-cart";

export default function PageLayout() {
  return (
    <>
    <CartProvider>
      <Header />
      <Outlet />
      <Footer />
    </CartProvider>
    </>
  );
}
