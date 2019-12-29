import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/StyledTitle"
import Styles2 from "../css/single-blog.module.css"
import Content from '../components/Times/content'

const times = () => {
  return (
    <Layout>
      <section className={Styles2.blog}>
        <Title title="UNNATI" subtitle="TIMES" />
       <Content />
      </section>
    </Layout>
  )
}

export default times
