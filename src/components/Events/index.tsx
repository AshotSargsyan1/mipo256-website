"use client"
import { Activity, useState } from "react";
import styles from "./styles.module.css"
import { EVENTS_ALL_YEARS_FILTER, pastEvents } from "@/utils";
import { EventCard } from "./EventCard";
import { PastYearsDropdown } from "./PastYearsDropdown";
import { getSortedUpcomingEvents } from "@/helpers";
import { IEvent, TEventSelectedYear } from "@/models";

export const Events = () => {
    const [selectedYear, setSelectedYear] = useState<TEventSelectedYear>(null)

    const sortedUpcomingEvents = getSortedUpcomingEvents()

    const filteredEvents: IEvent[] = selectedYear === EVENTS_ALL_YEARS_FILTER
        ? pastEvents
        : pastEvents.filter(event => new Date(event.date).getFullYear() === selectedYear);

    return (
        <section className={`MainContainer ${styles.MainWrapper}`}>
            <h2 className="TextMedium">Events</h2>

            <div className={styles.TabsWrapper}>
                <button
                    onClick={() => setSelectedYear(null)}
                    className={`TextUltraSmall ${styles.Tab} ${!selectedYear ? styles.TabActive : ''}`}
                >
                    Upcoming
                </button>

                <PastYearsDropdown
                    selectedYear={selectedYear}
                    setSelectedYear={setSelectedYear}
                />
            </div>

            <div className={styles.CardsWrapper}>
                <Activity mode={!selectedYear ? "visible" : "hidden"}>
                    {sortedUpcomingEvents.map((event) => (
                        <EventCard event={event} key={event.title} />
                    ))}
                </Activity>

                <Activity mode={selectedYear ? "visible" : "hidden"}>
                    {filteredEvents
                        .toSorted((prevElement, nextElement) => new Date(nextElement.date).getTime() - new Date(prevElement.date).getTime())
                        .map((event) => <EventCard event={event} key={event.title} />)
                    }
                </Activity>
            </div>
        </section>
    )
}