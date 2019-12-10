import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/StyledTitle"
import Styles from "../css/about.module.css"
import Abouts from "../components/About/abouts"
import Styles2 from "../css/single-blog.module.css"
import styles from "../css/single-blog.module.css"
import lebanon from "../images/lebanon.jpg"
import mountain from "../images/mountains.jpg"
import news from "../images/news.jpg"
import ImageGallery from "react-image-gallery"
import { journey } from "../components/About/links"
import Team from "../components/About/team"
import Patrons from "../components/About/patrons"
import Achievements from "../components/About/achievements"

const about = ({ data }) => {
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
        <div className={Styles.aboutCenter}>
          <article className={Styles.aboutImg}>
            <div className={Styles.imgContainer}>
              <ImageGallery
                items={journey}
                showPlayButton={false}
                showFullscreenButton={false}
                showIndex={false}
                infinite={false}
              />
            </div>
          </article>
          <article className={Styles.aboutInfo}>
            <h5>Journey so far</h5>
            <p>
              {" "}
              It seems like just now, only a few days ago UNNATI was formed but
              it has been a whole year. We cannot believe how far we have come
              in just 365 days, all credits to the love and support you guys
              have shown. We look back to the past 2 years with an awe. How
              amazing it has been! How much we have grown up in just 2 years! We
              have you guys to thank for it. Let's promise to continue the
              growth and reach impeccable heights
            </p>
          </article>
        </div>
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

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "abbout.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default about
