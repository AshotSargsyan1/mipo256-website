import Image from 'next/image';

import styles from './styles.module.css'
import { LightEmailIcon, LightFacebookIcon, LightGithubIcon, LightLinkedinIcon, LightTelegramIcon, LightXIcon } from '@/assets';

export const Footer = () => {
    const currentYear = new Date().getFullYear().toString();

    return (
        <footer className={styles.MainWrapper}>
            <div className={`MainContainer ${styles.InnerWrapper}`}>
                <div>
                    © <time dateTime={currentYear}>{currentYear}</time> Mikhail Polivakha. All rights reserved.
                </div>

                {/* TODO: Use SVGR in future */}
                <div className={styles.LinksWrapper}>
                    <Image src={LightXIcon} alt="X icon" />
                    <Image src={LightFacebookIcon} alt="Facebook icon" />
                    <Image src={LightLinkedinIcon} alt="Linkedin icon" />
                    <Image src={LightEmailIcon} alt="Email icon" />
                    <Image src={LightTelegramIcon} alt="Telegram icon" />
                    <Image src={LightGithubIcon} alt="Github icon" />
                </div>
            </div>
        </footer>
    )
}