import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Contact from "../components/Contact/Contact"


const contact = () => {
  return (
    <Layout>
      <Contact title="Contact" subtitle="Unnati" />
    </Layout>
  )
}


export default contact
