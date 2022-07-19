import React from "react";
import BlogDetails from "../blogs/BlogDetails";
import LocationPanner from "../pagelayout/LocationPanner";

export default function Blog() {
  return (
    <>
      <LocationPanner />
      <div className="blog">
      <div className="container">
        <div className="d-flex justify-content-between">
          <BlogDetails/>
          <BlogDetails/>
        </div>
      </div>
    </div>
    </>
  );
}
