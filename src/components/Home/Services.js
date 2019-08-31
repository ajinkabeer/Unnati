import React from "react"
import Title from "../StyledTitle"
import Styles from "../../css/services.module.css"
import Services from "../../constants/services"
import { Link } from "gatsby"

const services = () => {
  return (
    <section className={Styles.services}>
      <Title title="our" subtitle="branches" />
      <div className={Styles.center}>
        {Services.map((item, index) => {
          return (
            <article key={index} className={Styles.service}>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
              <Link to={item.link} className="btn-primary">
                {" "}
                {item.title}
              </Link>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default services
