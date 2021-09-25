import React, { useState, useEffect, useRef } from "react"
import { NavLink } from "react-router-dom"
import { links } from "../data"
import * as AiIcons from "react-icons/ai"
import * as FaIcons from "react-icons/fa"
import "./Navbar.css"

export default function Navbar({ cart }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const linksContainerRef = useRef()
  //setting theme based on OS settings
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
    if (prefersDark) {
      setIsDarkTheme(true)
    }
  }, [])

  //setting dark theme for the body element
  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }, [isDarkTheme])

  useEffect(() => {
    if (isOpen) {
      linksContainerRef.current.classList.add("show")
    } else {
      linksContainerRef.current.classList.remove("show")
    }
  }, [isOpen])

  function handleToggleTheme() {
    setIsDarkTheme(!isDarkTheme)
  }

  function handleMobileMenu() {
    setIsOpen(!isOpen)
  }

  const cartCount = cart.reduce((total, product) => {
    return (total += product.quantity)
  }, 0)

  return (
    <header className="main-head">
      <div className="hamburger-icon">
        {!isOpen ? (
          <AiIcons.AiOutlineMenu
            className="mobile-menu"
            onClick={handleMobileMenu}
          />
        ) : (
          <AiIcons.AiOutlineClose
            onClick={handleMobileMenu}
            className="mobile-menu"
          />
        )}
      </div>
      <nav className="navbar">
        <div className="logo-container">
          <h1 className="logo">PluralGrocery&reg;</h1>
          <p className="logo-subtitle">Freshness you can taste.</p>
        </div>
        <ul className="nav-links" ref={linksContainerRef}>
          {links.map(link => (
            <li className="nav-item" key={link.id}>
              <NavLink
                exact
                activeClassName="active"
                to={link.url}
                onClick={handleMobileMenu}
              >
                {link.text}
              </NavLink>
            </li>
          ))}

          <li>
            <NavLink
              to="/cart"
              className="nav-item nav-cart btn btn-accent"
              onClick={handleMobileMenu}
            >
              Cart ({cartCount})
            </NavLink>
          </li>
        </ul>
      </nav>
      <button className="theme-toggle" onClick={handleToggleTheme}>
        {isDarkTheme ? <FaIcons.FaSun /> : <FaIcons.FaMoon />}
      </button>
    </header>
  )
}
