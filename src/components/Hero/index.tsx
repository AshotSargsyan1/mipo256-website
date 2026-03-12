import MikhailPolivakhaPhoto from "@/assets/images/mikhail_polivakha_image.jpg"
import Image from "next/image"
import styles from "./styles.module.css"

import { HeroBullets } from "./HeroBullets"
import { HeroChips } from "./HeroChips"
import { SocialMediaLinks } from "../SocialMediaLinks"

export const Hero = () => {
  return (
    <section className={styles.MainWrapper}>
      <div className={`MainContainer ${styles.InnerWrapper}`}>
        <div className={styles.ContentWrapper}>
          <h1 className="TextLarge">
            Mikhail Polivakha
          </h1>

          <p className={styles.Nickname}>
            aka mipo256
          </p>

          <HeroBullets />

          <SocialMediaLinks wrapperStyles={styles.LinksWrapperStyles} />

          <HeroChips />
        </div>

        <div className={styles.ImageWrapper}>
          <Image
            src={MikhailPolivakhaPhoto}
            alt="Mikhail Polivakha"
            className={styles.Image}
          />
        </div>
      </div>
    </section>
  )
}