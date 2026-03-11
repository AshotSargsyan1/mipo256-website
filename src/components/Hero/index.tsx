import MikhailPolivakhaPhoto from "@/assets/images/mikhail_polivakha_image.jpg"
import Image from "next/image"
import styles from "./styles.module.css"

import { EmailIcon, FacebookIcon, GithubIcon, LinkedinIcon, TelegramIcon, XIcon } from "@/assets"
import { HeroBullets } from "./HeroBullets"
import { HeroChips } from "./HeroChips"

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

          {/* TODO: Use SVGR in future */}
          <div className={styles.LinksWrapper}>
            <Image src={XIcon} alt="X icon" />
            <Image src={FacebookIcon} alt="Facebook icon" />
            <Image src={LinkedinIcon} alt="Linkedin icon" />
            <Image src={EmailIcon} alt="Email icon" />
            <Image src={TelegramIcon} alt="Telegram icon" />
            <Image src={GithubIcon} alt="Github icon" />
          </div>

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