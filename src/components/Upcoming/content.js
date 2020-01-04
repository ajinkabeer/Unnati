import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import ImageGallery from "react-image-gallery"
import Styles from "../../css/about.module.css"
import { behtar, mun, uth } from "./links"

class content extends Component {
  render() {
    return (
      <div>
        <section className={Styles.about} style={{ marginTop: -50 }}>
          <div className={Styles.aboutCenter}>
            <article className={Styles.aboutImg}>
              <div className={Styles.imgContainer}>
                <ImageGallery
                  items={behtar}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showIndex={false}
                  infinite={false}
                />
              </div>
            </article>
            <article className={Styles.aboutInfo}>
              <h5>Behtar Bharat Youth Parliament</h5>
              <p>
                {" "}
                "Parliament is more than procedure- it is the custodian of
                nations freedom" - John Diefenbaker It is very important to make
                the common people specially the youth, aware of the procedures
                of Parliament. Todays's youth is tommorow's adult, the voters of
                the country, those who will vote and decide the govt and some of
                them probably will even contest the election and become the part
                of the government and participate in parliamentary proceedings.
                To make the youth experience the parliamentary proceedings and
                give them an experience of how the parliament works about
                different topics UDYAT : The Rising Stars in association with
                NSUI is organizing 'Behtar Bharat Youth Parliament' on 11th and
                12th January 2020. There will be three committees- Rajya Sabha,
                AIPPM and National Press. Make sure to register yourself as soon
                as possible to grab the seat in the committe you wish to chosse.
                To register for any of the committees click on the link below:-
                <a
                  className="btn-primary"
                  href="https://docs.google.com/forms/d/1QH1Ia9JchhmwcttKyZ8Y86YeHcrjrYqQo_LgLFHGjwo/edit"
                  style={{ marginTop: 15 }}
                >
                  Click here to register
                </a>{" "}
                <br />
                <br />
                <a
                  className="btn-primary"
                  href="https://facebook.com/events/527759531110437/?ti=as"
                >
                  Facebook Link
                </a>
              </p>
            </article>
          </div>
        </section>

        <section className={Styles.about} style={{ marginTop: -50 }}>
          <div className={Styles.aboutCenter}>
            <article className={Styles.aboutImg}>
              <div className={Styles.imgContainer}>
                <ImageGallery
                  items={mun}
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
                Greetings to all, With immense gratitude and pleasure we are
                announcing the second edition of Mahapanchayat MUN which will be
                coming very soon. The legacy, ladies and gentlemen, will speak
                for itself. Do Muster ideas, acknowledge and deliberate issues
                troubling the world as Mahapanchayat is not only about debating
                and winning it's about aquiring knowledge as knowledge is the
                life and the cure. Give a chance to yourself to become a leader
                , who is not a searcher of consensus but molder of consensus.
                Take this opportunity to develop your oratory and debating
                skills. Stop dreaming and Start working. Stay tuned for more
                updates!
              </p>
            </article>
          </div>
        </section>

        <section className={Styles.about} style={{ marginTop: -50 }}>
          <div className={Styles.aboutCenter}>
            <article className={Styles.aboutImg}>
              <div className={Styles.imgContainer}>
                <ImageGallery
                  items={uth}
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
                The pen has always proved to be mightier than the sword. So, if
                you think that you can bring a change in this world, with the
                help of your quill, then this is the perfect opportunity. UTHAN
                Youth Parliament is back the 5th time to provide you a platform
                to shape the thought of the masses and hone your diplomacy
                skills. With a sustained legacy marked by impeccable standards
                of excellence the UTHAN Youth Parliament is the right place for
                the young leaders to meet. Hold your horses for just a little
                more time, See you soon at UTHAN V in 2020.
              </p>
              <a
                className="btn-primary"
                href="https://www.facebook.com/uthanyouthparliament/"
              >
                Facebook link
              </a>
            </article>
          </div>
        </section>
      </div>
    )
  }
}

export default content
