import styles from './styles.module.css'

export const Footer = () => {
    const currentYear = new Date().getFullYear().toString();

    return (
        <footer className={`MainContainer ${styles.MainWrapper}`}>
            © <time dateTime={currentYear}>{currentYear}</time> Mikhail Polivakha. All rights reserved.
        </footer>
    )
}