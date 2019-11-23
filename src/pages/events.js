import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import Styledhero from "../components/Styledhero"
import { graphql } from "gatsby"
import Title from "../components/StyledTitle"
import Styles from "../css/about.module.css"
import Events from "../components/Events/Events"

const events = ({ data }) => {
  return (
    <Layout>
      <section className={Styles.about}>
        <Title title="our" subtitle="events" />
        <Events />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "realevents.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default events
