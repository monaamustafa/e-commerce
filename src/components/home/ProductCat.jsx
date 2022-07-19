import React from "react";
import './style/home.css'
export default function ProductCat() {
  return (
    <div className="productCat">
      <div className="container">
        <h3>Related Products</h3>
        <div className="d-flex justify-content-around">
        <div className="cat-Product">
            <div className="productCat-img">
              <img
                src="https://m2.alothemes.com/safira/media//catalog/category/decorative-258x290.jpg"
                alt="sdkjnjhs"
              />
            </div>
            <div className=" ProductCat-content">
              <h6>Decorative</h6>
              <p>11 items</p>
            </div>
          </div><div className="cat-Product">
            <div className="productCat-img">
              <img
                src="https://m2.alothemes.com/safira/media//catalog/category/chairs-258x290_1_11.jpg"
                alt="sdkjnjhs"
              />
            </div>
            <div className=" ProductCat-content">
              <h6>Decorative</h6>
              <p>11 items</p>
            </div>
          </div><div className="cat-Product">
            <div className="productCat-img">
              <img
                src="https://m2.alothemes.com/safira/media//catalog/category/lightings-258x290.jpg"
                alt="sdkjnjhs"
              />
            </div>
            <div className=" ProductCat-content">
              <h6>Decorative</h6>
              <p>11 items</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
