import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import * as gi from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
import LocationPanner from "../pagelayout/LocationPanner";

function CheckOut() {
  
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();
  const Navigate=useNavigate()
  const checkOutFun=()=>{
    items.map((item) => removeItem(item.id))
    console.log("done");
    Navigate("/congrats");

  }
  if (isEmpty)
    return (
      <div className="emptyCart text-center">
        <gi.GiShoppingBag className="icon" />
        <p>Your cart is empty</p>
      </div>
    );
  console.log(items);
  return (
    <div className="checkout">
      <LocationPanner />
      <div className="container">
        <section className="cartList">
          <Table striped bordered hover>
            <thead>
              <tr >
                <th className=" item-info">Item</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr>
                  <td className="d-flex ">
                    <div className="checkout-img">
                      <img src={item.image} />
                    </div>
                    <p> {item.name}</p>
                  </td>

                  <td>{item.price}</td>
                  <td >
                    <div className="d-flex item-qun ">
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    </div>
                    
                  </td>
                  <td>{item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Link to={"/product"} className="cart-btn">CONTINUE SHOPPING </Link>
          <button onClick={checkOutFun} className="cart-btn">checkout NOW </button>
        </section>
      </div>
    </div>
  );
}
export default CheckOut;
