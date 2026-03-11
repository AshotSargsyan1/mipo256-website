"use client"
import { Activity, useState } from "react";
import styles from "./styles.module.css"
import { pastEvents, upcomingEvents } from "@/utils";
import { EEventsType } from "@/models";
import { EventCard } from "./EventCard";

export const Events = () => {
    const [activeEventsType, setActiveEventsType] = useState<EEventsType>(EEventsType.UPCOMING)

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
                <Activity mode={activeEventsType === EEventsType.UPCOMING ? "visible" : "hidden"}>
                    {upcomingEvents.map((event) => (
                        <EventCard event={event} key={`upcoming-${event.title}`} />
                    ))}
                </Activity>

                <Activity mode={activeEventsType === EEventsType.PAST ? "visible" : "hidden"}>
                    {pastEvents.map((event) => (
                        <EventCard event={event} key={`past-${event.title}`} />
                    ))}
                </Activity>
            </div>
        </section>
    )
}