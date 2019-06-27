import React from "react"
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'gatsby'
import About from '../components/Home/About'

const homePage = () => {
  return(
 <Layout>
   <Hero>
    <Banner title="Unnati" >
      <h3>A Knowledge Hub For Civil Aspirants</h3>
     <Link to="/article" className="btn-white">Read Articles</Link>
    </Banner>
  </Hero>
  <About />
 </Layout>
 )
}

export default homePage;
