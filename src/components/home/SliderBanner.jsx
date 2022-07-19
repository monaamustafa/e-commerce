import { Carousel } from "react-bootstrap";
import React from "react";
import "./style/home.css";
import { NavLink } from "react-router-dom";
export default function SliderBanner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../images/slider1-store1-1920x800.jpg")}
          alt="Second slide"
        />

        <Carousel.Caption className="slider-content">
          <h4>Furniture New Chair</h4>
          <h3>Minimal Living Room</h3>
          <p>
            Brillant White Couch Regarding Sofa Set Living Room Furniture Moder
            High Quality Gargeous Inspirations
          </p>
          <NavLink to={"/product"} className={"shop-now"}>
            Show Now
          </NavLink>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../images/slider2-store1-1920x800.jpg")}
          alt="Third slide"
        />

        <Carousel.Caption className="slider-content">
          <h4>New Collection</h4>
          <h3>Stained Beech Stool</h3>
          <p>
            The new Danish classic, the Dark Stained Beech Stool has an elegant,
            organic design
          </p>

          <NavLink to={"/product"} className={"shop-now"}>
            Show Now
          </NavLink>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
