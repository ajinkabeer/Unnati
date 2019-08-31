import React, { Component } from "react"
import Layout from "../components/Layout"
import Styledhero from "../components/Styledhero"
import { graphql } from "gatsby"
import Title from "../components/StyledTitle"
import Styles from "../css/about.module.css"
import Abouts from "../components/About/abouts"
import Homeabout from "../components/Home/About"
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
            <div class="card" style={{ width: 18 + "rem" }}>
              <div class="card-body">
                <img src={Lokesh}></img>
                <h5 class="card-title">Mr.Lokesh Chugh</h5>
                <p class="card-text">Founder and CEO</p>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card" style={{ width: 18 + "rem" }}>
              <div class="card-body">
                <img src={Ritik}></img>
                <h5 class="card-title">Mr.Ritik Shah</h5>
                <p class="card-text">Content Head</p>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card" style={{ width: 18 + "rem" }}>
              <div class="card-body">
                <img src={Jyoti}></img>
                <h5 class="card-title">Ms.Jyoti Gupta</h5>
                <p class="card-text">President</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <section className={Styles2.imagegallery}>
        <Title title="Mahapanchayat" subtitle="MUN" />
        <Album id="pyebFG5jdXZHZwW28" />
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
