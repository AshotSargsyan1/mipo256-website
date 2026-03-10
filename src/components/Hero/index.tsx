import MikhailPolivakhaPhoto from "@/assets/images/mikhail_polivakha_image.jpg"
import Image from "next/image"
import styles from "./styles.module.css"

export const Hero = () => {
  return (
    <section className={styles.MainWrapper}>
      <div className={`MainContainer ${styles.InnerWrapper}`}>
        <div className={styles.ContentWrapper}>
          <div className={styles.Badge}>
            <div className={styles.BadgeDot} />
            <span className={styles.BadgeText}>Available for speaking</span>
          </div>

          <h1 className={`TextLarge ${styles.Title}`}>
            Mikhail Polivakha
          </h1>

          <p className={styles.Nickname}>
            aka mipo256
          </p>

          <p className={styles.Description}>
            CEO & Founder of Axelix Labs. Senior Software Engineer with many years
            of experience. Spring Data contributor. Public speaker at Devoxx,
            Spring I/O and other conferences.
          </p>

          <div className={styles.Tags}>
            {["Lorem1", "Lorem2", "Lorem3", "Lorem4"].map(tag => (
              <span key={tag} className={styles.Tag}>
                {tag}
              </span>
            ))}
          </div>

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