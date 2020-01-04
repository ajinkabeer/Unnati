import React from "react"
import { graphql } from "gatsby"
import Styles from "../../css/about.module.css"
import Styles2 from "../../css/single-blog.module.css"
import ImageGallery from "react-image-gallery"
import { campus, poster } from "./links"

const content = () => {
  return (
    <>
      <div className={Styles2.center}>
        <article className={Styles2.article}>
         
        </article>
      </div>
      <section className={Styles.about}>
        <div className={Styles.aboutCenter}>
          <article className={Styles.aboutImg}>
            <div>
              <ImageGallery
                items={campus}
                showPlayButton={false}
                showFullscreenButton={false}
                showIndex={false}
                infinite={false}
              />
            </div>
          </article>
          <article className={Styles.aboutInfo}>
            <h5>Unnati on Campus</h5>
            <p>
              "The only person you are destined to become is the person you
              decide to be.” – Ralph Waldo Emerson. To stand out of crowd you
              need to put your best foot forward. Internship gives you an
              opportunity to learn things practically while you are still in
              college. Team Unnati participated in internship fair of different
              colleges to provide them an opportunity to learn the work culture
              while they are still in college and sharpen their skills.
            </p>
          </article>
        </div>
      </section>
      <section className={Styles.about}>
        <div className={Styles.aboutCenter}>
          <article className={Styles.aboutImg}>
            <div>
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
    </>
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
