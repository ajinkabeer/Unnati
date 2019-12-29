import React from "react"
import Layout from "../components/Layout"
import Title from "../components/StyledTitle"
import Styles2 from "../css/single-blog.module.css"
import Content from "../components/Join/content"

const join = () => {
  return (
    <Layout>
      <section className={Styles2.blog}>
        <Title title="Join" subtitle="Us" />
        <Content />
      </section>
    </Layout>
  )
}

export default join
