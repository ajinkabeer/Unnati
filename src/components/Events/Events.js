import React from "react"
import styles from "../../css/single-blog.module.css"
import "bootstrap/dist/css/bootstrap.min.css"
import ImageGallery from "react-image-gallery"
import Styles from "../../css/about.module.css"

const parliamentaryDebate = [
  {
    original:
      "https://lh3.googleusercontent.com/9uT1bOo-ybgXSF2SmwxhtfYg4tt6HT1TSuAdDuocWe4ij2zHUcikENoQIdk6ZLwma8enOAGzdxShuzaoLbhcnTPln4wzOGH7TpZb_oyZ_RYJ64uz3ledGW8ztOWAitFr2C7NKECMpHPDcZcZNsAor3aMSkdBYm_qlHAKcDx41EKrGSV8290BuX7TLweh2uZTaU3Wksegan2x57l7Q_cXY1-it-hrMV9KJ1Qiu5RRa2HOiCrOH0cMOJl7wzb9WwAkfdER0mBCJVgk7-A1vzNKXPSEOb4FCEsuLByUGdXTcDuz1xB2MorBbmdRFR0kNs5o5rrBoBVyqg1lI-HNCxxBqPY6aV3pSVcxZzW7HyTECrJVDj3ow8kNUzgfMgtUyIul47LkVdbp_uu1ANx1jDBYrfOFjPGSD9bB2DScwrduU0GlifPUy3_LkExx1P7EqD9rCcxWyLa3e9pcDjiqfnVKRKnRCFjTqdY0ZBIg-WXuKRwndiGCatNxTBFn5jAZECOIsLmrdnNuszwMoZCpIjg3F0p-0x82EAYtzf2vRkkmIZ1eM8oQghl7HF9iwcUqMBixkyeApsLVkZxVsPnK-D3Y7k7KzmbRfYxzfBr4St5NbAwPi-YClhyELkr8xu13pxsgkoPDpKdkzkHqGvIIaaBkaWtapsKhrURFVhvXbTjxZCu2ekEqI-a5pYoU61jrMGADNafoaYbxI5msfv7B1L5UwGiHJ89ChWBhVCvqjrHvqY8Ccg=w348-h260-no",
    sizes: {
      width: "250",
      height: "250",
    },
  },
  {
    original:
      "https://lh3.googleusercontent.com/OXoFtnKMQHRJIBHBfXqVxR-X-E4rOKnxrrxZfR-H-9C1qKisgzaXpFI-yrE-vDcZuAS8HPYFwo21xL2Z__kmiK5_HgF_PmD8yh6Br0UeWe67eO6gC94pbY-odnVkYAZyfm1MpcntNEPegU0RkCjNQYBzx3yIu_rYA3egXqfruGVb_BFH9m9hu8mEB1nrAEzMl_kbU-n7tB_cx946tiiZ6ynhEP5LZZZNmQ63ebZhoDYkmjYdVIT13dTfPKg2DaaE5mfnXHJUfjNbi50t2EX5Ev6HDf0ujaZuj9_ZSo3ViDlHiLl8icUZ1gXMobZg9nrC3yRw9QKGXqHpt4pGuqxdLXTW9OXM11ekdkxFzYr1WLZ5VOnuOdbikTfm8AsIemc6xZZz9tjVn7dx1yCMIDL-zEO1HyAtyq_xM2uQks1owe3Zz6tRn6652knZtArAOv1ZKm5LuLaIlWckl7hHp1JknuBOlxwQ2TIR18ih80_r6UnXsONWwMhN74CRmXUYwSVooU0IOJoWPMITMWMASQhkkNO71Opxh7LZIZzg-Cz9mYCcapI2usnrI14DNcA3VPRsJNmyyaSeSGoOy2c2UYv2a_2rOF-Qp9chcNzHexPctGixnLm4P5qAGpkh1wX-jEvYkFpzmZrJqchGNZCIon8s3zeBde9TWGzoPFgPfx13r8YuzQUJpE9xcE4_4qRrS3huYk3eKrpVFgm1xjsVTrQ753jkTfMDhpjk_mZbYBmAArp7gg=w348-h260-no",
    sizes: {
      width: "250",
      height: "250",
    },
  },
  {
    original:
      "https://lh3.googleusercontent.com/vESkfl9mMxwzvhX8iVwEKEwrc_L3QUyEfRxji7P_FPBw6vk0ZZ2kZ2NY5H7UU4uZTQePH4WO3GrRJp8bpqDOqM6TDs06NuMBTZDFz2FnpA4S12H00qirEFidadJ91SqMOhCrORmqZcaKIZX07ACUJtDbcUARVNrS_vkfexrpBFhfhfcpXD1bXUx4k6dmFNtDMgD0HsAl5Vb21AJCLG9f3SiRFVqAaw_sDWfsjMu-IPRaQWFNhM-kuzl5D3AwcG-g-BCh2sqK9TVxwCyn4KhyICIfHe_p7yQulV_7SiJGLAsvqONFPkTt29uSTBfSVs0lqMZ_Z2zE_YZ8qAQCuA4GZYhe2uq1Z-aACgPCiyaMn3LuM5GouHZjuErvTWqM4vAt0MnIVNkwak34TaBZ62bCFde63qaK0RCdzJYZKzAlVU4GHOZKMFY12XpZtyAzWJ1cIWRIdwuEIdweH0QoWxSxCgw_uVn6Z06IL7s_5_jlNNxp3ipcqgE05DBnszX7GdVB32-b_hbv4PAdvnnRlcfxkIUhDg-XbwZTuTiaTnqtkWuFbQjDj7h9YMuwH60kKHMMLeqqo9Ttt0gQas2CFpm1WqL0Acnks_HAo6v_v4bBatRpVZhQkiZgfI2WO5oo-Aj24vjpS-EBlAvVX-F7fMflbjErznNUkp5j6oxujNCMgeXp2awg5KLso-K8LAyP1covYeWaUyNnacQzCLH7lhp_faWieX5v_FwR-Sqo6YhpK3ljpg=w348-h260-no",
    sizes: {
      width: "250",
      height: "250",
    },
  },
  {
    original:
      "https://lh3.googleusercontent.com/JzZiLDF-2UK42WYAmtIn9RKFT8A1JvxpclkXGKq7w9-DygG8LdgxWim2KCEVcjE17mTjY2wuXZKdk16cxG6gC3YZTIXvkwvWgx2cXptA-3szgHsJ5sylihzBSRzO0N28GY3Q9FcXi6okPTxvCYpJ3NoUGtxpt_9QExpT37Rv0Jo7Od2ORltBkVD0kVcU29oKgAmQrg4YFRW320vwfCQCJMU9tJ0q-JUdHsOsrueuhejQyrDw1B__td5DLeNn29yI55hGZm0aa3SHrnrEtQ4OcWwaCXTZK2yg7kUG3p9cOxOBjOe2w9ioI17Aw25p-7X7ZkiL_NCURoNIhGcDukhmQlKlUyxZzwLteamInEE377RlrUsGVC90zzmR0bpPP_QVC4P_Ynjd9LMj3Rxj7A9GU8eGnV01sgUnsZ5BDbbJ5OuA7Pd3qbXugCZVYEyUwiQK7qPhaUoP2FryTaLtWEFih8ZrJIAtTOYGzfNGngKFIVEeMIytzgEPl_xtl-p6ov9AaTd1OMC_tcamOyUmNe8mFpbatE5hpHKfoQk4-v7rKDWbmI-yHbjHQcOwGq9oxkoDNA8I-35VpDmhmtXsp-X44MXpjOatbxaSFwuMO6SbUgZmW5Rl-IBV4bFkZLLk6OZzHLIsD__P-tZq8_w_v4CL5cHv50Ayx0ks6D3lDLAHO66Uex0-8lyXuwfXTg6VyQ7BFUF_GC2o9y46Qcli1dtHCMQ4Xtc2n-9vtxZmmzfkq8Q9hA=w348-h260-no",
    sizes: {
      width: "250",
      height: "250",
    },
  },
]

