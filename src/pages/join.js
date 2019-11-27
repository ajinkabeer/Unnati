import React, { Component } from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/StyledTitle"
import Styles from "../css/about.module.css"
import Abouts from "../components/About/abouts"
import Homeabout from "../components/Home/About"
import Styles2 from "../css/single-blog.module.css"
import ImageGallery from "react-image-gallery"
import { campus, poster } from "../components/Join/links"

const join = ({ data }) => {
  return (
    <Layout>
      <section className={Styles2.blog}>
        <Title title="Join" subtitle="Us" />
        <div className={Styles2.center}>
          <article className={Styles2.article}>
            <p>
              "The only person you are destined to become is the person you
              decide to be.” – Ralph Waldo Emerson. To stand out of crowd you
              need to put your best foot forward. Internship gives you an
              opportunity to learn things practically while you are still in
              college. Team Unnati participated in internship fair of different
              colleges to provide them an opportunity to learn the work culture
              while they are still in college and sharpen their skills. Unnati:
              The Knowledge Hub For Civil Aspirants is a not for profit
              organisation registered under the government of India. Started by
              Mr. Lokesh Chugh under the able guidance of Mr. Oscar Fernandez
              (MP, Rajya Sabha and Chief Patron, Unnati), Unnati is working for
              the upliftment of youth in different sectors from 18th of
              December, 2016. Unnati aims at providing free guidance to those
              UPSC aspirants who have knowledge and talent but lack adequate
              resources. We host various events and also provide free UPSC
              guidance to UPSC aspirants.
            </p>
          </article>
        </div>
      </section>

      <section className={Styles.about}>
        <div className={Styles.aboutCenter}>
          <article className={Styles.aboutImg}>
            <div className={Styles.imgContainer}>
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

export default join
