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
import styles from "../css/single-blog.module.css"
import ImageGallery from "react-image-gallery"


const satta = [
  {
    original:'https://lh3.googleusercontent.com/vFVyqCUXZ6Aljl1oVnFC4ASimzcXiLlDtvchxRMSQx7AY6d4jSeJ8DedDd2G1gzaulx7Dl0sLlYhIZ-uctTCsSEPlRho1j7rLIR8qs0MLAEGJtO6nzFca9_TMP8NvTJ9R52-_LrdjY1UzZc1dM5hHzLeOcugjIZh6IzGw2l6Xr8GBcoZSWNvhDdO06SvB3YyUSs-iuaHV-xj3IY-l620xunKPMB2UfyHpZL7eN3rOjD_Hx9fxQW6V19FSRBlEoWQBtnyu3prkSAlaV8tWy5oH4P9u0Qg4z2dFRpNq_XI2mq02KVaC61wwHAs6XLvtyE4KqPbz4HFd0T9YA-70az3Nhh8ADXweAbSAYZmFDykbN9oxUg9n2CMb02ESh789opoP6s52SrhpsgcR84x5dXR8kLS_r74JV_7keQqk3Ttz7rhtZHrE20PGsIsTrFcJYWSlVZju2RzjRjSLYu6WZWF9mocOlDhuTwKtSXmGYPtawmgwVqdAa64g6EZF8AI0-lQJnpxoBRnCuf08Zaa_AFabXnCUlU_vfvcxw9kCHI5b8qtfKXJRpYzRTBgk2eCeuavT-4ZCyDoWToSciz9ik1PasPC7HJY2w908Lpr1la-jWtNvn67ov-1MbZWIdYlSqB1uEemKeUDxu9AY5YXCcQqJBl0ZfJxB8oLZzCU5ufz0Ebp57A3naQhgw=w1280-h853-no'
  },
  {
    original:'https://lh3.googleusercontent.com/VzOtqLmBZDvDrh6sgx3xsZ2-1jK0RWPCzFx7kpUsaZLDqNu6f4U2ihoGccVkLKS0qLntzc4dtQPfZLD3elcBGYQIu-j8wOXdTBMwNEzKfjPUu-6ZofpGyltYKwfiik0MNkHNSlGPkM-laOX951SHiKSETFP11ls7FxAYK7709fAkVUq4keoNruGvYx8TGkxnVyJeNqGg91x8Dfoic-cnRF-PJO7xcf0I4m4zBi-5lBx5C_kCVHjgoLPFKCusxSSJLw8re2tP3XOSli7YYsFwOyQwvMexEPIYKZmyjND9PMrNXOzIEAFRjFhReoofEpvKOarg4vCKyaDRNS3Onagwxwj7nyRSZIWociqgR3K1meprZpkeR9R58vpVhMU_SAog63GvsMSvv6zHo3A1WA85VNs7gvqaruKrF9W53u_x1pva3QbGQ2_PCNTQmUwHnY8X44RvTm_iGaDtX5JW0lxfucne56qAn_SQW_GYJ_fsj--jQdiuBGeZ97eRDpc3fvtH-HXBpUhV_7Xj3xWDA01xy9NVI_pO13PkY0KFFJGlmxXwTsTfIZ33ZQIL1xYuTo45Yti05pos_oUI2DWfdAAmi-Q-nSsBV8tmN6vOlAFsltXl5JznnTnyfkoTdAFVeLVx-PpxVM7-pk-TxYywJGRhFo5eDBLOHwwucoYR9032kE2BAmt0YZKL1A=w1280-h853-no'
  },
  {
    original:'https://lh3.googleusercontent.com/yZ-w_6KNfeyQD9SPsKyl_dfxxE3kMpxnRB9Qg27RuP3BHkg53KbzLb2XMRuDGUg848aM8tEQZWFUwwhldiYHEmEUUj5OvQKEf0-O5VMNYxI8BQi_eWZOvI-3Cm1vG_PsqSsY_gDHPCBbYjZjYAGqCQBQEYY2DTpu-Lgib2TJjRgrxjmLkm_aujAxfsnOrrv3h2U6aQIgYKj4xwvoykyv-sitLTfeMtUhG4B_Vi0xflT7yz7H13PJD37rha_TvLrFsMfW3cFNv99wp3FfkL0NZdbvkGhh1w8WzGBpkJ8FMJUbgzT2-z16e8N0L-lG55r_Z7TX7ic2nDGKYj-tSpPkLs9Sh_UZ9dUZYBeGUO4P7QaIj6YPWHhq9qRJ37ZkzrZiApuo1UnVHdR1N4ggCYIkEsvzi7Gr4ObXE0FUCKm7u-mSXlLaA5yHAm0vrYUKxGG02Y91hiZy2Ulrst33Z4XzTqh8bEk2rM11o0F-nBihatajTgurjnvU8l2eG7UP7TK1gWIWSda_8z5fgc4k-xC3AyOve0JL4Umy8Oaa__k_j_LmzoNfrhHSscMya2RT5amtMfZ1uZCKOwCTFUERWegn8uFppDIrBDUfcJ_LaDgMURdV-8VVIi23Y6cJz0tZGEmIAeUgIZspgIIPzKRQJiCpRuR_-NKn9i7FfcVxJHq3c7Z-E-wW7BI7Ag=w1280-h853-no'
  },
  {
    original:'https://lh3.googleusercontent.com/CcV4O1-ZsmLeWl5K5iWOyC8YY9bWBXJSxt19TMh_QiqRZgKch6wQvuTSIivsXie5YBjCr2XWWEUZtaSPc23RS3kdLRwicDzdd4sGpv0HGi_26A6EqvvJ1VV_rJUnmdYIgHl0XQhFzYyKzU1H7xTqphJjUMOKz7UElSaRt-o8YZww1F1gb6VgYmI1WJ3EQ9os-7spRp6HiZxAX4lvQoWb-xXdkLDqXBNKa4aSRLMslYbNXiAohSHmOyV2hiWWl_2mBFogQWK-9kC5PestD6qYkVNDRGX3ZfVZBySEOlHWIyB_mg-JANuu7jNvu908Kt8Bs7tFfFhD-DkHgVzqCXApHkiy-eptGrq6dA7jFSiAZtfsE24AaSscYyH1BsUz97_kUdsq_6qVYyxTq7iLTIX0Ad9lMaJBgLlbWwcnXucBcbVxafIU1cCqrGuUCl-RYQmFhDIbfU7lOX0gaz9Hjy1DFBYGvZihqkCjP6do5HX_i0eQAFyuY1dwXR1IYDQeO5Osu-rp-Z48t69O-Uod6XL3-MkDyaudIW6DymUpKJaVzuKHVwApxkmBMtu-AsgmM2mIp1MR4NLGVFIAtATbn6gy7tVYXIK94CaJV9b6pclLf679Gw_B5qLUHk2cddRXm19axIValkMQdIyeVRhy6jGnJIJbzIUg_ihHQal8ZUcEcMhCUd_ZyKGq9g=w1280-h853-no'
  }
]

