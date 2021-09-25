import React from "react"
import "./Home.css"
import Review from "../components/Review"
import HomeHero from "../components/HomeHero"
import HomeIntro from "../components/HomeIntro"
import HomeMission from "../components/HomeMission"
import Footer from "./Footer"

export default function Home() {
  return (
    <>
      <section className="home-layout">
        <HomeHero />
      </section>
      <section className="intro">
        <HomeIntro />
      </section>
      <section className="reviews">
        <Review />
      </section>
      <section className="mission">
        <HomeMission />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
