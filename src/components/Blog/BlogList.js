import React from "react"
import BlogCard from "./BlogCard"
import Title from "../StyledTitle"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../../css/blog.module.css"

const getPosts = graphql`
  query {
    posts: allContentfulArticles(sort: { fields: publishedDate, order: DESC }) {
      edges {
        node {
          publishedDate(formatString: "MMMM Do, YYYY ")
          title
          slug
          id
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
const BlogList = () => {
  const { posts } = useStaticQuery(getPosts)

  return (
    <section className={styles.blog}>
      <Title title="Read" subtitle="Articles" />
      <div className={styles.center}>
        {posts.edges.map(({ node }) => {
          return <BlogCard key={node.id} blog={node} />
        })}
      </div>
    </section>
  )
}

export default BlogList
