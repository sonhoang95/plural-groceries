import React from "react"
import { Link } from "react-router-dom"

export default function HomeHero() {
  return (
    <div>
      <div className="home-introduction">
        <span className="accent-text">Fresh 100% produces</span>
        <h1>Discover new amazing grocery deals</h1>
        <p>
          Order your groceries from
          <em>
            <span className="accent-text">Plural Grocery</span>
          </em>
          with our easy to use app, and get your products delivered straight to
          your doorstep.
        </p>
        <Link to="/products" className="btn btn-default">
          Shop Now
        </Link>
      </div>
    </div>
  )
}
