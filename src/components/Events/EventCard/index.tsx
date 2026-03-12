import { IEvent } from "@/models"
import styles from "./styles.module.css"

interface IProps {
    event: IEvent
}

export const EventCard = ({ event }: IProps) => {
    const { type, title, date, location, url } = event

    return (
        <article className={`TextUltraSmall ${styles.Card}`}>
            <div className={styles.RibbonWrapper}>
                <span className={styles.Ribbon}>{type}</span>
            </div>

            <h3 className={`TextSmall ${styles.CardTitle}`}>{title}</h3>
            <span className={styles.Date}>{date}</span>
            <p className={styles.Location}>{location}</p>
            <a href={url} target="_blank" rel="noopener noreferrer" className={styles.Link}>
                Event Details
            </a>
        </article>
    )
}