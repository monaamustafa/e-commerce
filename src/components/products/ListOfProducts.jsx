import React, { useEffect } from "react";
import getProductAction from "../../Redux/action/getProductAction";
import { connect } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import LocationPanner from "../pagelayout/LocationPanner";
import { Form } from "react-bootstrap";
import { useCart } from "react-use-cart";
import "./style/product.css";
import * as ai from "react-icons/ai";
import { GrOverview } from "react-icons/gr";
import { BsFillCartPlusFill } from "react-icons/bs";

function ListOfProducts(props) {
  let [query, setQuery] = useState("");
  let [unMatch, setunMatch] = useState(false);
  let [match, setMatch] = useState("");
  let [showWatchState, setshowWatchState] = useState(true);
  let [showChairsState, setShowChairsState] = useState(true);
  let [productState, setProductState] = useState();
  let [realproductState, setRealProductState] = useState();
  let { products, getProducts } = props;
  const { addItem } = useCart();
  useEffect(() => {
    getProducts();
    setProductState(products);
    setRealProductState(products);
    console.log(productState);
  }, [products]);
  useEffect(() => {
    if (query) {
      search();
      console.log("ff");
    } else {
      setProductState(products);
      setRealProductState(products);
      console.log(productState);
    }
  }, [query]);
  const test = () => {
    console.log(match);
  };
  const showchairs = () => {
    setShowChairsState(!showChairsState);
    console.log(showChairsState);
    setRealProductState(products);
    if (showChairsState) {
      setProductState(
        realproductState.filter((item) => item.category == "chairs")
      );
    } else setProductState(products);
  };
  const showClocks = () => {
    setshowWatchState(!showWatchState);
    setRealProductState(products);
    if (showWatchState) {
      setProductState(
        realproductState.filter((item) => item.category == "watch")
      );
    } else setProductState(products);
  };
  const showAll = () => {
    setRealProductState(products);
    setProductState(products);
  };
  let search = () => {
    if (query) {
      setProductState(
        realproductState.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        )
      );
      console.log(productState);
      if (productState.length === 0) {
        setunMatch(true);
      } else {
        setunMatch(false);
      }
    }
  };
  return (
    <>
      <LocationPanner />
      <div className="container">
        <div className="d-flex justify-content-between sectionProduct">
          <div className="filterSection ">
            <h3>Search Producr</h3>
            <div>
              <input
                type="text"
                placeholder={"Search Character"}
                className={"input"}
                onChange={(event) => setQuery(event.target.value)}
                value={query}
              />
            </div>
            <div>
              <h3> Product Categories </h3>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1" >One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form>
                <div className="mb-3">
                  <Form.Check type="checkbox" onClick={showAll} label="ALL" />
                  <Form.Check
                    onClick={showClocks}
                    type="checkbox"
                    label="watch"
                  />
                  <Form.Check
                    type="checkbox"
                    onClick={showchairs}
                    label="Chairs"
                  />
                  <Form.Check type="checkbox" label="Sofas" />
                </div>
              </Form>
            </div>
            <div>
              <h3> Manufacturer </h3>
              <Form>
                <div className="mb-3">
                  <Form.Check
                    type="checkbox"
                    id="default-checkbox"
                    label="Chanel"
                  />
                  <Form.Check
                    type="checkbox"
                    id="default-checkbox"
                    label="Prada"
                  />
                  <Form.Check
                    type="checkbox"
                    id="default-checkbox"
                    label="Dior"
                  />
                  <Form.Check
                    type="checkbox"
                    id="default-checkbox"
                    label="Versace"
                  />
                </div>
              </Form>
            </div>
          </div>
          <div className="productSection d-flex  flex-con ">
            {productState &&
              productState.map((product, index) => {
                return (
                  <div className="productCard" key={product.id}>
                    <div className="productCard-img">
                      <Link to={`/product/${product.id}`}>
                        <img src={product.image} alt="sdkjnjhs" />
                      </Link>
                    </div>
                    <div className="productCard-content">
                      <Link to={`/product/${product.id}`}>
                        {" "}
                        <h6>{product.name}</h6>
                      </Link>
                      <p>{product.price}</p>
                      <hr />
                      <div className="productIcons d-flex justify-content-around">
                        <ai.AiOutlineHeart className="icon" />
                        <Link className="icon" to={`/product/${product.id}`}>
                          <GrOverview />
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
export default connect(mapStateToProps, mapDispatchToProps)(ListOfProducts);
