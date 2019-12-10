import React from "react"
import Styles from "../../css/about.module.css"
import lebanon from "../../images/lebanon.jpg"
import mountain from "../../images/mountains.jpg"
import news from "../../images/news.jpg"

const achievements = () => {
  return (
    <>
      <section className={Styles.about}>
        <div className={Styles.aboutCenter}>
          <article>
            <div>
              <img
                src={lebanon}
                style={{
                  border: "1px solid black",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "65%",
                  marginTop: -15,
                }}
              ></img>
            </div>
          </article>
          <article className={Styles.aboutInfo}>
            <h5>Letter of Appreciation From the Republic of Lebnon</h5>
            <p>
              {" "}
              Opportunities don't happen. You create them. Only those who has
              readiness to go too far can possibly find out how far they can go.
              Team Unnati feels empowered and ecstatic by the overwhelmed
              gesture shown to us by his Excellency Mr. Rabie Narsh(Ambassador,
              Embassy of Lebanon) and sending us a letter of Appreciation as a
              token of respect for our service to society.
            </p>
          </article>
        </div>
      </section>

      <section className={Styles.about}>
        <div className={Styles.aboutCenter}>
          <article>
            <div>
              <img
                src={mountain}
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "85%",
                  marginTop: -15,
                }}
              ></img>
            </div>
          </article>
          <article className={Styles.aboutInfo}>
            <h5>Unnati on Mountains</h5>
            <p>
              {" "}
              Every mountain top is within reach if you just keep climbing.
              Scrambling the steep slopes and rattling over various cuts is not
              everyone’s cup of tea. Unnati salutes the audacity, wisdom and
              courage of our team member Nitish Singh on successfully conquering
              the Mt.Stok Kangri and hoisting Unnati's flag at the peak of Mt.
              Stok Kangri.
            </p>
          </article>
        </div>
      </section>

      <section className={Styles.about}>
        <div className={Styles.aboutCenter}>
          <article>
            <div>
              <img
                src={news}
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "50%",
                  marginTop: "-3%",
                }}
              ></img>
            </div>
          </article>
          <article className={Styles.aboutInfo}>
            <h5>Newspaper Publication</h5>
            <p>
              {" "}
              It is said, "Kids saving the world > adults saving the world." It
              is important to inculcate the 'debate and discussion' culture in
              them. To do that MUN can be really helpful. Unnati organizes Model
              United Nations in different schools, our latest venture was
              organizing MUN at Evergreen Public School, Vasundhara Enclave
              where around 450 delegates form Dehi/NCR debated and discussed on
              various topics like sustainable development goals 2030 etc. Rabie
              Narsh, the ambassador of the republic of Lebanon and Naveen
              Sharma, President International Society for Cooperation and
              Development gave away the prize for the best delegate and the best
              speaker.
            </p>
          </article>
        </div>
      </section>

      <section className={Styles.about}>
        <div className={Styles.aboutCenter}>
          <article>
            <div>
              <a
                className="btn-primary"
                href="https://www.youtube.com/watch?v=3tK1JUOc-fM&feature=emb_title"
                style={{ margilLeft: 10 }}
              >
                Youtube Link
              </a>
            </div>
          </article>
          <article className={Styles.aboutInfo}>
            <h5>Video Publication</h5>
            <p>
              {" "}
              "With bad laws and good civil servants it is still possible to
              govern. But with bad civil servants even the best laws can't work.
              " So to mould the top-notch civil servants of tomorrow Unnati: The
              knowledge hub for civil Aspirants conducted its first interactive
              session at Hansraj College on 8 April 2017. Experienced and
              honoured civil servants Jatin Narval, Dr. Sudhir, Amitabh Khare
              came to give some knowledge about the civil services exam to the
              aspirants. The session was legit as the candidates went home with
              smile on their faces and new knowledge in their minds..
            </p>
          </article>
        </div>
      </section>
    </>
  )
}

export default achievements
