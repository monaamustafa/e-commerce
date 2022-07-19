// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import LocationPanner from "../pagelayout/LocationPanner";
import * as bs from "react-icons/bs";
import * as ai from "react-icons/ai";

export default function About() {
  return (
    <>
      <LocationPanner />
      <div className="container about">
        <section className="d-flex Mission-Vision">
          <div className="Mission-Vision-img">
            <img src="https://m2.alothemes.com/safira/media/wysiwyg/alothemes/about-image.jpg" />
          </div>
          <div className="Mission-Vision-content">
            <div>
              <h6>Mission</h6>
              <p>
                Curabitur sed rutrum neque. Nullam facilisis pellentesque
                porttitor. Vestibulum tempus nunc eu tincidunt eleifend. Mauris
                at nunc ultricies, egestas augue in, tempus risus curabitur
                cursus sem lectus. Curabitur sed rutrum neque. Nullam facilisis
                pellentesque porttitor. Vestibulum tempus nunc eu tincidunt
                eleifend. Mauris at nunc ultricies, egestas augue in, tempus
                risus curabitur cursus sem lectus.
              </p>
            </div>
            <div>
              <h6>Vision</h6>
              <p>
                Nulla sed pellentesque lorem. Phasellus vel nisi sed dui varius
                aliquet sus pendisse et elementum. isagittis odio arcu, ac
                volutpat lacus gravida. Nam tempus purus eu purus tincidunt
                sagittis. Ut porta rutrum ligula, in ferme tum purus pretium
                vel. Praesent sit amet odio non sem rutrum. Nulla sed
                pellentesque lorem. Phasellus vel nisi sed dui varius aliquet
                sus pendisse et elementum.
              </p>
            </div>
          </div>
        </section>
        <section className="text-center">
          <h5>Reasons to choose Us</h5>
          <p>Top 5 Reasons Why You Should Shop With Us</p>
          <div className="d-flex justify-content-between">
            <div className="Reasons">
              <p className="ReasonsIcon">
                <bs.BsCurrencyDollar />
              </p>
              <p>Lowest Price Guaranteed</p>
            </div>
            <div className="Reasons">
              <p className="ReasonsIcon">
                <ai.AiOutlineGift />
              </p>
              <p>Free UK Delivery</p>
            </div>
            <div className="Reasons">
              <p className="ReasonsIcon">
                <ai.AiFillShop />
              </p>
              <p>Shop Online & In store</p>
            </div>
            <div className="Reasons">
              <p className="ReasonsIcon">
                <bs.BsGem />
              </p>
              <p>30 Days Returns Policy*</p>
            </div>
            <div className="Reasons">
              <p className="ReasonsIcon">
                <ai.AiOutlineTrophy />
              </p>
              <p>Leading Brands</p>
            </div>
          </div>
        </section>
        <section className="text-center">
          <h5>Meet Our Team</h5>
          <p>Meet our awesome people who made Barch successful like now</p>
          <div className="d-flex justify-content-evenly text-center">
            <div>
              <div>
                <img src="https://m2.alothemes.com/safira/media/magiccart/magicslider/e/m/employee-2.png" />
              </div>
              <h6>Mr Claudio</h6>
              <p>CEO & Founder Urban Outfit</p>
            </div>
            <div>
              <div>
                <img src="https://m2.alothemes.com/safira/media/magiccart/magicslider/e/m/employee.png" />
              </div>
              <h6>Mr Albert</h6>
              <p>Founder Urban Outfit</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
