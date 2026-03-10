import Image from 'next/image';
import styles from './styles.module.css';

import MikhailPolivakhaPhoto from "@/assets/images/mikhail_polivakha_image.jpg"

export const Hero = () => {
    return (
        <section className={styles.MainWrapper}>
            <div className={`MainContainer ${styles.InnerWrapper}`}>
                <div className={styles.HeroContentWrapper}>
                    <h1 className={`TextLarge ${styles.Title}`}>
                        Mikhail Polivakha <br /> (aka mipo256)
                    </h1>
                    <p className={styles.Description}>
                        CEO & Founder of Axelix Labs. Senior Software Engineer with many years of experience. Spring Data contributor. Public speaker at Devoxx, Spring I/O and other conferences.
                    </p>
                </div>
                <div className={styles.PhotoWrapper}>
                    <Image src={MikhailPolivakhaPhoto} alt='Mikhail Polivakha photo' className={styles.Photo} />
                </div>
            </div>
        </section>
    );
};