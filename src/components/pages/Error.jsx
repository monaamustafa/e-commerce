import React from "react";
import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <div className="container ">
      <div className="error d-flex">
        <div>
          <img src="https://m2.alothemes.com/safira/media/wysiwyg/alothemes/404.jpg" />
        </div>
        <div className="error-content">
          <h3>Error 404 not found</h3>
          Error 404 not found We're sory but the page you are looking for does
          not exist. You could return to{" "}
          <NavLink to={"/home"}> home page</NavLink>
        </div>
      </div>
    </div>
  );
}
