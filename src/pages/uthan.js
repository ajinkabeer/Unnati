import React, { Component } from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/StyledTitle"
import Styles from "../css/about.module.css"
import Abouts from "../components/About/abouts"
import Homeabout from "../components/Home/About"
import Styles2 from "../css/single-blog.module.css"
import styles from "../css/single-blog.module.css"
import ImageGallery from "react-image-gallery"
import { satta, uthans, uthan4, uthan3 } from "../components/uthanLinks"
import Album from "../components/album"

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
              Team Uthan is all set for its next blockbuster, Uthan Edition 5 in
              2020. Register down below to be a part of Uthan legacy.
            </p>
            <a href="https://docs.google.com/forms/d/1TjKSk-y-TwaAlfSKAD94566wzlEh2oGQIxVBLqml_8o/edit">
              Organizing Committee Applications link
            </a>{" "}
            <br />
            <a
              style={{ marginTop: 5 }}
              className="btn-primary"
              href="https://www.facebook.com/uthanyouthparliament/"
            >
              Find us on facebook
            </a>
          </article>
        </div>
      </section>
      <Title title="Uthan Youth Parliament" subtitle="events" />

      <section className={Styles.about}>
        <div className={Styles.aboutCenter}>
          <article className={Styles.aboutImg}>
            <div className={Styles.imgContainer}>
              <ImageGallery
                items={uthans}
                showPlayButton={false}
                showFullscreenButton={false}
                showIndex={false}
                infinite={false}
              />
            </div>
          </article>
          <article className={Styles.aboutInfo}>
            <h5>Uthan Youth Parliament</h5>
            <p>
              {" "}
              Unnati organized its first edition of UTHAN YOUTH PARLIAMENT on
              20-21st January'18 with the foremost motive to encourage healthy
              debate and deliberation. The conference was a simulation of four
              Indian committees namely Lok Sabha, National Security Council, All
              India Political Parties and Meet and stakeholders meet. The Uthan
              Youth Parliament was a success with the participation of more than
              350 delegates from all over India. TIt was graced by the presence
              of eminent dignitaries like Mr. Eldo George Varghese, Mr. Vinod
              Kumar Meena(IPOS) and Mr. Sanil Sachar.
            </p>
          </article>
        </div>
      </section>

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
              Edition 2 of Uthan Youth Parliament, Satta: The Power Of Words, a
              legacy of Uthan Youth Parliament on 28th and 29th July, 2018 was
              bigger and better. With 8 different Committees and exciting
              agendas, the event was filled with 550 delegates from all across
              the country discussing on national and international issues. Mr
              Salman Khurshid graced the event with his presence and remarkable
              Words. He interacted with the students, heard their problems and
              came out on conclusions.
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
              interacted with delegates, shared her life experiences and guided
              the youth towards a better road. Many grievances and problems of
              young India was solved during the interactive session. Other
              guests included Ms. Kiran Walia, Ms Sharmistha Mukherjee, IRS
              Vinod Kumar Meena, Mr. Mudit Agarwal.
            </p>
          </article>
        </div>
      </section>

      <section className={Styles.about} style={{ marginTop: -30 }}>
        <div className={Styles.aboutCenter}>
          <article className={Styles.aboutImg}>
            <div className={Styles.imgContainer}>
              <ImageGallery
                items={uthan4}
                showPlayButton={false}
                showFullscreenButton={false}
                showIndex={false}
                infinite={false}
              />
            </div>
          </article>
          <article className={Styles.aboutInfo}>
            <h5>Uthan Youth Parliament Edition 4</h5>
            <p>
              We are proud to announce that we have successfully conducted yet
              another astounding conference: UTHAN YOUTH PARLUAMENT CHAPTER 4;
              which was graced by the presence of honorable Ambassador Muhamed
              Cengic, a career diplomat with more than two decades of experience
              in the Bosnia and Herzegovina Foreign Service. Prior to his
              current assignment, he served as Ambassador of Bosnia and
              Herzegovina to the Republic of Indonesia, Republic of Singapore
              and DR Timor Leste. We are also gratified by the guests who showed
              up and blessed our occasion: P L Punia, Member of Parliament,
              Rajya Sabha; Ruchi Gupta, Joint Secretary, AICC; Varun Rajpal,
              Lawyer, High Court; Ashima Mandla, Lawyer, Supreme Court; Neeraj
              Kundan, National President, NSUI; Geeta Sahare, Deputy Dean,
              University of Delhi; Raman Besil, Founder, Langda Aam Productions;
              Naveen Sharma, President, International Society for Cooperation
              and development UTHAN was also the proud hosts of 800+ delegates
              and worked in collaboration with 40 institutions. We are highly
              blessed with love and support we have received over the past few
              months. The success of the conference belongs to the EBs, who
              enriched the level of debate; the hard working guests, who made
              time for us; the organising committee, who worked continuously for
              days and nights without any break; and most importantly the
              delegates, who researched with their heart and put their souls
              into the two days. We would like to show our gratitude towards the
              organising committee, without them hosting an event at such a
              grand level wouldn't have been possible. We held a highly fruitful
              debate on a vast diversity of topics which enriched the knowledge
              of our debaters, and will be helpful in their promising and bright
              future. UTHAN gave the young minds the opportunity to rack up
              their brain and speak in a loud and convincing manner. The
              delegates learnt to defend and counter attack their oppositions
              and geared then for the practical world.
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
