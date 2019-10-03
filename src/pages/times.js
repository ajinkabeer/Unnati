import React, { Component } from "react"
import Layout from "../components/Layout"
import Styledhero from "../components/Styledhero"
import { graphql } from "gatsby"
import Title from "../components/StyledTitle"
import Styles from "../css/about.module.css"
import Abouts from "../components/About/abouts"
import Homeabout from "../components/Home/About"
import Styles2 from "../css/single-blog.module.css"

const times = ({ data }) => {
  return (
    <Layout>
      {/* <Styledhero img={data.defaultBcg.childImageSharp.fluid} /> */}
      <section className={Styles2.blog}>
        <Title title="UNNATI" subtitle="TIMES" />
        <div className={Styles2.center}>
          <article className={Styles2.article}>
            <p>
              Unnati Times is a youth led monthly newspaper started by Unnati
              with the aim to cultivate a habit of newspaper reading among our
              young generation, which is a requisite part for Civil Services
              preparation.
            </p>
            <p>
              Unnati Times is a one destination for all the monthly news, brain
              teasers, confessions, quizzes, jokes, interviews, food hotspots,
              fashion trends, spiritual news, sports, travel destinations and
              much more targeting the youths of our nation. The newspapers are
              distributed free of cost among the students of Delhi NCR with the
              motive to spread awareness on different topics.
            </p>
            <i>
              To join Unnati Times or for any collaboration and sponsorships
              mail us upsc.cell.du@gmail.com
            </i>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "abbout.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default times
