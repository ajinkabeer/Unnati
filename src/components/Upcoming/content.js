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
              <div>
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
              <a
                className="btn-primary"
                href="https://docs.google.com/forms/d/1kjI97PWRTlldlcHbGAszMmMYxwmPEwj2H0Hu9TT5hRg/edit"
              >
               Delegate Applications
              </a>
            
               <a
                style={{marginTop:5}}
                className="btn-primary"
                href="https://docs.google.com/forms/d/11ZM4l8d7pYCk3lZ0p1HEhS8m6Y6xUwdmtKYSBhhfpvQ/edit"
              >
               Organizing Committee  Applications
              </a>
      
               <a
                style={{marginTop:5}}
                className="btn-primary"
                href="https://docs.google.com/forms/d/1ppUeI2tc2AVOi7sT7KvDUdE6L1AJo6jb_fOru3LmPPc/edit"
              >
             Executive Board Applications
              </a>
            </article>
          </div>
        </section>

        <section className={Styles.about} style={{ marginTop: -50 }}>
          <div className={Styles.aboutCenter}>
            <article className={Styles.aboutImg}>
              <div>
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
              <h5>Uthan V</h5>
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