class events extends React.Component {
  render() {
    return (
      <div>
        <section className={Styles.about} style={{marginTop:-30}}>
          <div className={Styles.aboutCenter}>
            <article className={Styles.aboutImg}>
              <div className={Styles.imgContainer}>
                <ImageGallery
                  items={parliamentaryDebate}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showIndex={false}
                  infinite={false}
                />
              </div>
            </article>
            <article className={Styles.aboutInfo}>
              <h5>Parliamentary Debate</h5>
              <p>
                {" "}
                For and against gives birth to a parley And in parliament,
                dispute of words is considered a formal way. 'A good parliament
                is built with good debaters'. To provide a platform to many
                young debaters to showcase their talent, Team Unnati organized a
                Parliamentary Debate, where students from all over India
                participated in a huge figure. The chief guest for the event was
                Sharmishtha Mukherjee Ji, spokesperson of AICC Mentor for the
                event was Amrita Dhawan Ji, President of NSUI. The event ended
                auspiciously with the participation of more than 1300 students.
              </p>
            </article>
          </div>
        </section>

        <section className={Styles.about}>
          <div className={Styles.aboutCenter}>
            <article className={Styles.aboutImg}>
              <div className={Styles.imgContainer}>
                <ImageGallery
                  items={parliamentaryDebate}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showIndex={false}
                  infinite={false}
                />
              </div>
            </article>
            <article className={Styles.aboutInfo}>
              <h5>Parliamentary Visit</h5>
              <p>
                {" "}
                A parliamentary visit was organized by Team Unnati. Team Unnati
                believes in secular and demographic work mode. Visits in such a
                way are organized more often to keep the interns connected with
                the country and experience the importance and height of Unnati,
                while working with the aided system of government of India.
                Moreover, 1500 students and interns participated in the event
              </p>
            </article>
          </div>
        </section>

        <section className={Styles.about}>
          <div className={Styles.aboutCenter}>
            <article className={Styles.aboutImg}>
              <div className={Styles.imgContainer}>
                <ImageGallery
                  items={parliamentaryDebate}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showIndex={false}
                  infinite={false}
                />
              </div>
            </article>
            <article className={Styles.aboutInfo}>
              <h5>Interactive Session</h5>
              <p>
                {" "}
                An Interactive Session was organized by Team Unnati. The event
                was successfully drawn to a close with the support of Mrs. Rama,
                Principal of Hans Raj College. More than 1700 students
                participated in the event
              </p>
            </article>
          </div>
        </section>

        <section className={Styles.about}>
          <div className={Styles.aboutCenter}>
            <article className={Styles.aboutImg}>
              <div className={Styles.imgContainer}>
                <ImageGallery
                  items={parliamentaryDebate}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showIndex={false}
                  infinite={false}
                />
              </div>
            </article>
            <article className={Styles.aboutInfo}>
              <h5>Run For Education Excellence</h5>
              <p>
                {" "}
                To promote education among different sections of society, team
                Unnati organized Run For Education Excellence event. To cheer up
                the spirits of the participants, the Youth icon Mr. Harsh
                Beniwal was present at the event.. Over 2000 students partook in
                the event.
              </p>
            </article>
          </div>
        </section>

        <section className={Styles.about}>
          <div className={Styles.aboutCenter}>
            <article className={Styles.aboutImg}>
              <div className={Styles.imgContainer}>
                <ImageGallery
                  items={parliamentaryDebate}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showIndex={false}
                  infinite={false}
                />
              </div>
            </article>
            <article className={Styles.aboutInfo}>
              <h5>Erudite: The Quiz</h5>
              <p>
                {" "}
                A quiz competition was organized by Team Unnati, where IPS
                Officers Mr. Sudhir as well as Mr. Amit played the role of
                quizmasters and conducted the entire quiz. The guests for the
                event were famous YouTubers Mr. Amit Bhadana and Mr. Harsh Deep
                Ahuja. The chief guest for the event was Mr. Amitabh Khare, IAS
                Officer. The quiz was conducted with the approval of officers to
                provide fair competition to the participants. More than 2500
                students associated themselves with the event.
              </p>
            </article>
          </div>
        </section>

        <section className={Styles.about}>
          <div className={Styles.aboutCenter}>
            <article className={Styles.aboutImg}>
              <div className={Styles.imgContainer}>
                <ImageGallery
                  items={parliamentaryDebate}
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
                Indian committees namely Lok Sabha, National Security Council,
                All India Political Parties and Meet and stakeholders meet. The
                Uthan Youth Parliament was a success with the participation of
                more than 350 delegates from all over India. TIt was graced by
                the presence of eminent dignitaries like Mr. Eldo George
                Varghese, Mr. Vinod Kumar Meena(IPOS) and Mr. Sanil Sachar.
              </p>
            </article>
          </div>
        </section>

        <section className={Styles.about}>
          <div className={Styles.aboutCenter}>
            <article className={Styles.aboutImg}>
              <div className={Styles.imgContainer}>
                <ImageGallery
                  items={parliamentaryDebate}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showIndex={false}
                  infinite={false}
                />
              </div>
            </article>
            <article className={Styles.aboutInfo}>
              <h5>Indo - Korean Meet</h5>
              <p>
                {" "}
                To build a better and strong relationship with Korea, Team
                Unnati organised an Indo Korean Meet where delegates from Korea
                discussed on different issues and topics related to India with
                different schools and University students.
              </p>
            </article>
          </div>
        </section>

        <section className={Styles.about}>
          <div className={Styles.aboutCenter}>
            <article className={Styles.aboutImg}>
              <div className={Styles.imgContainer}>
                <ImageGallery
                  items={parliamentaryDebate}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showIndex={false}
                  infinite={false}
                />
              </div>
            </article>
            <article className={Styles.aboutInfo}>
              <h5>Mahapanchayat MUN</h5>
              <p>
                {" "}
                Mahapanchayat MUN was held by Unnati on 27th and 28 th August,
                2019 at Evergreen Public School where students used their
                oratory skills to discuss on different social issues. Young
                minds were molded to be better leaders. School level kids joined
                this event and they proved their point by a debate because
                debate and divergence of views can only enrich our history and
                culture
              </p>
            </article>
          </div>
        </section>

        <section className={Styles.about}>
          <div className={Styles.aboutCenter}>
            <article className={Styles.aboutImg}>
              <div className={Styles.imgContainer}>
                <ImageGallery
                  items={parliamentaryDebate}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showIndex={false}
                  infinite={false}
                />
              </div>
            </article>
            <article className={Styles.aboutInfo}>
              <h5>Career counselling</h5>
              <p>
                {" "}
                Career counselling is an essential factor for identifying the
                real potential and guiding students towards a right career path.
                Students needs to know the importance of career coaching and get
                the right guidance before they choose any academic stream. Team
                Unnati took a step forward to guide the fresh minds and teach
                them the importance of different career options in our society.
              </p>
            </article>
          </div>
        </section>

        <section className={Styles.about}>
          <div className={Styles.aboutCenter}>
            <article className={Styles.aboutImg}>
              <div className={Styles.imgContainer}>
                <ImageGallery
                  items={parliamentaryDebate}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showIndex={false}
                  infinite={false}
                />
              </div>
            </article>
            <article className={Styles.aboutInfo}>
              <h5>Samvidhan se vidhan tak</h5>
              <p>
                {" "}
                Failure to know and utilize the rights given to individuals
                often leads to their erosion and possibly getting themselves
                deeper into trouble..... So one must be well aware of their
                Constitution and the rights that it imparts us... "Samvidhan se
                Vidhan tak", a seminar on the rights that the Constitution gives
                us was organised by Unnati 28th November'18.
              </p>
            </article>
          </div>
        </section>

        <section className={Styles.about}>
          <div className={Styles.aboutCenter}>
            <article className={Styles.aboutImg}>
              <div className={Styles.imgContainer}>
                <ImageGallery
                  items={parliamentaryDebate}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showIndex={false}
                  infinite={false}
                />
              </div>
            </article>
            <article className={Styles.aboutInfo}>
              <h5>Self analysis test</h5>
              <p>
                {" "}
                Unnati believes in uplifting those aspirants who possess will
                but lack resources. Keeping this in mind, Unnati, conducted a
                worship on How to crack Civil Service Examination followed by a
                short Self-Analysis Test on 10th February'19. Around 300
                aspirants of the prestigious exam turned up to be a part of the
                same
              </p>
            </article>
          </div>
        </section>
      </div>
    )
  }
}

export default events
