import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Congrats() {
  return (
    <div className="container ">
      <div className="error d-flex">
        <div>
          <img src={require("../../images/checkout.png")} />
        </div>
        <div className="error-content">
          <h3>thank You for shopping with Us</h3>
          
          <NavLink to={"/home"}> home page</NavLink>
        </div>
      </div>
    </div>
  )
}
