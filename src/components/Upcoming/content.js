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
      <p>18th and 19th of April, 2020</p>
      <p>Venue: GD Goenka Public School, Great Noida</p>
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
                skills. Stop dreaming and Start working. 
       
                <p> 1. Lok Sabha I - Discussing the disinvestment policy of the government with emphasis to the fiscal targets.</p>
                
      <p>2. Lok Sabha II - Reviewing the effectiveness of reservation policy.</p>

 <p>3. Rajya Sabha- Discussion on transgender person (protection of Rights act ) 2019</p>

 <p>4. AIPPM - CAA through the lens of Article 14 of Indian Constitution.</p>


 <p>5. Stakeholders Meet - Deliberation on treating Juvenile as adults in cases of serious crimes, with reference to the act of 16 December 2014.
</p>

 <p>6. All India Students Body Meet- Deliberation on the right to education with emphasis on providing free education till class 12.
</p>

 <p>7. Niti Ayog - Finance centric policies on Indian economy.
</p>

 <p>8. UNCSW - Deliberation on discrimination against female athletes & abortion rights/ access to reproductive health.
</p>

 <p>9. UNGA - Use of mercenaries as a means of violating human rights and impeding the exercise of the right of peoples to self-determination
</p>

 <p>10. UNGA DISEC - Role of AI in millitary with special emphasis on unmanned aerial vehicles.
</p>

 <p>11. UNEP - Discussion on solution of climate induced -migration
</p>

 <p>12. UNHRC- protecting victims of human trafficking in conflict and post conflict areas.
</p>

 <p>13. UNSC II - Deliberation on world peace in refrence to relation between iran and America
</p>

 <p>14. UNFCCC- Climate action in line with violation of the SDG with special emphasis on finding solutions to prevent atrocities like Amazon fire and Australian wild fires.
</p>

 <p>15. UNSC I - Discussing ways to increase cooperation between the United Nations and regional and sub regional organizations in maintaining international peace and security
</p>

 <p>16. ODC - Deliberation on complete prohibition of drug testing on animals with emphasis on finding new ways of testing drugs .
</p>

 <p>17. PMHC - Deliberation on the possible solutions to the current situation of Kashmir post removal of article 370 and ongoing lockdown.
</p>

 <p>18. ECOSOC- Enhancing regional economic cooperation through trade and investment in the Asia-Pacific region.
</p>

 <p>19. Cabinet Meet II (Classified) -  Deliberation on the ongoing water crisis with special emphasis to ground water.
</p>

 <p>20. Cabinet Meet (Crisis)
</p>

 <p>21. National Press</p>

 <p>22. International Press</p>

      Stay tuned for more
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
