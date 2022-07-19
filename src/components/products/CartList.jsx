import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import * as gi from "react-icons/gi";
import * as ai from "react-icons/ai";
import "./style/product.css";
import { Link } from "react-router-dom";

function CartList() {
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();
  if (isEmpty)
    return (
      <div className="emptyCart text-center">
        <gi.GiShoppingBag className="icon" />
        <p>Your cart is empty</p>
      </div>
    );
  console.log(items);

  return (
    <>
      <section className="cartList">
        {items.map((item) => (
          <div className="d-flex" key={item.id}>
            <div className="cart-img-container">
              <img src={item.image} />
            </div>
            <div className="cart-content">
              <div>
                <p>
                  {item.quantity} x {item.name}
                </p>
                <p>{item.price}</p>
              </div>
              <div>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button onClick={() => removeItem(item.id)}>
                  <ai.AiOutlineDelete />
                </button>
              </div>
            </div>
          </div>
        ))}
        <Link to={"/checkout"} className="cart-btn"> Check Out </Link>
      </section>
    </>
  );
}
export default CartList;
