import React, { useState } from "react"
import { Link } from "gatsby"
import Styles from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import social from "../constants/social-icons"
import logo from "../images/logo.jpg"

const Navbar = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  return (
    <nav
      className={Styles.navbar}
      style={{
        boxShadow:
          "0 4px 6px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className={Styles.navCenter}>
        <div className={Styles.navHeader}>
          <img alt="logo" src={logo} style={{ width: 60 }} />
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
            <Link to="/article/1">Articles</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <div className={Styles.dropdown}>
            <li>
              <Link to="_blank">Branches</Link>
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
            <Link to="/upcoming">Upcoming</Link>
          </li>
          <li>
            <Link to="/join">Join</Link>
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
