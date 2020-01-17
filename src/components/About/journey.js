import React from "react"
import Styles from "../../css/about.module.css"
import { journey, journey2 } from "./links"
import ImageGallery from "react-image-gallery"

const journeySoFar = () => {
  return (
    <>
      <div className={Styles.aboutCenter}>
        <article className={Styles.aboutImg}>
          <div>
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
          <h5>Journey so far</h5>
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
