import React from "react"
import Styles from "../../css/about.module.css"
import { journey } from "./links"
import ImageGallery from "react-image-gallery"

const journeySoFar = () => {
  return (
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
          has been a whole year. We cannot believe how far we have come in just
          365 days, all credits to the love and support you guys have shown. We
          look back to the past 2 years with an awe. How amazing it has been!
          How much we have grown up in just 2 years! We have you guys to thank
          for it. Let's promise to continue the growth and reach impeccable
          heights
        </p>
      </article>
    </div>
  )
}

export default journeySoFar
