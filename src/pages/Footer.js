import React from "react"
import {
  FaFacebookF,
  FaTwitter,
  FaSnapchatGhost,
  FaInstagram,
} from "react-icons/fa"
import "./Footer.css"
import { Link } from "react-router-dom"
import { links } from "../data"

export default function Footer() {
  return (
    <div className="footer">
      <footer>
        <div className="container">
          <div className="row">
            <div className="footer-nav">
              <h3>Services</h3>
              <ul>
                {links.map((link, index) => (
                  <li key={index}>
                    <Link path to={link.url}>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-text">
              <h3>PluralGrocery</h3>
              <p>
                Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis
                tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel
                in justo.
              </p>
            </div>
            <div className="footer-social">
              <a href="/">
                <FaFacebookF />
              </a>
              <a href="/">
                <FaTwitter />
              </a>
              <a href="/">
                <FaSnapchatGhost />
              </a>
              <a href="/">
                <FaInstagram />
              </a>
            </div>
          </div>

          <p className="copyright">PluralGrocery© 2021</p>
        </div>
      </footer>
    </div>
  )
}
