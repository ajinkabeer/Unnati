import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/StyledTitle"
import Styles2 from "../css/single-blog.module.css"
import Content from '../components/Times/content'

const times = ({ data }) => {
  return (
    <Layout>
      <section className={Styles2.blog}>
        <Title title="UNNATI" subtitle="TIMES" />
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

export default times
