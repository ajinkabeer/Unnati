import React  from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/StyledTitle"
import Styles2 from "../css/single-blog.module.css"
import Styles from "../css/about.module.css"
import ImageGallery from "react-image-gallery"

const udyats = [
  {
    original:
      "https://lh3.googleusercontent.com/UJxdvv9psWyeP8O1MDZvEEmtRrUW-1OuEAw9T-bW1-f1nBk75MTh0CizBY6CnivL1-iVIW7JMlB4awB89IcTEcd5kAk5U8yZFaTmPOA1XrBmU3Efs8rj9KobankqHFbI81mwI3oll5hL3ztudLeFgVyxfTZqfhVDMepidEAOMjHfGf39tRO8xxJ6FchKsjlOhXIhDPN80lCn-6swDg7AM6XUWDSkCtuuUvhE6DFbvjbA_W0Sk9iri2npiUX42iSf5PPGcNmhAjVMZNsUzQr5xlu5KAy6kFn-TuK48aGoFQUINXfUwsljLo9bTL4ZbpNdStRgeVOpI5WjaXKnAArh4d6JHtR4tAkiqwIeYjopinPxP0zW7wogSajHwcSQ7x5ubClduRErAMlgWJ2HRbBDkmZFvPHqFFmL2TyVffxvAw7WUGVfvoOeNIiT50eLnKYhgGMuAywzyF6atNamWHED2ihap4h_u0KjdObDq1bqx___vWmgAdRK7RvSEl1CchuPVTqo8hZIMUs2wLdKdqScrOVzIiQUQ0PT0OnIEMv6w73fk0u9g8s_Eb9VhIIfUxVuKjeVX9QY0jyOXgDwr1zjL5ixpILATn0eEk56WU-vrRLlGzfpUg98cOhil9UHtpGRNhQQKU-Fpa8G_uqgjxBxkRR8IDYJu18YppCOWmp1N2_Q_2peT2lTP_Cw06O_XINNXVTCN_rnwRLNo0KEzQUjHHY_--u5706MDFfu9e5AQDWK9k8=w1024-h455-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/qzRBmhVnwqZ6_f0w8Dflz8qmeP5zAd87TlmExKsqHyJNEBpUY55oqur4fUs9Q-EaZRzNNQbkOjjtCU_EdUWMo2Nh7r5ePlWmZLSvibrTPuUXdtULjQUCevol1H7k_dyYcYanntPkr56mPdXcTOgVmGXGhf3mmMLmJJgRTVvsFDM1GNEF4pjbFqP-WXjIc4MXhXISercSCy4iLDOfWOzUBjGuOdXK5DEnCQg2oAm-4_CtVBI-YADsv6K_Awh8A7Bpm0rE-hdXGMDJ1nk_W9_gLUXVgiLwqVkvww5-ICNtWoxbpuHm_oXgUozFP5ASpum9kz93LtxMpTI-KhYS9MrXjsst7XAaQFFClm_3tMK7BxyR3JRkY03cBbrQ27zXcrf5-Fx26bkyTcjciErC-acQZMepOLhItLH1VS_wiJR7WVKquRjm1N5ocizUiZBh-sF8FIirH_BQ5FiorrvK9PFphGS6B0yy3EcBEu31fT72Zlr-fIAcMKC9aqQek34o6JYYDDqT62jLzrVvIMmDaT9iatyZNjEB3gpgXm0ATHv6TaRI2qdwF7q2YatTf-nNbZhmaZOXUogXRen64zBasJqsXeANw2iv_PsKKMho81zbulyxxHLQxwZmbX4-y701BRSr3OZh-Rjs5gGgtIg6hQ28QRJhLX-BzlS7ojVqGvfGWk1OL4W0a-95kIZSWJ6vAt_ruWhs-8GwttwDqPpWFU2UZExw7obP2AnwfdYvj-Gpyt-zdI8=w720-h540-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/wWx-GUdkZr6YMDXjkY2jndG-yHPmIVpb8BcgLLWsXqydmUYBPnJIsGVMh5lvIQbC8PoUPF_i4OWyLyxa96R7wAhFr_LUedFmpMafQxqkwNnLid3LXQv-qg2PbZUxYcC09hA-Z5HkwF8_XQLm1ET1m4T7ebZe5It9sbltO1LbSRmBtV0CnrqacLMFUDVXxn8JJYfp26sSb7ABL_Isn-ugwGn0fvERErSPL3oRB1p0ObailryNL4LuZVgmWK1rwx6rO__9kGdRcZy4kDfdJNBqn0i4KvDk5YnjUTqTOhYrdnmHgeWldVWxqyrmQqUJK_nZDKrIx6-WU2_EWHAQtHbH5b1h3yTz9hTw0IJu-tM7oLYh-YQuhLIrP6z8ui0AQXyS_UYbbpInT57atqt2CB7_L1znnCJJI9wIjWjysdb1Vfx970eP_iq__nXbYW1TVqnvzKh5za6nzLCn1XAfttMCuVEadYO5LKF_XsUqgaBwa3-ntfbj7ePA7EPIgnJwrRukCvRobEQ55nmEqOc0uK8A061JuFldfWhRxp29QJVrJO_gp7JWsDL8pt6EqFf4ocd6rvJb7ZrrYSWRVSL1yR7jv0Rv1t_kcmlSghAayUX7TK0y6Dyk5mYfI_tGpvJbHEPvBhx-koetOze-PcrRTzt5S8hO3t8s8GljOIS1WV-tfALdMOMgsgjueI5vete9C93mGNtCvl55T2bC72UhcR38ouhEfGS4Yj8SlNae8E6ip88Akso=w720-h540-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/wWx-GUdkZr6YMDXjkY2jndG-yHPmIVpb8BcgLLWsXqydmUYBPnJIsGVMh5lvIQbC8PoUPF_i4OWyLyxa96R7wAhFr_LUedFmpMafQxqkwNnLid3LXQv-qg2PbZUxYcC09hA-Z5HkwF8_XQLm1ET1m4T7ebZe5It9sbltO1LbSRmBtV0CnrqacLMFUDVXxn8JJYfp26sSb7ABL_Isn-ugwGn0fvERErSPL3oRB1p0ObailryNL4LuZVgmWK1rwx6rO__9kGdRcZy4kDfdJNBqn0i4KvDk5YnjUTqTOhYrdnmHgeWldVWxqyrmQqUJK_nZDKrIx6-WU2_EWHAQtHbH5b1h3yTz9hTw0IJu-tM7oLYh-YQuhLIrP6z8ui0AQXyS_UYbbpInT57atqt2CB7_L1znnCJJI9wIjWjysdb1Vfx970eP_iq__nXbYW1TVqnvzKh5za6nzLCn1XAfttMCuVEadYO5LKF_XsUqgaBwa3-ntfbj7ePA7EPIgnJwrRukCvRobEQ55nmEqOc0uK8A061JuFldfWhRxp29QJVrJO_gp7JWsDL8pt6EqFf4ocd6rvJb7ZrrYSWRVSL1yR7jv0Rv1t_kcmlSghAayUX7TK0y6Dyk5mYfI_tGpvJbHEPvBhx-koetOze-PcrRTzt5S8hO3t8s8GljOIS1WV-tfALdMOMgsgjueI5vete9C93mGNtCvl55T2bC72UhcR38ouhEfGS4Yj8SlNae8E6ip88Akso=w720-h540-no",
  },
]

