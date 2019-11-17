import React, { Component } from "react"
import Layout from "../components/Layout"
import Styledhero from "../components/Styledhero"
import { graphql } from "gatsby"
import Title from "../components/StyledTitle"
import Styles2 from "../css/single-blog.module.css"
import Styles from "../css/about.module.css"
import ImageGallery from "react-image-gallery"

const udyats = [
  {
    original:
      "https://lh3.googleusercontent.com/iFpKe6kYr9lm9RcVBwEcvsTX7jt7L2qxPtMnhf-onHSQShCVlgIpgE5uCTf3gZuHHMSrTpNvIn2EHko5ZXabl2uWAsfQBQogRORCOEMWUriM0-2MVsQbknXotf7lLwxi2awmze-bzAmFVNsL-tqfZDSJ97KfWlYByulSbsW4hz45tRbpubvYt6q0SpR2FAxQ7lpS3j2aEIoSoHpP-nkX-7b7YbMsclyqVkALhNZivsBP4wp1d4hM2-8YwkdenM0za1n_Tg8AK2fZAWjxiO0FIR-XZYSqr8t6cSyT3GoRfL4JngD5_htAJ5hLR9Bi8Wem9H6Hthj17cW6H4-eQNy1Mu45PB4OhR4iAfHolfSTiHvUxeMNsQ1ofY3WHlvB_G5RbttqL_YvuIdvNQwtL89hcRdulXqgYzvVTrrDmqNaUCxZhkASjTzO8B84HR_1gpakqf-06RLc9R-punXgsnU8LJ-t20GBneL8HENHbEWofN7ciCX6iQYkhxZZr-Siu86ZfnCFJ4J9j932zq4Of9-E8_e1q-d-mFWGQNl4j1DGdgGZoZBPTrL0ldNrzGiMQ_Z_oT3GNIrX-Xm3NHrRMPuuiMlX_HjCpr-yzrP334U4eMT6WG5W0ADhBTPKGULdEe1E18Mq76ODc79QzBJpNrFozddUFwKcetWHp40mO8Y7ZhgNh7Jtc95xsw=w720-h540-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/82q6lrMKGNhCrjzGECJI9R-zvmceqFJZ-MB0AQ17qfqmwkvUdWeiAKLudimaPG1J-y1QB60GNwZg-xg3EQy45w2DWt0FEsFhn6IPLXILxslzzltgfje3fR4uIPH6zKh8BHR0ZzhrjPSo0OQSpmIUT6QkD8-jDshu-Nydjonj30O8IO-33h_sFoK0Aj4glflhipqW9bawoidfE9Fhg9_KCnDxqHeoJcbdO4AQ_yFLRoqmd4U6PPP9xAs-UQL2oF5FdwLYrd7vy5tNbBlEmGmh672q_M9RcNnoLzWzsPKBrkTbUftmwSeWlRlZA3ut22sRYSi557nIFqAdiYDYa6sYW6jLpBF_xDow6LxWGoDKH5WSBeqJulwgU-BHwbYGyweL2u7yIeyWROdQ2ivCyxQVYhxtrbZ-ElpD6oV2euXNLpHGPGaBgLMaMnfYJyhSDh5YOxEFF-JY7KQPfiQcvKuQBAJy6NxqChEboozQHyBnkpO4uqLPDBHPPWFwEBhkYS_K3V0SoNTmbAJfpGaMs7bz8W2SmXqUgv0bkeiPjS6jcXkMLDrKQoeOhJ5rn32COuQFEsaLLC5vG_0TyDPygTfoXESzH2IOy-VnhAuuz6mZVxdwpl1TgthF7L9o81My2SazLgdrBAG14k1XcZE0NviK1LqHy_EpRDRAFXUldtpDtugllBiersN3_w=w1024-h455-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/ctOr5NVrloSQGNk029LIEdOOkhVT5fd1-swNJUAwnCJhHW3sW8whr1l-Vy41EbbiilhSnTOJK8wPEPxIRYW3HzEZJIcRhRBhoRrejbOr2LydStzXY20rGAo25uszCGGE9BfEZwumpPykuaH5y9ON9U6sigwhMLmNyHwU0ISBSVq5-m6vg0mJSJBxhPv6AMS26SYS93hmsrjKavud1GQnOqC6FxnBH_tbddhJPNbUixFO1CqFKBGMze03h-dSbW9Y0R_G7yBFJWyIgUHt3QpBNfzE91AJ5zycyuRk6WNAeNDPAgMApmlzuPZ5zYjml5D8TLrGMbN3mA658ou-cPTk23gbJut6PykTrFK00j8c-ZJ3y_TPMgNjiNU3XcqP4whDXsfgk-17-sNGINchDfktqmc2fck4osrNXBFzQDaQFcQhfBQsowCUG7E5tRtFc-XYCgSaiut3pbFBWlvEnswRNT53QJFNpF0iYB3dstAVjy45tqg42Mw1v-kzepp_UuFpIB_9VfgHi4ZKNYTS9w4j_jathEJ6FlZh0wbeCaoHwnlfIsSRFBu7SbbF6LC_e2VuOdwwXi8QI5WFythhsKJitfkdl125VUNFTyZM31hp7oLEntfoiDwqx9Ksu7QGXJrsBDHYMbFfmS7DGLISQe42sTLRukpXqmjHzzYRnyuvbOYK5HlKBWwsHQ=w720-h960-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/Cu21CynVrM_uSOlM6-g13INKx_L47vPIgrRBOEj-HzZX4nC2DqJX97oiUXO9UBQMYh6nc-UXBUNQUHi3YeLsjmdhnmuwGTblyvnorXJ1T5XETpHNlh4qp-UyQQyqE42riJZk0QK8nlupVfqBQE-QqiovOSpAKOvgX19Y111mJC-aYmmx14N756iSEu6IPqiNI4a_aILiVw3CzkEqEbVqPs82GJbS9AeAfHksOi_gckMs5-E6wUdRTlbADjcSQObtae66MQlgvW_6TTjsTynyouuG4XtkLrnyRtc7pv4FkTKM-ztPwisnt7GiWJTJGEcPeALcpqFBbOKPbKSOHScC0MMSQqPqHd44bu9JtxUmfRAC9H_RKoLGj4RtV0QVoybiu2hjzMZTV9hXrk9i4aK44f71R1_edO03czB6s4JVys5Yx1fH38HOr5-l7V0FKfQWjjif3iq8bQrIku1iiE8StgfjDhzyD8muz9KAvkts1S4_6QllPMc1kkv0cgevjHCmoSC0evIAaBRHj4S5ddRPLq_XEDTEJBlRRyvsO-m_j_tTLivp2fiGPArDFq5T6Oku96Kyjd8zKkSIPzn1azEErPB5dQz2lFVF0oqkelgiKGuGpjFbvD7ffAHkNSouN10nz5DTlOrknJtLula5zezRmbQncCdwqkjLTPBDX3Dog_y9ZCZgV6tGlg=w720-h540-no",
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

      <section className={Styles.about} style={{marginTop:"-10%"}}>
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
              <h5> <a href="https://www.facebook.com/udyattherisingstars/">
              Find us on facebook
            </a></h5>
               
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
