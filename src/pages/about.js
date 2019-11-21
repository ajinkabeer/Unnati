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
import ImageGallery from "react-image-gallery"

const journey = [
  {
    original:
      "https://lh3.googleusercontent.com/gynX5Luht1v1USb4F5_7YyYFvGcDsGzKPZgzy6-fCA8gY12I0CwfvCXjewpN7-lgqAaAEH1odZRDFcJHmxeRYKYDjIqEnx7KiPt_5Gq3_d0DYWtoNvgjww1BC06lM6J_b5jVlca0U8k7PXRd6Q3vERsvY1NYD22J7WN-kh6MO-5aiYUqPsm_x-BB6C2lQTvYiC-yDZMlo16fiIOYAfvHqmVb9PPUsoLyFD66Ow17NG4zCLsvznnY0YLUG3dJT8uz_ToFPZkZHxoNhrIqUjX-mYh7h_Ily6t6-DCnK-CQ2zV4HLg4RjeiJx7gpC79LTgx_6b8Slfcw_RQLwk1FFyold47dYu6RYb9EdZ8YSxKujVhH2RSnh45sekIhw0nvz3NXyi4k0Or92NURjt6Nto0QLH6fRz3iU3d7NkqqGt1bHiL9v3336AoyFSOcgIJMU9ppe8Gn176r9Qfs9CAaM16M0BYSNHvY1Q02Y54Dye2QxPfl7IXildfzR1aPJ0xVnSMzi4nYtT7UEWir5Kf1HM-4xoMEVxHvx9hzyJZ-k9k-317j6WjdzCbhqHeWK6J5nTr-GN7zUUq3wz3FhcXKL7b5ghunIdwu4uZa39GKBAeURNhvJiFQ8HCOTBWQvE9llsDJqZlZVsxqz6aTkNuPgobuh1qgGF5fe10wcIONIwZMjELOOayGWS-6GoLoy2EzjZPLM1E90-qhAbyzuHgFcSC9luBUPERJjZuy62KKYx4966ZtYg=w720-h592-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/bRH0NKDv0CBzf7oH4l6RBxCnVwwXscQUoPd4EV0YvM_SOIuO9RLJTRagTFfD-TdGhxsY2PYtxoQBnbRXkXKpPKJIJ46ynD2S7pdkgdRpHHZ_DoeIfIs5O8PCP-8QmmtY5teb-kSU3KKjexGkBkHlANgDbbBCjCROgveW9EbR3y23Mi8ZwpHBAiZH5J7WQ_Itph_K6DSgoWqF_C39D7srxcYfMDku3DbWRtdmokgeVDDlnYivkwefyfv2ystXWzGtZMo1LQs4flhFGHEejV3CMljq8Y-Z60uoZjn4dR7yHltkM-Fd6WGK-z-o93-snzsqJyTk_lRuvIfOlZR4pUbqdztwPJs2g7k8627qm-KGthRETCdolMccisnis9FqOe7SNNejbKZue4BL4-CDDgSpc4Beu5_4-HztveMSLjtG4LOt6ALWowSNpW3sILCJCmVReaz345bkLwv0ORk4RHcGcz0Dl2gsuhb_ukAJLQWzPik1OWj1-g6CkZz7sGRL36XCEMwDjPb0haC5aDZqGH6eEIFUOyT7LMsWq4IhNc9bqNP0a-K8kN5YPeSqjZdNZMQmPkO_HupxAWkH2D6OehGIVqzuPT4Nz7UJSv-65h4B_ujhRXYln_PGYhIq_cIKfPXi6xlkqsL14xrGd2wqifitk-mo_ReLG1U2aFXAs41e8c432_AEjmkjalowEUptlSMsA8CA7DmfGkKrJAT3_0Hy5_3k3nCo2m6T_j49Gsk98uhU_po=w719-h960-no",
  },

  {
    original:
      "https://lh3.googleusercontent.com/7ntONBcSPJlBL1D4oaGEJyHEQpBdcSmGg44ANxSUZsCM1SESZMFw_27FJt08xPYVqvv6TGPNINd5dMVdYHUOE6I8sw9VcVQgVh2b29MV_PVROCAoAC4t0_JBCHK6OAbDR1iQpd-ILzebtWBrT7GBjbZCF_cUqc0WKvB8-w04jtWYvwaVu46RNVyUBrwL0o5oifTH7M2LFdSbhb4TC33MD7UaIrglWC_FHX9q7kK8sQgGL9UPJ4STBmz1RkhPRUEV7GgSl7m3H5hY62Yq5jl-dPhbdHk5ejedRPvZWQHshpx45irmtSvXzUQpWlArWi9Gml18aavMQYF1CkUnLmY-HnPP5PrD-UbVyFJqlyLUavUWSnpKQf-ySpJ2C8civ_0Gvsnx-WMQV3Xzmr4oFSZd0kVBQVhvupR-UZjdVLTA3mb5t4ZispdqPcMuKOVgF91vmSxLf9kSh8PalGhbr9O0yR1xIczjldLwMfwL7CpyNNyvzQ6Mu-Hv0Daw1Ld5taPMaY9KTg6J71taXwlsbhKcont2nisB2aLXp-gTuYn8-pLf6FxihRaF1f1_on3qCgrGoC2042aE4mY7QpJgRBkqt4QtF_WSIuTjNwGI0SngNfGMNfRhtGbHfne5tiQ5wuHvJ73Ykoi59KMH-OS6A8SahQ99uCWjC4JQI6qX5mpU7_3vSoD5OU1VzVjEW5vXyXoDtVdWsuA379LKxZCnZ-AqXCChp0mGZyiGAffjR6rTsSYBKaLt=w720-h960-no",
  },
]

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
              <article className={Styles.aboutImg}>
                <div className={Styles.imgContainer}>
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
          <article className={Styles.aboutImg}>
            <div className={Styles.imgContainer}>
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
          <article className={Styles.aboutImg}>
            <div className={Styles.imgContainer}>
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
              >
                Watch it on youtube
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
