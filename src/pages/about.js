import React from "react"
import Layout from "../components/Layout"
import Title from "../components/StyledTitle"
import Styles from "../css/about.module.css"
import Abouts from "../components/About/abouts"
import Styles2 from "../css/single-blog.module.css"
import Team from "../components/About/team"
import Patrons from "../components/About/patrons"
import Achievements from "../components/About/achievements"
import JourneySoFar from "../components/About/journey"

const about = () => {
  return (
    <Layout>
      <section className={Styles.about}>
        <Title title="about" subtitle="us" />
        <Abouts />
      </section>
      <Title title="our" subtitle="team" />
      <div className={Styles2.center}>
        <Team />
      </div>
      <br />
      <section className={Styles.about}>
        <JourneySoFar />
      </section>
      <div className={Styles2.center}>
        <section className={Styles.about}>
          <Title title="" subtitle="Achievements" style={{ marginTop: 120 }} />
          <Achievements />
        </section>
      </div>

      <Title title="Patrons" subtitle=" and Associates" />
      <div style={{ marginLeft: 10, marginRight: 10, marginBottom: 50 }}>
        <Patrons />
      </div>
    </Layout>
  )
}

export default about
