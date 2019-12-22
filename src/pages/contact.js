import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Contact from "../components/Contact/Contact"


const contact = ({ data }) => {
  return (
    <Layout>
      <Contact title="Contact" subtitle="Unnati" />
    </Layout>
  )
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default contact
