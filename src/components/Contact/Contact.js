import React from "react"
import Title from "../StyledTitle"
import Styles from "../../css/contact.module.css"

const Contact = props => {
  return (
    <section className={Styles.contact}>
      <Title title={props.title} subtitle={props.subtitle} />
      <div className={Styles.center}>
        <form
          action="https://formspree.io/unnati.knowledge@gmail.com"
          method="POST"
          className={Styles.form}
        >
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={Styles.formControl}
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className={Styles.formControl}
              placeholder="email@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="name">Contact</label>
            <input
              name="number"
              id="number"
              className={Styles.formControl}
              placeholder="Your contact number"
             />
          </div>
          <div>
            <label htmlFor="website">Website</label>
            <input
              name="website"
              id="website"
              className={Styles.formControl}
              placeholder="Your website if available"
             />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              className={Styles.formControl}
              placeholder="Your message"
              required
            />
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
