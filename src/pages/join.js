import React, { Component } from "react"
import Layout from "../components/Layout"
import Styledhero from "../components/Styledhero"
import { graphql } from "gatsby"
import Title from "../components/StyledTitle"
import Styles from "../css/about.module.css"
import Abouts from "../components/About/abouts"
import Homeabout from "../components/Home/About"
import Styles2 from "../css/single-blog.module.css"
import ImageGallery from "react-image-gallery"

const campus = [
  {
    original:
      "https://lh3.googleusercontent.com/Sg6SeIgBuHmLbpN3qJIQyNGNl-tZEJ6E_tkG68C3Jq3wWQmrNGb5nM_M9q_hhBZeGHfktJcd11RtRVtALDAxeOIEVQbX1HLMNPVf9pywOohNv-mStN8hixWw793-eQjPWUaBN8Sh2ZqNU7x513FszFYIHnWaZpY136Zf3Wp97ctitHuyx7nUrX6IHP_QeGfInpefqnQpEQJW-fwdF0etejS8OG8kTOc_ZsI4tD8kZ9KrCJwi8uQVZufUeVa0dITxpfeEN7keQLd3_shB2BwNC_h9QymgcAkoAhTIpy3Ke541zXzJW4WNkFFEZ3nqvUD5ZTf8Rd4ZtUKKMoBfIZVuMiAwcOx7nX1Jsx3YMU8kpDB3YJJ75OABeQJsrixxjLduiK1bQaypRWP4QYu2pSZ7mvRa-5ztWiZrYPqyii1KWDRLSL1fR3GiJBUompxtGLy-O42OK-4bYIXNmRXeteB1huPQ0Z8f8-vRoKjYMLzXWLgSlAiQD6oUeaHICQGOgP_Zma0Zj2eAEyiXe1PqbMuViwzVCLVflfoqFDmzkNXZvDfp9pGakIhUkFNgaohUwUJB-8XD_zPloWIExS1D8QFPBp8l-OeGl_7P7g89raLGVOnVj5Nys-EMK3NwLYl-ZdL5w1S44Ygy2Nf-RaeF6HglALH_1J6MaWVs0ustpLrchiiPfGD1eB_v3VMQxvhWO2bqPNjE0z2fURa3_9ozonK850sUMgU3s98s3gtARa8nZwrdwVBa=w700-h933-no",
  },

  {
    original:
      "https://lh3.googleusercontent.com/ovAX3fFk8Kgkjzjz8-uxFPLEWqhubELsD5YagXbCorRzNM55q3_q5eliY7Vd_8RfE8D1Uly0tmsn8By9H96ElCHUAJV6a3m5Eehv8PO6AgKbAtlMJWGxXk9J81IzhA9tuJuCc80WKtbW5AHZfNbAqPYmowO20ePiNvDUUoYTU-NGckKVJK7U3fFgjB3HysImFojJroCCY2jjiZmh3jT5uhIkQ1-_tdaZwOiyNnZRqlyT1qt8cMnLmpiJFeZ0OX4GHJtqEuFZQcwRqEIufjP8fxUZDntlSZYaWPEIIYK4cYWLkNKfHqf-6M242q8R41Fqj9NgcoqdoPgi38DC4bp-0bu6aiI1UZca-3m653ZZjRmcKxqkCd67fzko4_C9alsi0pXqtpkAHje4-lTWsbbdmcEpLYU5qthDcWaYGG3cxctZ2bolt8Fr5m1JCg0qEhzRPTwsvsSpC_o30pBxBt0i0dtuTYcDXy57NpUJfEUbnqVWvCoVyytDTyexsdiByLinL1uI5Q6ofOef3gc74Fph3Je1TX9CBY56ASjW9j3BAJ-X-nOY3iV5l9yFE6_vXqT3V866evGXUYWR7kjnR05t0Ja2_fjRuitosC_qxkzjfd-M-wRlA2Kcye0m-_gl5je2D2Qdb36R-iWO81B6uD7oO0amO0KLPXH-9nUDVDGbXNDfSF0xkY-BDOZlLcIMsuLc01o6bQh2r_0EhTUZnHbhecb5Q4Td6xTZSPrXqvnyKu8GZB5s=w720-h330-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/Yje6AM_0P1T_RSodiMo2AmDbyu5bxrB0tKer0Of8VAjcEnYkUzXIK3t9NCiUvu-KbUFwMWQjF4ATYlBNg_8NZEUNyOCTp49tmmRZta8aKXT3XigllrAKBWSmlzKuMdv8Lu0dge71PGhbk5ZUXbZ_r-aIw4kKW7_Mr2P9vt6AKVUVyqzdeH4_35whyv86CCPayvov_XW16se-N1OSPB5DaoS_ryOFdj10WAAWM6S0Qx9Ba4uYoFXQwLi5VJUApgigTimnjr97ndqKHoy_xaMj1yGYFzcpMwoKSkRwdh9CEJ_jTJgFWWDjVKtbn26iKP2iJzDLX1BONilNwlLzqJpXGgR0362XJPbyLXTLxFzfTcnSoCopvzP2Erv5-BUsC6Hp10wFlVQJoJW-Zu5292iyF6GQCxuLBpTmv7cCj_BtvagJJzjV1VLylSx1cnb9CpSzYqlKauYwEqu8vg1XQhJu0h91Yc_QSHddfWxmXsMKJcg6oIcQygfTHYJEqcSM2rFLpV3mgICkPj9ZffMVQo3mwY-dXzVS-CZsWt7jPFotU0ZS_MkuKWuTZ0yUM-hZsmQIrtd-EKfktvrlJgLuy-_0ew1B-fpkhHCkAnl-SEtLz5qCo1q_yrzi0hwxKrM5Z0EWUf_vu1W80KGgSJnR6SY9bRxD5-oCEHpyShH4bVKyKgoIPY4kBXUiS6Ov3FQMPZG26tCXnZMgYovavGQC2zcrnTpf_wG6lZJXKRvr3vcCynp168GM=w720-h480-no",
  },
]

