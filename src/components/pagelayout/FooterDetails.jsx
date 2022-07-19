import React from "react";
import { Form,Button } from "react-bootstrap";
import { BsSearch } from 'react-icons/bs';
export default function FooterDetails() {
  return (
    <section className="footerDetials">
      <div className="containeer-fluid">
        <div className="d-flex">
          <div className="details">
            <h6>Information</h6>
            <ul>
              <li>About Us</li>
              <li>Delivery Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Contact Us</li>
              <li>Returns</li>
            </ul>
          </div>
          <div className="details">
            <h6>Customer Service</h6>
            <ul>
              <li>Site Map</li>
              <li>Wish List</li>
              <li>Brands</li>
              <li>Gift Certificates</li>
              <li>Affiliate</li>
              <li>Specials</li>
            </ul>
          </div>
          <div className="details">
            <h6>Join Our Newsletter</h6>
            <p>Sign up for our e-mail to get latest news.</p>
            <div className="d-flex justify-content-between">
          <Form className="d-flex" id="searchForm">
            <Button id="" type="submit">
              <BsSearch/>
            </Button>
            <Form.Group className="mb-3 ">
              <Form.Control
                type="search"
                placeholder="Search here"
                id=""
              />
            </Form.Group>
          </Form>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
}
