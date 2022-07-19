import React, { useState } from "react";
import { BsSearch } from 'react-icons/bs';
import { Form, Button, Dropdown } from "react-bootstrap";
import "./style/Header.css";
import AuthLog from '../auth/AuthLog';
function MainNav(props) {
  return (
    <div>
      <div className="container-fluid fNav">
        <div className="d-flex justify-content-around">
          <AuthLog/>
          <section className="MLogo">
            <h4>
              <a href="/home">MOON</a>
            </h4>
          </section>
          <div>
            <Form className="d-flex" id="searchForm">
              <Button id="searchButton" type="submit">
              <BsSearch/>

              </Button>
              <Form.Group className="mb-3 ">
                <Form.Control
                  type="search"
                  placeholder="Search here"
                  id="searchTerm"
                />
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainNav;
