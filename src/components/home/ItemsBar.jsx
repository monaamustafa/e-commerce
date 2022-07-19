import React from "react";
import { NavLink } from "react-router-dom";
import {BsArrowRightCircle} from 'react-icons/bs'
export default function ItemsBar() {
  return (
    <div className="container-fluid">
      <div className="ItemsBar d-flex justify-content-around">
        <div className="imgs img1">
          <h4>Minimal Chair</h4>
          <h2>Melbourne Armchair</h2>
          <div>
            <NavLink
              to={"/product"}
              className={({ isActive }) =>
                ["nav-link", isActive ? "active" : null]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              SHOP NOW
            <BsArrowRightCircle/>
              
            </NavLink>
          </div>
            
        </div>
        <div className="imgs img3">
          <h4>End Of May 10th</h4>
          <h2>Special Table Lamp</h2>
          <div>
            <NavLink
              to={"/product"}
              className={({ isActive }) =>
                ["nav-link", isActive ? "active" : null]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              SHOP NOW
            <BsArrowRightCircle/>
              
            </NavLink>
          </div>
        </div>
        <div className="imgs img2">
            <h4>New Design</h4>
          <h2>Dinning Chair</h2>
          <div>
            <NavLink
              to={"/product"}
              className={({ isActive }) =>
                ["nav-link", isActive ? "active" : null]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              SHOP NOW
            <BsArrowRightCircle/>
              
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
