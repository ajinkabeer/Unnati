import React from "react"
import Styles from "../../css/about.module.css"
import { journey, journey2 } from "./links"
import ImageGallery from "react-image-gallery"

const journeySoFar = () => {
  return (
    <>
      <div className={Styles.aboutCenter}>
        <article className={Styles.aboutImg}>
          <div className={Styles.imgContainer}>
            <ImageGallery
              items={journey}
              showPlayButton={false}
              showFullscreenButton={false}
              showIndex={false}
              infinite={false}
            />
          </div>
        </article>
        <article className={Styles.aboutInfo}>
          <h5>Journey so far</h5>
          <p>
            {" "}
            It seems like just now, only a few days ago UNNATI was formed but it
            has been a whole year. We cannot believe how far we have come in
            just 365 days, all credits to the love and support you guys have
            shown. We look back to the past 2 years with an awe. How amazing it
            has been! How much we have grown up in just 2 years! We have you
            guys to thank for it. Let's promise to continue the growth and reach
            impeccable heights
          </p>
        </article>
      </div>
      <div className={Styles.aboutCenter} style={{ marginTop: 100 }}>
        <article className={Styles.aboutImg}>
          <div className={Styles.imgContainer}>
            <ImageGallery
              items={journey2}
              showPlayButton={false}
              showFullscreenButton={false}
              showIndex={false}
              infinite={false}
            />
          </div>
        </article>
        <article className={Styles.aboutInfo}>
          <h5>Third Birthday!</h5>
          <p>
            {" "}
            Alone we can do so little, together we can do so much. Unnati is not
            just an organization, we are a family. We work together, have each
            others back, stand together through every thicks and thins. We work
            together as one. On 18th December 2019, we celebrated Unnati's third
            birthday. On this event the Founder and Chairman of Unnati, Mr.
            Lokesh Chugh alongside the entire Unnati family cut cake and praised
            the three years of hard work and fellowship. Three years of putting
            our endeavors to improve this world a spot to live, of educating
            society. Three years of molding the eventual fate of this nation by
            educating our youth making them a mindful and dependable resident of
            this nation, making them an asset for the country.{" "}
          </p>
        </article>
      </div>
    </>
  )
}

export default journeySoFar
