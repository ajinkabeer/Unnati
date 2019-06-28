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
     <p>Unnati: The Knowledge Hub For Civil Aspirants is a not for profit organisation registered under the government of India. Started by Mr. Lokesh Chugh under the able guidance of Mr. Oscar Fernandez (MP, Rajya Sabha and Chief Patron, Unnati), Unnati is working for the upliftment of youth in different sectors from 18th of December, 2016. Unnati aims at providing free guidance to those UPSC aspirants who have knowledge and talent but lack adequate resources. </p>
     <p>We host various events and also provide free UPSC guidance to UPSC aspirants.</p>
     <button type="button" className="btn-primary"> Read More</button>
     </article>
     </div>
     </section>
  )
}

export default About;
