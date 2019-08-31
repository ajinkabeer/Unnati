import React, { Component } from "react"
import Layout from "../components/Layout"
import Styledhero from "../components/Styledhero"
import { graphql } from "gatsby"
import Title from "../components/StyledTitle"
import Styles from "../css/about.module.css"
import Abouts from "../components/About/abouts"
import Homeabout from "../components/Home/About"
import Styles2 from "../css/single-blog.module.css"
import Album from "../components/album"

const uthan = ({ data }) => {
  return (
    <Layout>
      <Styledhero img={data.defaultBcg.childImageSharp.fluid} />
      <section className={Styles.about}>
        <Title title="about" subtitle="Uthan Youth Parliament" />
        <div className={Styles2.center}>
          <article className={Styles2.article}>
            <p>
              Uthan Youth Parliament is an international level youth parliament
              to create awareness among the youth about the working of Indian
              parliament, to inculcate the habit of public speaking and to stand
              up for what is correct. An initiative taken by Unnati, Uthan aims
              at creating awareness on the issues of national and international
              importance and familiarize students on policy making, political
              science and governmental policies. Uthan has successfully
              organised its three blockbuster editions with a participation of
              around 1500 debaters from various schools and universities giving
              their valuable inputs for bringing a change in the the society and
              now looks forward to the fourth edition in November.
            </p>
            <p>
              Uthan is a platform where a person can get all that his
              inquisitive soul craves for by providing them with a platform to
              put their views in the heat of debate. It is an exciting and
              unique platform for debaters, round the corner. Its fundamental
              purpose is to facilitate thought and opinion exchange in addition
              to its primary goal of empowering the youth. Uthan comes with a
              bundle of surprises for its debaters such as badges, goodies, cash
              prizes, etc. Prominent personalities, like Mrs Shiela Dixit, Mr.
              Oscar Fernandez (MP, Rajya Sabha), Mr. Salman Khurshid, Ms.
              Sharmistha Mukherjee and various Civil Services officers have been
              a part of Uthan Youth Parliament as Chief Guests.
            </p>
            <p>
              Team Uthan is all set for its next blockbuster, Uthan Edition 4 on
              2nd and 3rd November, 2019. Register here to be a part of Uthan
              legacy:
            </p>
            <a href="https://forms.gle/YQWwJ634vHsnGif28">
              Delegate Application
            </a>{" "}
            <br></br>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfWgsJbAd55hqtvMX6Z
-pF-7lB6DkbZuWMwUeF8gLuUxOJrFA/viewform?usp=sf_link"
            >
              National Press Application
            </a>
          </article>
        </div>
      </section>

      <section className={Styles2.imagegallery}>
        <Title title="Uthan" subtitle="2018" />
        <Album id="PDvCQqExBrWKaZnm9" />
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

export default uthan
