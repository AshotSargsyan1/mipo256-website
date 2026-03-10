"use client"
import { useState } from "react";
import styles from "./styles.module.css"
import { pastEvents, upcomingEvents } from "@/utils";
import { EEventsType } from "@/models";

export const Events = () => {
    const [activeEventsType, setActiveEventsType] = useState<EEventsType>(EEventsType.UPCOMING)

    const events = activeEventsType === EEventsType.UPCOMING ? upcomingEvents : pastEvents

    return (
        <section className={`MainContainer ${styles.MainWrapper}`}>
            <h2 className="TextMedium">Events</h2>

            <div className={styles.TabsWrapper}>
                <button
                    className={`${styles.Tab} ${activeEventsType === EEventsType.UPCOMING ? styles.TabActive : ''}`}
                    onClick={() => setActiveEventsType(EEventsType.UPCOMING)}
                >
                    Upcoming
                </button>
                <button
                    className={`${styles.Tab} ${activeEventsType === EEventsType.PAST ? styles.TabActive : ''}`}
                    onClick={() => setActiveEventsType(EEventsType.PAST)}
                >
                    Past
                </button>
            </div>

            <div className={styles.CardsWrapper}>
                {events.map(({ date, type, title, location, url }) => (
                    <article className={styles.Card} key={title}>
                        <div className={styles.CardMeta}>
                            <span className={styles.Date}>{date}</span>
                            <span className={styles.Badge}>{type}</span>
                        </div>
                        <h3 className={styles.CardTitle}>{title}</h3>
                        <p className={styles.Location}>{location}</p>
                        <a href={url} target="_blank" rel="noopener noreferrer" className={styles.Link}>
                            Event Details
                        </a>
                    </article>
                ))}
            </div>
        </section>
    )
}