import React from "react"
import Layout from "../components/Layout"
import Title from "../components/StyledTitle"
import Styles from "../css/about.module.css"
import Events from "../components/Events/Events"

const events = () => {
  return (
    <Layout>
      <section className={Styles.about}>
        <Title title="our" subtitle="events" />
        <Events />
      </section>
    </Layout>
  )
}


export default events