const udyat = ({ data }) => {
  return (
    <Layout>
      <section className={Styles2.blog}>
        <Title title="UDYAT" subtitle="THE RISING STARS" />
        <div className={Styles2.center}>
          <article className={Styles2.article}>
            <p>
              "Education is the most important weapon which you can use to
              change the world". Udyat has understood this philosophy of Nelson
              Mandela and has executed it in an outstanding manner.
            </p>
            <p>
              Udyat: The Rising Stars is an initiative by Unnati to promote
              Right to Education in the society. Under this project, team Udyat
              has adopted a slum near Rana Partap Bagh, Azadpur, Delhi, where a
              team of volunteers guide and teach the young kids to be a better
              citizen of India.
            </p>
            <p>
              Our motto is education for all and to fulfill this aim a group of
              volunteers spend time with young kids helping them in their
              elementary education, curriculum, conducting workshops and
              seminars for the over all personality development of kids.
            </p>
            <p>
              The classes of Udyat aims in developing the logical and analytical
              skills of young generation while in order to Enhance ethical
              values, social awareness and physical fitness. We hope that
              together we can change the educational status of our society.
            </p>
            <br />
          </article>
        </div>
      </section>

      <section className={Styles.about} style={{ marginTop: "-10%" }}>
        <div className={Styles.aboutCenter}>
          <article className={Styles.aboutImg}>
            <div className={Styles.imgContainer}>
              <ImageGallery
                items={udyats}
                showPlayButton={false}
                showFullscreenButton={false}
                showIndex={false}
                infinite={false}
              />
            </div>
          </article>
          <article className={Styles.aboutInfo}>
            {" "}
            <a
              className="btn-primary"
              href="https://www.facebook.com/udyattherisingstars/"
            >
              Find us on facebook
            </a>
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

export default udyat
