import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../css/blog.module.css"
import BlogCard from "../components/Blog/BlogCard"
import Title from "../components/StyledTitle"

const articles = props => {
  const { currentPage, numPages } = props.pageContext
  const { data } = props
  return (
    <Layout>
      <section className={styles.blog}>
        <Title title="latest" subtitle="articles" />
        <div className={styles.center}>
          {data.articles.edges.map(({ node }) => {
            return <BlogCard key={node.id} blog={node} />
          })}
        </div>
        <section className={styles.links}>
          {Array.from({ length: numPages }, (_, i) => {
            return (
              <AniLink
                key={i}
                fade
                to={`/article/${i === 0 ? "" : i + 1}`}
                className={
                  i + 1 === currentPage
                    ? `${styles.link} ${styles.active}`
                    : `${styles.link}`
                }
              >
                {i + 1}
              </AniLink>
            )
          })}
        </section>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getArticles($skip: Int!, $limit: Int!) {
    articles: allContentfulArticles(
      skip: $skip
      limit: $limit
      sort: { fields: publishedDate, order: DESC }
    ) {
      edges {
        node {
          slug
          title
          id: contentful_id
          publishedDate(formatString: "MMMM Do, YYYY")
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

export default articles
