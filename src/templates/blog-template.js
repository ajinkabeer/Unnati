import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import styles from '../css/single-blog.module.css'
import {Link} from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"


const Blog = ({data}) => {
  const {
    title,
    publishedDate,
    body:{json},
  } = data.article

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <div className="rich">
             <img width="400" src={node.data.target.fields.file["en-US"].url} />
           </div>
        )
      },
    },
  }

   return (
     <Layout>
     <section className={styles.blog}>
     <div className={styles.center}>
     <h1>{title}</h1>
     <h6>Published on: {publishedDate}</h6>
     <article className={styles.article}>
             {documentToReactComponents(json)}
           </article>
     <Link to="/article" className="btn-primary">All Articles</Link>
      </div>
     </section>
    </Layout>
   )
}

export const query= graphql`
query getArticle($slug:String!){
  article:contentfulArticles(slug:{eq:$slug}){
    title
    publishedDate(formatString:"MMMM Do,YYYY")
    body{
      json
    }
    }
  }

`

export default Blog
