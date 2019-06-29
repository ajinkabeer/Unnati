import React, {Component} from 'react'
import Layout from '../components/Layout'
import Styledhero from '../components/Styledhero'
import{graphql} from 'gatsby'

const about = ({data}) =>{
 return(
   <Layout>
     <Styledhero img={data.defaultBcg.childImageSharp.fluid} />

  </Layout>
 )
}



export const query = graphql `
query{
  defaultBcg: file(relativePath:{eq: "abbout.jpg"}) {
    childImageSharp {
      fluid(quality:90,maxWidth: 4160) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`


export default about
