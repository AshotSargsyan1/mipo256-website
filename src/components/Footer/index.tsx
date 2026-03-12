import { SocialMediaLinks } from '../SocialMediaLinks';
import styles from './styles.module.css'

export const Footer = () => {
    const currentYear = new Date().getFullYear().toString();

    return (
        <footer className={styles.MainWrapper}>
            <div className={`MainContainer ${styles.InnerWrapper}`}>
                <div>
                    © <time dateTime={currentYear}>{currentYear}</time> Mikhail Polivakha. All rights reserved.
                </div>

                <SocialMediaLinks />
            </div>
        </footer>
    )
}