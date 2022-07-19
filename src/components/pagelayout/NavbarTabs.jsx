import React, { useState } from "react";
import { Navbar, Button, Nav, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import * as ai from "react-icons/ai";
import "./style/test.css";
import CartList from "../products/CartList";
import { useCart } from "react-use-cart";

export default function MyNavbar() {
  const [cartList, setCartList] = useState(false);
  const showCartList = () => {
    console.log("ya raaab")
    setCartList(!cartList);
  };
  const {
    totalItems,
    
  } = useCart();
  
  return (
    <div >
    <div className="container ">
      <div className="d-flex MainBar justify-content-around">
        <Navbar >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <NavLink to={"/home"} className="navLink">
                  Home
                </NavLink>
                <NavLink to={"/product"} className="navLink">
                  Products
                </NavLink>
                <NavLink to={"/about"} className="navLink">
                  About Us
                </NavLink>
                <NavLink to={"/contactus"} className="navLink">
                  Contact Us
                </NavLink>
                <NavLink to={"/blogs"} className="navLink">
                  Blogs
                </NavLink>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
        <section className="d-flex justify-content-between">
          <div className="Icons d-flex">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            </div>
            <div className="cart-icon">
              <svg
                onClick={showCartList}
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-bag"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
              <div className="numOfClass">
                <p>{totalItems}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>
      <div className={cartList ? "listItems cartactive" : "listItems"}>
        <ai.AiOutlineClose className="close-icon" onClick={showCartList} />
        <h3>
          Cart List <span> {totalItems}</span>
        </h3>
        <CartList  />
      </div>
    </div>
  );
}
