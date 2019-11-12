import React, { Component } from "react"
import Layout from "../components/Layout"
import Styledhero from "../components/Styledhero"
import { graphql } from "gatsby"
import Title from "../components/StyledTitle"
import Styles2 from "../css/single-blog.module.css"
import udyatimage from "../images/udyat.jpg"
import udyat2 from "../images/udyat2.jpg"
import udyat3 from "../images/udyat3.jpg"
import udyat4 from "../images/udyat4.jpg"

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
            {/* <div class="row">
              <div style={{ width: 18 + "rem", textAlign: "center" }}>
                <div class="col-sm">
                  <img src={udyatimage} style={{ borderRadius: 30 }}></img>
                </div>
                <div class="col-sm">
                  <img src={udyat2} style={{ borderRadius: 30 }}></img>
                </div>
                <div class="col-sm">
                  <img src={udyat3} style={{ borderRadius: 30 }}></img>
                </div>
                <div class="col-sm">
                  <img src={udyat4} style={{ borderRadius: 30 }}></img>
                </div>
              </div>
            </div> */}
            <br />
            <a href="https://www.facebook.com/udyattherisingstars/">
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
