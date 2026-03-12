import { IEvent } from "@/models";

export const EVENTS_ALL_YEARS_FILTER = "All" 

export const cards = [
    {
        title: 'Card Title 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        title: 'Card Title 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        title: 'Card Title 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
];

export const pastEvents: IEvent[] = [
    { date: 'January 14, 2022', type: 'User Group', title: 'Event Title 1', location: 'City, Country', url: '#' },
    { date: 'January 26, 2023', type: 'Conference', title: 'Event Title 2', location: 'City, Country', url: '#' },
    { date: 'February 7, 2024', type: 'User Group', title: 'Event Title 3', location: 'City, Country', url: '#' },
    { date: 'February 7, 2025', type: 'Conference', title: 'Event Title 4', location: 'City, Country', url: '#' },
    { date: 'January 1, 2025', type: 'User Group', title: 'Event Title 5', location: 'City, Country', url: '#' },
    { date: 'March 17, 2025', type: 'User Group', title: 'Event Title 5', location: 'City, Country', url: '#' },
    { date: 'June 17, 2025', type: 'User Group', title: 'Event Title 5', location: 'City, Country', url: '#' },
    { date: 'February 19, 2021', type: 'Conference', title: 'Event Title 6', location: 'City, Country', url: '#' },
    { date: 'March 4, 2020', type: 'User Group', title: 'Event Title 7', location: 'City, Country', url: '#' },
    { date: 'March 10, 2019', type: 'Conference', title: 'Event Title 8', location: 'City, Country', url: '#' },
];

export const upcomingEvents: IEvent[] = [
    { date: 'March 22, 2026', type: 'User Group', title: 'Event Title 1', location: 'City, Country', url: '#' },
    { date: 'March 29, 2026', type: 'Conference', title: 'Event Title 2', location: 'City, Country', url: '#' },
    { date: 'March 30, 2026', type: 'User Group', title: 'Event Title 3', location: 'City, Country', url: '#' },
    { date: 'April 7, 2026', type: 'Conference', title: 'Event Title 4', location: 'City, Country', url: '#' },
    { date: 'April 8, 2026', type: 'User Group', title: 'Event Title 5', location: 'City, Country', url: '#' },
    { date: 'April 20, 2026', type: 'Conference', title: 'Event Title 6', location: 'City, Country', url: '#' },
    { date: 'April 26, 2026', type: 'User Group', title: 'Event Title 7', location: 'City, Country', url: '#' },
    { date: 'April 30, 2026', type: 'Conference', title: 'Event Title 8', location: 'City, Country', url: '#' },
]

export const headerDropdownItems = [
    { label: 'Baeldung', href: 'https://www.baeldung.com/author/polivakhamikhail' },
    { label: 'Axelix Blog', href: 'https://axelix.io/blog/authors/mikhail' },
    { label: 'BellSoft', href: 'https://bell-sw.com/blog' },
];

export const heroChips: string[] = ["Speaker", "OSS Contributor", "SWE"]
