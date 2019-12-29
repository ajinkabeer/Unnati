import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import BlogList from "../components/Blog/BlogList"

const blog = () => {
  return (
    <Layout>
      <BlogList />
    </Layout>
  )
}

export default blog
