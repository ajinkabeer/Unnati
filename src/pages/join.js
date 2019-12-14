import React, { Component } from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/StyledTitle"
import Styles from "../css/about.module.css"
import Styles2 from "../css/single-blog.module.css"
import ImageGallery from "react-image-gallery"
import Content from "../components/Join/content"

const join = () => {
  return (
    <Layout>
      <section className={Styles2.blog}>
        <Title title="Join" subtitle="Us" />
        <Content />
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
