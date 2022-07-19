import React from 'react'
import { NavLink } from "react-router-dom";

export default function BlogDetails() {
  return (
   
    <div className="blog-details">
    <div className="blog-img">
      <img src="https://m2.alothemes.com/safira/media/magefan_blog/blog-furniture-3.jpg" />
      <div className="blog-date">
        <p>03</p>
        <p>JAN</p>
      </div>
    </div>
    <div className="blog-content">
      <h3>Daughter Celebrity Opens Up About Having Her</h3>
      <p>
        People are constantly changing things about themselves--- from
        their hair styles to their clothes, to even the way they
        physically look.
      </p>
      <NavLink to={""}> Read More</NavLink>
    </div>
  </div>
  )
}
