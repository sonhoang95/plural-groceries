import React from "react"
import home1 from "../images/home1.jpg"
import { Link } from "react-router-dom"

export default function HomeIntro() {
  return (
    <div className="section-container">
      <div className="intro-image-container">
        <img src={home1} alt="" />
      </div>
      <div className="intro-text">
        <h1>Fun is What We Are, Happiness is What We Promise to Deliver.</h1>
        <p>
          From can’t-miss products to expert team members to shopping secrets,
          discover food-joy with our insider guides.
        </p>
        <Link to="/about" className="btn btn-default">
          Who We Are
        </Link>
      </div>
    </div>
  )
}
