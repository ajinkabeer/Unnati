import React from "react"
import Layout from "../components/Layout"
import Styledhero from "../components/Styledhero"
import { graphql } from "gatsby"
import BlogList from "../components/Blog/BlogList"

const blog = ({ data }) => {
  return (
    <Layout>
      {/* <Styledhero img={data.defaultBcg.childImageSharp.fluid} /> */}
      <BlogList />
    </Layout>
  )
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "artic.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default blog
