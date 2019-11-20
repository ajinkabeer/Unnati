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
            <a
              className="btn-primary"
              href="https://www.facebook.com/groups/407901806432989/"
            >
              Find us on facebook
            </a>
            <br />
            <p style={{ marginBottom: 5, marginTop: 5 }}>
              To join Unnati Times or for any collaboration and sponsorships
              mail us upsc.cell.du@gmail.com
            </p>
            <br />
            <p style={{ marginBottom: 5, marginTop: 5 }}>Unnati Times Links</p>
            <a href="https://drive.google.com/file/d/14fGb_CwHgUCkU2Pkc63gJHnRwxR1HmbG/view?usp=drivesdk">
              Edition I
            </a>
            <br />
            <a href="https://drive.google.com/file/d/1o64eI_1qR7Xr1vZccTnhXnC9jdZK3hGs/view?usp=drivesdk">
              Edition II
            </a>
            <br />
            <a href="https://drive.google.com/file/d/0BzDboi8jPcAhWEkxNlNwUGc0MDVrOXBVWkFBWW5HMUNWZ0lN/view">
              {" "}
              Edition III
            </a>
            <br />
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
