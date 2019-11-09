import React, { useState } from "react"
import { Link } from "gatsby"
import Styles from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import social from "../constants/social-icons"

const Navbar = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  return (
    <nav className={Styles.navbar}>
      <div className={Styles.navCenter}>
        <div className={Styles.navHeader}>
          <h3>Unnati</h3>
            <button type="button" className={Styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={Styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${Styles.navLinks} ${Styles.showNav}`
              : `${Styles.navLinks}`
          }
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/article">Articles</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <div className={Styles.dropdown}>
            <li>
              <Link to="_blank">Our Branches</Link>
            </li>
            <div className={Styles.dropdownmenu}>
              <ul>
                <li>
                  <Link to="/uthan">Uthan</Link>
                </li>
                <li>
                  <Link to="/udyat">Udyat</Link>
                </li>
                <li>
                  <Link to="/times">Unnati Times</Link>
                </li>
              </ul>
            </div>
          </div>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className={Styles.navSocialLinks}>
          {social.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
