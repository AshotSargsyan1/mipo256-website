import Image from "next/image"
import styles from "./styles.module.css"

import { HeroBullets } from "./HeroBullets"
import { HeroChips } from "./HeroChips"
import { SocialMediaLinks } from "../SocialMediaLinks"
import { CircuitLines } from "./CircuitLines"
import { MikhailPolivakhaImage } from "@/assets"

export const Hero = () => {
  return (
    <section className={styles.MainWrapper} id="home">
      <div className={`MainContainer ${styles.InnerWrapper}`}>
        <div className={styles.ContentWrapper}>
          <h1 className="TextLarge">
            Mikhail Polivakha
          </h1>

          <p className={`TextSmall ${styles.Nickname}`}>
            aka mipo256
          </p>

          <HeroBullets />

          <SocialMediaLinks wrapperStyles={styles.LinksWrapperStyles} />

          <HeroChips />
        </div>

        <div className={styles.ImageWrapper}>
          <CircuitLines />
          <Image
            src={MikhailPolivakhaImage}
            alt="Mikhail Polivakha"
            className={styles.Image}
            priority
          />
        </div>
      </div>
    </section>
  )
}