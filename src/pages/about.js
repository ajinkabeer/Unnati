import React, {Component} from 'react'
import Layout from '../components/Layout'
import Styledhero from '../components/Styledhero'
import{graphql} from 'gatsby'
import Title from '../components/StyledTitle'
import Styles from '../css/about.module.css'
import Abouts from '../components/About/abouts'
import Homeabout from '../components/Home/About'

const about = ({data}) =>{
 return(
   <Layout>
     <Styledhero img={data.defaultBcg.childImageSharp.fluid} />
     <section className={Styles.about}>
     <Title title="about" subtitle="us" />
     <Abouts />
     </section>

     <section className={Styles.about}>
     <Title title="our" subtitle="team" />
      </section>

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
