import React, { Component } from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/StyledTitle"
import Styles from "../css/about.module.css"
import Abouts from "../components/About/abouts"
import Homeabout from "../components/Home/About"
import Styles2 from "../css/single-blog.module.css"
import ImageGallery from "react-image-gallery"
import {campus,poster} from "../components/Join/links"

const content = () => {
  return (
    <Layout>
     
      <section className={Styles.about}>
        <div className={Styles.aboutCenter}>
          <article className={Styles.aboutImg}>
            <div className={Styles.imgContainer}>
              <ImageGallery
                items={poster}
                showPlayButton={false}
                showFullscreenButton={false}
                showIndex={false}
                infinite={false}
              />
            </div>
          </article>
          <article className={Styles.aboutInfo}>
            <h5>Internships</h5>
            <a
              className="btn-primary"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfPJRwHPGrQVe9j6b0W7DWd6b-m3mabeTu73BFP9z5GtUm97A/viewform"
            >
              Click here to proceed
            </a>
          </article>
        </div>
      </section>
      <section className={Styles.about}>
        <div className={Styles.aboutCenter}>
          <article className={Styles.aboutImg}>
            <div className={Styles.imgContainer}>
              <ImageGallery
                items={poster}
                showPlayButton={false}
                showFullscreenButton={false}
                showIndex={false}
                infinite={false}
              />
            </div>
          </article>
          <article className={Styles.aboutInfo}>
            <h5>Internships</h5>
            <a
              className="btn-primary"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfPJRwHPGrQVe9j6b0W7DWd6b-m3mabeTu73BFP9z5GtUm97A/viewform"
            >
              Click here to proceed
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

export default content
