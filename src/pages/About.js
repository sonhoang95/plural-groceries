import React from "react"
import "./About.css"
import Footer from "./Footer"
import about2 from "../images/about2.jpg"

export default function About() {
  return (
    <>
      <main>
        <section className="team"></section>
        <section className="message">
          <div className="message-text">
            <h2>Dedicated Teams</h2>
            <h2>For Your Dedicated Dreams.</h2>
            <p className="message-sub">
              Understanding the challenge with the Covid-19 pandemic, we started
              PluralGroceries in 2020. Our purpose is not only to provide
              exceptionally fast service but also guarantee fresh produces on a
              daily basis.
            </p>
            <p className="message-sub">
              By using PluralGroceries, you can save time by shopping directly
              on our website and we'll deliver the products right to your home.
            </p>
          </div>
          <div className="message-image">
            <img src={about2} alt="" />
          </div>
        </section>
        <section className="container">
          <div className="about-mission">
            <h1 className="about-mission-title">
              Our purpose is to nourish people & the planet.
            </h1>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
