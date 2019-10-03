import React from 'react'
import Layout from '../components/Layout'
import Styledhero from '../components/Styledhero'
import { graphql } from 'gatsby'
import Contact from '../components/Contact/Contact'
import Styles from '../css/about.module.css'
import Title from '../components/StyledTitle'

const contact = ({ data }) => {
  return (
    <Layout>
      {/* <Styledhero img={data.defaultBcg.childImageSharp.fluid} /> */}
      <section className={Styles.about}>
        <Title title="Contact" subtitle="Us" />
        <Events />
      </section>
      <Contact />
    </Layout>
  )

}


export const query = graphql`
query{
  defaultBcg: file(relativePath:{eq: "connectBcg.jpeg"}) {
    childImageSharp {
      fluid(quality:90,maxWidth: 4160) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`
export default contact
