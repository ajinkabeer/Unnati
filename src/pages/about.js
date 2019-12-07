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

          <section className={Styles.about}>
            <div className={Styles.aboutCenter}>
              <article>
                <div>
                  <img
                    src={lebanon}
                    style={{
                      border: "1px solid black",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "65%",
                      marginTop: -15,
                    }}
                  ></img>
                </div>
              </article>
              <article className={Styles.aboutInfo}>
                <h5>Letter of Appreciation From the Republic of Lebnon</h5>
                <p>
                  {" "}
                  Opportunities don't happen. You create them. Only those who
                  has readiness to go too far can possibly find out how far they
                  can go. Team Unnati feels empowered and ecstatic by the
                  overwhelmed gesture shown to us by his Excellency Mr. Rabie
                  Narsh(Ambassador, Embassy of Lebanon) and sending us a letter
                  of Appreciation as a token of respect for our service to
                  society.
                </p>
              </article>
            </div>
          </section>
        </section>
      </div>

      <section className={Styles.about}>
        <div className={Styles.aboutCenter}>
          <article>
            <div>
              <img
                src={mountain}
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "85%",
                  marginTop: -15,
                }}
              ></img>
            </div>
          </article>
          <article className={Styles.aboutInfo}>
            <h5>Unnati on Mountains</h5>
            <p>
              {" "}
              Every mountain top is within reach if you just keep climbing.
              Scrambling the steep slopes and rattling over various cuts is not
              everyone’s cup of tea. Unnati salutes the audacity, wisdom and
              courage of our team member Nitish Singh on successfully conquering
              the Mt.Stok Kangri and hoisting Unnati's flag at the peak of Mt.
              Stok Kangri.
            </p>
          </article>
        </div>
      </section>

      <section className={Styles.about}>
        <div className={Styles.aboutCenter}>
          <article>
            <div>
              <img
                src={news}
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "50%",
                  marginTop: "-3%",
                }}
              ></img>
            </div>
          </article>
          <article className={Styles.aboutInfo}>
            <h5>Newspaper Publication</h5>
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
              speaker.
            </p>
          </article>
        </div>
      </section>

      <section className={Styles.about}>
        <div className={Styles.aboutCenter}>
          <article>
            <div>
              <a
                className="btn-primary"
                href="https://www.youtube.com/watch?v=3tK1JUOc-fM&feature=emb_title"
                style={{ margilLeft: 10 }}
              >
                Youtube Link
              </a>
            </div>
          </article>
          <article className={Styles.aboutInfo}>
            <h5>Video Publication</h5>
            <p>
              {" "}
              "With bad laws and good civil servants it is still possible to
              govern. But with bad civil servants even the best laws can't work.
              " So to mould the top-notch civil servants of tomorrow Unnati: The
              knowledge hub for civil Aspirants conducted its first interactive
              session at Hansraj College on 8 April 2017. Experienced and
              honoured civil servants Jatin Narval, Dr. Sudhir, Amitabh Khare
              came to give some knowledge about the civil services exam to the
              aspirants. The session was legit as the candidates went home with
              smile on their faces and new knowledge in their minds..
            </p>
          </article>
        </div>
      </section>

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
