import React from 'react'
import Title from "../StyledTitle"
import Styles from "../../css/contact.module.css"

const Contact = () => {
  return (
    <section className={Styles.contact}>
    <Title title="Contact" subtitle="us" />
    <div className={Styles.center}>
    <form action="https://formspree.io/unnati.knowledge@gmail.com" method="POST" className={Styles.form}>
    <div>
    <label htmlFor="name">Name</label>
    <input type="text" name="name" id="name" className={Styles.formControl} placeholder="Your name" required />
    </div>
    <div>
    <label htmlFor="email">Email</label>
    <input type="email" name="email" id="email" className={Styles.formControl} placeholder="email@example.com" required />
    </div>
    <div>
    <label htmlFor="message">Message</label>
    <textarea name="message" id="message" className={Styles.formControl} placeholder="Your Message" required/>
    </div>
    <div>
    <input type="submit" value="submit" className={Styles.submit} />
    </div>
    </form>
    </div>
    </section>
  )
}

export default Contact
