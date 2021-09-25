import "./Review.css"
import React, { useState, useEffect } from "react"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"
import { FaQuoteRight } from "react-icons/fa"
import { people } from "../data"

export default function App() {
  const [reviews, setReviews] = useState([])
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    setReviews(people)
  }, [])

  useEffect(() => {
    const timerId = setTimeout(() => {
      checkLastReview()
    }, 3000)

    return () => {
      clearTimeout(timerId)
    }
  })

  function checkLastReview() {
    if (current === reviews.length - 1) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }

  function handleNextReviewClick() {
    checkLastReview()
  }

  function handlePrevReviewClick() {
    if (current === 0) {
      setCurrent(reviews.length - 1)
    } else {
      setCurrent(current - 1)
    }
  }

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>
          Reviews
        </h2>
      </div>
      <div className="section-center">
        {reviews.map((review, index) => (
          <article
            key={index}
            className={index === current ? "activeSlide" : ""}
          >
            <img src={review.image} alt={review.name} className="person-img" />
            <h4>{review.name}</h4>
            <p className="title">{review.title}</p>
            <p className="text">{review.quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        ))}
        <button className="prev" onClick={handlePrevReviewClick}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={handleNextReviewClick}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}
