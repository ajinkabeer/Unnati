import React from 'react'
import styles from '../../css/blog-card.module.css'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import { Card } from 'semantic-ui-react'

const BlogCard = ({ blog }) => {
  const { slug, title, image, publishedDate } = blog
  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        <Image fluid={image.fluid} className={styles.img} alt="single post" />
        <Link className={styles.link} to={`/article/${slug}`}>
          read more
        </Link>
        <h6 className={styles.date}>{publishedDate}</h6>
      </div>
      <div className={styles.footer}>
        <h4>{title}</h4>
      </div>
    </article>
  )
}

export default BlogCard
