import { IEvent } from "@/models";
import { pastEvents, upcomingEvents } from "@/utils";

const getPastEventsYears = (): number[] => {
    const years = pastEvents.map(({ date }) => new Date(date).getFullYear())
    const uniqueYears = new Set(years)
    return [...uniqueYears];
};

export const getPastEventsSortedYears = (): number[] => {
    return getPastEventsYears().toSorted((prevElement, nextElement) => nextElement - prevElement)
};

export const getSortedUpcomingEvents = (): IEvent[] => {
    return upcomingEvents.toSorted((prevElement, nextElement) => new Date(prevElement.date).getTime() - new Date(nextElement.date).getTime())
}