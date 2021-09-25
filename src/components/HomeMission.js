import React from "react"
import home2 from "../images/home2.jpg"
import { Link } from "react-router-dom"

export default function HomeMission() {
  return (
    <div className="mission-container">
      <div className="mission-text">
        <h1>Don't Leave the Comfort of Your House, We've Got You Covered.</h1>
        <p>
          ’Tis the back-to-routine season, so turbocharge your meals for
          breakfast, lunch and dinner. Check out our innovative, flavor-packed
          new products.
        </p>
        <Link to="/products" className="btn btn-default">
          Browse What's New
        </Link>
      </div>
      <div className="mission-image-container">
        <img src={home2} alt="computer-payment" />
      </div>
    </div>
  )
}
