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
import styles from "../css/single-blog.module.css"
import lebanon from "../images/lebanon.jpg"
import mountain from "../images/mountains.jpg"
import news from "../images/news.jpg"

const about = ({ data }) => {
  return (
    <Layout>
      {/* <Styledhero img={data.defaultBcg.childImageSharp.fluid} /> */}
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
                <img src={Lokesh} style={{ borderRadius: 30 }}></img>
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
                <img src={Jyoti} style={{ borderRadius: 30 }}></img>
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
                <img src={Ritik} style={{ borderRadius: 30 }}></img>
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
            style={{ marginTop: 120 }}
          />
          <article className={styles.article} style={{marginTop:'6%'}}>
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
              style={{
                borderRadius: 30,
                width: "30%",
                border: "1px solid black",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
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
              style={{
                borderRadius: 30,
                width: "30%",
                marginTop: "6%",
                border: "1px solid black",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            ></img>
          </article>
        </section>
      </div>

      <div className={Styles2.center}>
        <section className={Styles.about}>
          <article className={styles.article} style={{ marginBottom: 10 }}>
            <h4 style={{ marginTop: 15 }}>Newspaper Publication </h4>
            <p>
              {" "}
              It is said, "Kids saving the world > adults saving the world." It
              is important to inculcate the 'debate and discussion' culture in
              them. To do that MUN can be really helpful. Unnati organizes Model
              United Nations in different schools, our latest venture was
              organizing MUN at Evergreen Public School, Vasundhara Enclave
              where around 450 delegates form Dehi/NCR debated and discussed on
              various topics like sustainable development goals 2030 etc. Rabie
              Narsh, the ambassador of the republic of Lebanon and Naveen
              Sharma, President International Society for Cooperation and
              Development gave away the prize for the best delegate and the best
              speaker.{" "}
            </p>
            <img
              src={news}
              style={{
                borderRadius: 30,
                width: "30%",
                marginTop: "6%",
                border: "1px solid black",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            ></img>
          </article>
        </section>
      </div>

      <div className={Styles2.center}>
        <section className={Styles.about}>
          <article className={styles.article} style={{ marginBottom: 10 }}>
            <h4 style={{ marginTop: 15 }}>Video Publication </h4>
            <p>
              {" "}
              "With bad laws and good civil servants it is still possible to govern. But with bad civil servants even the best laws can't work. "
So to mould the top-notch civil servants of tomorrow Unnati: The knowledge hub for civil Aspirants conducted its first interactive session at Hansraj College on 8 April 2017. Experienced and honoured civil servants Jatin Narval, Dr. Sudhir, Amitabh Khare came to give some knowledge about the civil services exam to the aspirants.
The session was legit as the candidates went home with smile on their faces and new knowledge in their minds..{" "}
            </p>
            <div style={{ 
              width:'50%',
              marginTop:'6%',
              display: "block",
                marginLeft: "auto",
                marginRight: "auto"}}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3tK1JUOc-fM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
           </article>
        </section>
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
