import React,{useState} from 'react'
import {Link} from 'gatsby'
import Styles from '../css/navbar.module.css'
import {FaAlignRight} from 'react-icons/fa'
import links from '../constants/links'
import social from '../constants/social-icons'

const Navbar = () => {
  const [isOpen,setNav] = (useState(false));
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  return(
   <nav className={Styles.navbar}>
   <div className={Styles.navCenter}>
   <div className={Styles.navHeader}>
  <h3>Unnati</h3>
    <button type="button" className={Styles.logoBtn} onClick={toggleNav}>
   <FaAlignRight className={Styles.logoIcon}/>
   </button>
   </div>
   <ul
          className={
            isOpen
              ? `${Styles.navLinks} ${Styles.showNav}`
              : `${Styles.navLinks}`
          }
        >
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            )
          })}
        </ul>
   <div className={Styles.navSocialLinks}>
   {social.map((item,index)=>{
     return <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
     {item.icon}
     </a>
   })}
   </div>
   </div>
   </nav>
  )
}

export default Navbar
