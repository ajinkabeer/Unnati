import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Styledhero from '../components/Styledhero'
import{graphql} from 'gatsby'

const events = ({data}) => {
  return (
    <Layout>
     <Styledhero img={data.defaultBcg.childImageSharp.fluid} />

    </Layout>
  )
}


export const query = graphql `
query{
  defaultBcg: file(relativePath:{eq: "realevents.jpg"}) {
    childImageSharp {
      fluid(quality:90,maxWidth: 4160) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`


export default events;