const uthan3 = [
  {original:'https://lh3.googleusercontent.com/9b21CInTSAsuTvixUtrOGVpvc3Q1AhKAtOLD2ukqh9SU9zcufrN2SuoH_j0QvsoBjyPpy6BiaOvpzINLE0FLSb79lYJABwLEJOFwZZQCrIcSDyJB01iMgbQDhvJUzKbh3vJgbUiqTwv_MNvwZ5a4dWLRiyTNZgDA9LtA83L411rGRT67TSGD5IUMFDp4UT6Sga_J6lGEPMTvsFIoWtBeQ4ZRy3JmVPNqrDmnuX0awSnBvk-uHvGkCXVC9yNTtEr9unn5i8XdGIMwmUFr92JFZ77MVhxIuMJYFxlf19gRSF6F4oydnV3xXC5yfcZtBvbU504XMFQ3WbggytdFskiXseiaAwNGVDEhZskW5bC5FQuxf95dgCwjEcuIye2-26DVeDkzzYt9LegnkJq7G2gqYTHxmzWTEHtNjeIBYF-1koY4iM91EfuU4tfT0uV4VTG6rLlJaKUGIuG9c2qXKDtdSZTqsskmSPlVWuAOVhQwCfKpi9ILMyXi24hooXY-bxapwt1UZDfo6U39r7oE9Dv9d7PdhDp1gNZKs3DHMVSCUQh_bZ13e-j_d5mTF8c2Xujlls2NFcnC4oIWkE7liVZe750KmRTkt3OGX_TSaIY-3jwwAUfW2X6FrfUWytSrX94hpyRVuCRvbGCtGNZZ_N281178gE9QkA0q1YqHY72VHdc_-O_aeQJkRg=w1280-h853-no'},
  {original:'https://lh3.googleusercontent.com/f4iYCofqHWGfcBzrkWphDUe32q-aNRwMH_F5mtO2Jd2qbxKzEiDzUl-xyHrhpOn_UZCHDL6knzQy_xtCYrigg0Lz7DDdPdO8GNfCyS9zIXdM-8D5Tf_CSFFKLzoNdUrRKWxTD-9418G8aGxVrZdHTUFUpqtxvwiXi_Wnbo2Y8p5zJ641upqFd3idxGz0pwX3L7zOfgVDdhpGTqI2kkkHTSo7FO0Hi69TIxuIFq3UfUH2OmFQmr0G3mG--OJxdD58n44UeI-GbUMZwoeKyrlJc-CuQuvjHvDf910N9ZXc7fj_w6e0UQVTd31GFi2mCjvoVvENgsejdAAbn5ZEKBN1eQFoM_cAy7e-6gHdMjtI0V0mkbEMFdlG4RPC33XdJzwEXuVguRIhtYHM5tLvQPPKCdGeBHYpAaoAyKYwYr_45shUVjHq85tjQpoRfE4dztZTCs2objoLkNvWXDzP3boFQi3eW6TtsDbljDIvrcq7pCuyWnSuQyyrUfZt1yZOTT7hGtdwvfmtAJ8Xldw-BHfYJWU4QrdKIM9YEcpoC9O0x1fbbRUMZHDit7qCLG3W3aaS2j10pDyDpc3hVUWocAAA5DmHT894wb920yU5h5F35d8uCrP88dxz8Vuc5_ybwKvJOnEBxs-zeU0N_-PPMEZpuur-oTBQDuAxCCPQbGRZFNpdbzVurUmQMw=w1280-h853-no'},
  {original:'https://lh3.googleusercontent.com/dvxbk4MoAMOm4vJ0qdqTbSLqO23veiBZficytWCpGpgQenK-s3p8tEKJstz2wjDHW9PifHURCeuMcZVhPQA2fmUsi4BnJvZxBRVHiF8wzU3_GXnnNUyIxo8znDElVVmCOVo4a4wFYkzJjSlKX5dFrQRfC6OK7HYdwQ7bwIZ-75KULyAmnZt9hR0mInrzxWhLmIRfVyiZwE21nbnRaZaXT6OUDpeSRTc4faiJMXTfuCOOV_bpeBwCfFrnVVtjFPwQGmdK6k4ATP6uBHwUafADcoaHJXsR9xQZPVewacrLccTPP3e3R86MlNOqqQJgUmEPr_dz15uu15Xe9Me7EwqCVt4kxfUGiQzYM9eEbJGJK566GgKI3C9lGEmLI5muLgQMsHbFjoP-olPpf9LKSE7tHzh4XHfVONLzyoKvJhwBh1wu4SMGnEkkrgs33FTr_tA2oOK6UXn-M3dKEn1rmyrHshWqHzJa-5-9S1MQ_WSE5BvMMdnWYyFKFGg6DXDYGYM7f97fs14_yXjDkd5EbXHvmuL2nJ2BPkbrl9x8mD5wOyROya-Hq3PCCjKC_c8V0QoG7QK6ntP84w-LPle5Y7JSGaXb7WNzQ6Y331KDTCovBHW7kS-neEpE66djLfQAE5sWbl9NaTXnr6RvsND1W5v3SgKmfPB9iRxCwexfHiBSlkx7vAQ_fcZSzg=w1280-h853-no'},
  {original:'https://lh3.googleusercontent.com/lhedf9K12A3sSf4Aasvw0AImo4FR9GspmxKDAJefvNsm0MUWY0VTllo997x1TT9usjOVjoiwK0xWsjA6IZhu_5KfQ1FWIvyGf4wSutvgGaVuPirkQjsJ0K5gA-1yqm72YDiBdrRg7u9VpL_m0mnQplY8scvtt3GOGlFKiIbjfzrTIdMElqI3wL0kjM4aUJkWk1En2YqoPvpzH6Jn31qCs8jrD-f59OVk_lzwRg1Iz4LW09_whUVZwqkpO5eJ2QFli_2fzpIqdOsvdj3jbOJ2NBTDRc4xSpNpF66DMDVVNqtYZf4KQbyMUBMbmyaphXClTbT3oo4vCKHBXUEoaIhV_i9V1WTXpCf2pyTrWD_8tRtA0qEWr4XpUykpLTeReRyMPJ9-dQOgZ2PYnGHfz7VIjbRsPBPJhpr_U0057H9-VjB75rSwBGcZPkbxZ5_x6LdBhtXkmiHzu2eJ3jvKy1iuHrIJA5squtTXkaqsQ7rElaVG1L35W8C5iL9N_8HqAPmIi7izB6eWw0JUFhYofJtyfyQ9GjfGCSMC06vCWMYd0toJySoLM3CSQPherFh2BcCqWYwfUdlsj9S7jUxfRqWvkt79oSwTJ-s5kkAOrTnqHACHq-b3i-HnLDV71LaFusN2wJkWbrXdtv29ei3_lkPmR65KHMPrffl_FsctssOWOwAXDfkGeEX9KQ=w1280-h853-no'}
]
const uthan = ({ data }) => {
  return (
    <Layout>
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
              Team Uthan is all set for its next blockbuster, Uthan Edition 5 in 2020. Register down below to be a part of Uthan legacy.
            </p>
            <a href="https://docs.google.com/forms/d/1TjKSk-y-TwaAlfSKAD94566wzlEh2oGQIxVBLqml_8o/edit">
            Organizing Committee Applications link
                   </a>{" "}
            <br />
            <a href="https://www.facebook.com/uthanyouthparliament/">Find us on facebook</a>
          </article>
        </div>
      </section>
      <Title title="Uthan Youth Parliament" subtitle="events" />

      <section className={Styles.about} style={{ marginTop: -30 }}>
          <div className={Styles.aboutCenter}>
            <article className={Styles.aboutImg}>
              <div className={Styles.imgContainer}>
                <ImageGallery
                  items={satta}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showIndex={false}
                  infinite={false}
                />
              </div>
            </article>
            <article className={Styles.aboutInfo}>
              <h5>Satta: The Power of Words</h5>
              <p>
                {" "}
                Edition 2 of Uthan Youth Parliament, Satta: The Power Of Words,
                a legacy of Uthan Youth Parliament on 28th and 29th July, 2018
                was bigger and better. With 8 different Committees and exciting
                agendas, the event was filled with 550 delegates from all across
                the country discussing on national and international issues. Mr
                Salman Khurshid graced the event with his presence and
                remarkable Words. He interacted with the students, heard their
                problems and came out on conclusions.
              </p>
            </article>
          </div>
        </section>

        <section className={Styles.about} style={{ marginTop: -30 }}>
          <div className={Styles.aboutCenter}>
            <article className={Styles.aboutImg}>
              <div className={Styles.imgContainer}>
                <ImageGallery
                  items={uthan3}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showIndex={false}
                  infinite={false}
                />
              </div>
            </article>
            <article className={Styles.aboutInfo}>
              <h5>Uthan Youth Parliament Edition 3</h5>
              <p>
                {" "}
                After the two successful event, the third Edition of Uthan Youth
                Parliament connected more and more people towards the cause of
                nation. The show stopper, Ms. Sheila Dikshit (Ex CM, Delhi)
                interacted with delegates, shared her life experiences and
                guided the youth towards a better road. Many grievances and
                problems of young India was solved during the interactive
                session. Other guests included Ms. Kiran Walia, Ms Sharmistha
                Mukherjee, IRS Vinod Kumar Meena, Mr. Mudit Agarwal.
              </p>
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

export default uthan