const poster = [
  {
    original:
      "https://lh3.googleusercontent.com/uou5XJBqge99h40RF-dsnTWXM_U6AiMIkXoQhu80xihdudIm4vR8geij4vrsAOg26FmwjkIwiM_iV8NBacs_tbGZydl5PJ4Xd_6en1BFs0MWnsAhRM6DDpmd0pgf51jLu84d3zMFlsIebpw5ZFioQ7n8pKN2EZM5ljFACrQyog0fYQv2VYfUYOecDv2FF-wcc4gl2cHPlJ-xKQpDRK-UfgpK4BpWqs8Jzei10UweDTY9v4npdY6lZA4Pis1p5VeYw8RpuYJdwx-OkHeYjM8WgpwkaZJuKMD6qPglg3RkDgQOUAyGEBrwj4hGVvF7j_mqPytHQ5TyYLyZOm-dot68BiOpMANOSmKtSa-iep2D6SlIS-q1M26fsK7sV_EofnIlLrm7tLF52HeeuSQs0Ox-nlRK4TFALfhfidROpkG07ANvAHDY1aA_C0unQYxto0pFUmS6aBMHn7z1DsBiMv4_MAuTJCXHUe3re1KXNELhRdLTeCWeCk_8K2wZsCu9pBwT8SMJwe2G7DEWG6Sfy5sL4OfCg_dkBUmJlliTqiT-zpZx4xaSAIq1pAG1HoqM2jXCM4ntMSvaQuB8dtRq1Y8Oyxhk88Kiu2AnW5tWKb7IwPrcyCPw07LBM9dQbqwqgCjG4TQYVvtmv2sJaOSZ6h9MDPqP2qwAOMV6shgiIyszt2T9eOoIdDqF03RkOIS2zoAjbJFeI3aYwFVzAKvn98UhPhhQVuzq_MeAGJJYxlTXWWPBnVs=w703-h993-no",
  },
]

const join = ({ data }) => {
  return (
    <Layout>
      <section className={Styles2.blog}>
        <Title title="Join" subtitle="Us" />
        <div className={Styles2.center}>
          <article className={Styles2.article}>
            <p>
              "The only person you are destined to become is the person you
              decide to be.” – Ralph Waldo Emerson. To stand out of crowd you
              need to put your best foot forward. Internship gives you an
              opportunity to learn things practically while you are still in
              college. Team Unnati participated in internship fair of different
              colleges to provide them an opportunity to learn the work culture
              while they are still in college and sharpen their skills. Unnati:
              The Knowledge Hub For Civil Aspirants is a not for profit
              organisation registered under the government of India. Started by
              Mr. Lokesh Chugh under the able guidance of Mr. Oscar Fernandez
              (MP, Rajya Sabha and Chief Patron, Unnati), Unnati is working for
              the upliftment of youth in different sectors from 18th of
              December, 2016. Unnati aims at providing free guidance to those
              UPSC aspirants who have knowledge and talent but lack adequate
              resources. We host various events and also provide free UPSC
              guidance to UPSC aspirants.
            </p>
          </article>
        </div>
      </section>

      <section className={Styles.about}>
        <div className={Styles.aboutCenter}>
          <article className={Styles.aboutImg}>
            <div className={Styles.imgContainer}>
              <ImageGallery
                items={campus}
                showPlayButton={false}
                showFullscreenButton={false}
                showIndex={false}
                infinite={false}
              />
            </div>
          </article>
          <article className={Styles.aboutInfo}>
            <h5>Unnati on Campus</h5>
            <p>
              "The only person you are destined to become is the person you
              decide to be.” – Ralph Waldo Emerson. To stand out of crowd you
              need to put your best foot forward. Internship gives you an
              opportunity to learn things practically while you are still in
              college. Team Unnati participated in internship fair of different
              colleges to provide them an opportunity to learn the work culture
              while they are still in college and sharpen their skills.
            </p>
          </article>
        </div>
      </section>

      <section className={Styles.about}>
        <div className={Styles.aboutCenter}>
          <article className={Styles.aboutImg}>
            <div className={Styles.imgContainer}>
              <ImageGallery
                items={poster}
                showPlayButton={false}
                showFullscreenButton={false}
                showIndex={false}
                infinite={false}
              />
            </div>
          </article>
          <article className={Styles.aboutInfo}>
            <h5>Internships</h5>
            <a
              className="btn-primary"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfPJRwHPGrQVe9j6b0W7DWd6b-m3mabeTu73BFP9z5GtUm97A/viewform"
            >
              Click here to proceed
            </a>
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

export default join
