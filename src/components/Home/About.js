import React from 'react'
import Title from '../StyledTitle'
import Styles from '../../css/about.module.css'
import img from '../../images/unnati.jpg'
import {Link} from 'gatsby'

const About = () => {
  return(
    <section className={Styles.about}>
     <Title title="About" subtitle="Unnati" />
     <div className={Styles.aboutCenter}>
     <article className={Styles.aboutImg}>
       <div className={Styles.imgContainer}>
       <img src={img} alt="About Image"/>
     </div>
     </article>
     <article className={Styles.aboutInfo}>
     <h5>A Not For Profit Organization</h5>
     <h6>Unnati - The knowledge hub for civil aspirants, is registered under the government of India.</h6>
     <h6>We host various events and also provide free UPSC guidance to UPSC aspirants.</h6>
     <button type="button" className="btn-primary"><Link to="/about">Read More</Link></button>
     </article>
     </div>
     </section>
  )
}

export default About;
