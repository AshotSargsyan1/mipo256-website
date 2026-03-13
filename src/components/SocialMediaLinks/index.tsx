import { EmailIcon, FacebookIcon, GithubIcon, LinkedinIcon, TelegramIcon, XIcon } from '@/assets';

import styles from "./styles.module.css"

interface IProps {
    wrapperStyles?: string
}

export const SocialMediaLinks = ({ wrapperStyles }: IProps) => {
    return (
        <div className={`${wrapperStyles} ${styles.MainWrapper}`}>
            <a href="https://x.com/mpolivaha" target="_blank" rel="noopener noreferrer">
                <XIcon />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
            </a>
            <a href="https://www.linkedin.com/in/mikhail-polivakha-7995571ab" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon />
            </a>
            <a href="mailto:mikhailpolivakha@gmail.com" target="_blank" rel="noopener noreferrer">
                <EmailIcon />
            </a>
            <a href="https://t.me/mipo256" target="_blank" rel="noopener noreferrer">
                <TelegramIcon />
            </a>
            <a href="https://github.com/mipo256" target="_blank" rel="noopener noreferrer">
                <GithubIcon />
            </a>
        </div>
    )
} 