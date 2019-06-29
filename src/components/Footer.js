import React from 'react'
import Styles from '../css/footer.module.css'
import links from '../constants/links'
import social from '../constants/social-icons'
import {Link} from 'gatsby'

const Footer = () => {
  return(
   <footer className={Styles.footer}>
   <div className={Styles.links}>
   {links.map((item,index)=>{
     return <Link key={index} to={item.path}>{item.text}</Link>
   })}
   </div>
   <div className={Styles.icons}>
   {social.map((item,index)=>{
     return <a key={index} href={item.url}>
     {item.icon}
     </a>
   })}
   </div>
   </footer>
  )
}


export default Footer;
