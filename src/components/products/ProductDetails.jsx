import React, { useEffect } from "react";
import getProductAction from "../../Redux/action/getProductAction";
import { connect } from "react-redux";
import LocationPanner from "../pagelayout/LocationPanner";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";
import * as ai from "react-icons/ai";
import * as bs from "react-icons/bs";
import * as fa from "react-icons/fa";
import * as gi from "react-icons/gi";
import "./style/product.css";
import { GrOverview } from "react-icons/gr";
import { BsFillCartPlusFill } from "react-icons/bs";


function ProductDetails(props) {
  const { addItem } = useCart();
  let { id } = useParams();
  let [productState, setProductState] = useState([]);
  let { products, getProducts } = props;
  useEffect(() => {
    getProducts();
    let hh = products.find((item) => item.id == id);
    setProductState(hh);
    console.log(productState);
  });
  return (
<>
<LocationPanner/>
<div className="container">
      <div className="d-flex justify-content-between pt-5">
        <div className="prod-img">
          <img src={productState.image} alt="sdkjnjhs" />
        </div>
        <div className="prod-cont">
          {productState && (
            <>
              <h1>{productState.name}</h1>
              <div className="prod-info">
                <div className="d-flex justify-content-between">
                  <p className="p-head">Brand </p>
                  <p>Prada</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="p-head">Availability: </p>
                  <p>In Stock</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="p-head">SKU </p> <p>30MB-05</p>
                </div>
              </div>
              <div>
                <ai.AiOutlineStar />
                <ai.AiOutlineStar />
                <ai.AiOutlineStar />
                <ai.AiOutlineStar />
                <ai.AiOutlineStar />
                <span> | Be the first to review this product</span>
              </div>
              <h3>${productState.price}</h3>
              <hr />

              <div className="add-cart">
                <p>
                  A pair of twill woven shorts featuring slanted front pockets,
                  buttoned back pockets, a zip pocket, buttoned waist, and
                  keychain loop.
                </p>
                <div className="add-to-cart-form">
                  <button
                    className="add-to-cart-btn"
                    onClick={() => addItem(productState)}
                  >
                    Add To Cart
                  </button>
                </div>
                <div className="d-flex add-to-wish-list">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                  <p> Add to wish list</p>
                </div>
              </div>
              <div className="container-fluid">
                <div className="d-flex why-us justify-content-between">
                  <div className="why-us-details">
                    <div className="d-flex">
                      <div>
                        <bs.BsTruck className="icon" />
                      </div>
                      <div className="details">
                        <p className="P-head">FREE DELIVERY</p>
                        <p>Free Delivery on today</p>
                      </div>
                    </div>
                  </div>
                  <div className="why-us-details">
                    <div className="d-flex">
                      <div>
                        <gi.GiPresent className="icon" />
                      </div>
                      <div className="details">
                        <p className="P-head">INTEREST FREE FINANCE</p>
                        <p>On all orders over $150</p>
                      </div>
                    </div>
                  </div>
                  <div className="why-us-details">
                    <div className="d-flex">
                      <div>
                        <fa.FaMoneyBillWave className="icon" />
                      </div>

                      <div className="details">
                        <p className="P-head">PAYMENT SECURED</p>
                        <p>Safe with Our Payment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="Related-poducts">
        <h3>Related Products</h3>
        <div className="d-flex justify-content-around">
          {products &&
            products.slice(0, 5).map((product, index) => {
              return (
                <div className="related-ProductCard" key={product.id}>
                  <div className="productCard-img">
                  <Link to={`/product/${product.id}`}> <img src={product.image} alt="sdkjnjhs" /></Link>
                  </div>
                  <div className=" related-ProductCard-content">
                    <h6>{product.name}</h6>
                    <p>${product.price}</p>
                    <hr />
                    <div className="productIcons d-flex justify-content-around">
                        <ai.AiOutlineHeart className="icon" />
                        <Link className="icon" to={`/product/${product.id}`}>
                          <GrOverview  />
                        </Link>

                        <BsFillCartPlusFill
                          className="icon"
                          onClick={() => addItem(product)}
                        />
                      </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>

</>
  );
}
let mapStateToProps = (state) => {
  return {
    products: state.productList,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProductAction()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
