import React from "react"
import Layout from "../components/Layout"
import Styledhero from "../components/Styledhero"
import { graphql } from "gatsby"
import Title from "../components/StyledTitle"
import Styles from "../css/about.module.css"
import Abouts from "../components/About/abouts"
import Styles2 from "../css/single-blog.module.css"
import Lokesh from "../images/lokesh.jpg"
import Ritik from "../images/ritik.jpg"
import Jyoti from "../images/jyoti.jpg"
import Album from "../components/album"

const about = ({ data }) => {
  return (
    <Layout>
      <Styledhero img={data.defaultBcg.childImageSharp.fluid} />
      <section className={Styles.about}>
        <Title title="about" subtitle="us" />

        <Abouts />
      </section>

      <Title title="our" subtitle="team" />
      <div className={Styles2.center}>
        <div class="row">
          <div class="col-sm">
            <div style={{ width: 18 + "rem", textAlign: "center" }}>
              <div class="card-body">
                <img src={Lokesh} style={{ borderRadius: 30 }}></img>
                <h5 class="card-title" style={{ marginTop: 20 }} >Mr.Lokesh Chugh</h5>
                <p class="card-text" style={{ textAlign: "center" }} >Founder and Chairman</p>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div style={{ width: 18 + "rem", textAlign: "center" }}>
              <div class="card-body">
                <img src={Jyoti} style={{ borderRadius: 30 }}></img>
                <h5 class="card-title" style={{ marginTop: 20 }}>Ms.Jyoti Gupta</h5>
                <p class="card-text" style={{ textAlign: "center" }}>President</p>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div style={{ width: 18 + "rem", textAlign: "center" }}>
              <div class="card-body">
                <img src={Ritik} style={{ borderRadius: 30 }}></img>
                <h5 class="card-title" style={{ marginTop: 20 }}>Mr.Ritik Shah</h5>
                <p class="card-text" style={{ textAlign: "center" }}>Content Head</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

      {/* <section className={Styles2.imagegallery}>
        <Title
          title=""
          subtitle="Achievements"
          style={{ marginTop: 80, marginBottom: -60 }}
        />
        <Title title="Mahapanchayat" subtitle="MUN" />
        <article style={{ marginBottom: 20 }}>
          Mahapanchayat MUN was held by Unnati on 27th and 28 th August, 2019 at
          Evergreen Public School where students used their oratory skills to
          discuss on different social issues. Young minds were molded to be
          better leaders. School level kids joined this event and they proved
          their point by a debate because debate and divergence of views can
          only enrich our history and culture.{" "}
        </article>
        <Album id="pyebFG5jdXZHZwW28" />
      </section> */}
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
