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
import styles from "../css/single-blog.module.css"
import lebanon from "../images/lebanon.jpg"
import mountain from "../images/mountains.jpg"

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
        <div class="row" style={{ marginBottom: 15 }}>
          <div class="col-sm">
            <div style={{ width: 18 + "rem", textAlign: "center" }}>
              <div class="card-body">
                <img alt="lokesh" src={Lokesh} style={{ borderRadius: 30 }}></img>
                <h5 class="card-title" style={{ marginTop: 20 }}>
                  Mr.Lokesh Chugh
                </h5>
                <p class="card-text" style={{ textAlign: "center" }}>
                  Founder and Chairman
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div style={{ width: 18 + "rem", textAlign: "center" }}>
              <div class="card-body">
                <img alt="jyoti" src={Jyoti} style={{ borderRadius: 30 }}></img>
                <h5 class="card-title" style={{ marginTop: 20 }}>
                  Ms.Jyoti Gupta
                </h5>
                <p class="card-text" style={{ textAlign: "center" }}>
                  President
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div style={{ width: 18 + "rem", textAlign: "center" }}>
              <div class="card-body">
                <img alt="ritik" src={Ritik} style={{ borderRadius: 30 }}></img>
                <h5 class="card-title" style={{ marginTop: 20 }}>
                  Mr.Ritik Shah
                </h5>
                <p class="card-text" style={{ textAlign: "center" }}>
                  Content Head
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

      <div className={Styles2.center}>
        <section className={Styles.about}>
          <Title
            title=""
            subtitle="Achievements"
            style={{ marginTop: 120, marginBottom: -60 }}
          />
          <article className={styles.article}>
            <h4>Letter of Appreciation From the Republic of Lebnon </h4>
            <p>
              {" "}
              Opportunities don't happen. You create them. Only those who has
              readiness to go too far can possibly find out how far they can go.
              Team Unnati feels empowered and ecstatic by the overwhelmed
              gesture shown to us by his Excellency Mr. Rabie Narsh(Ambassador,
              Embassy of Lebanon) and sending us a letter of Appreciation as a
              token of respect for our service to society.
            </p>
            <img
              src={lebanon}
              alt="lebanon"
              style={{
                borderRadius: 30,
                width: "30%",
                border:'1px solid black',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            ></img>
          </article>
        </section>
      </div>

      <div className={Styles2.center}>
        <section className={Styles.about}>
          <article className={styles.article} style={{ marginBottom: 10 }}>
            <h4 style={{ marginTop: 15 }}>Unnati on Mountains </h4>
            <p>
              {" "}
              Every mountain top is within reach if you just keep climbing.
              Scrambling the steep slopes and rattling over various cuts is not
              everyone’s cup of tea. Unnati salutes the audacity, wisdom and
              courage of our team member Nitish Singh on successfully conquering
              the Mt.Stok Kangri and hoisting Unnati's flag at the peak of Mt.
              Stok Kangri.{" "}
            </p>
            <img
              src={mountain}
              alt="mountain"
              style={{
                borderRadius: 30,
                width: "30%",
                marginTop:'6%',
                border:'1px solid black',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            ></img>
          </article>
        </section>
      </div>

      {/* <section className={Styles2.imagegallery}>
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
