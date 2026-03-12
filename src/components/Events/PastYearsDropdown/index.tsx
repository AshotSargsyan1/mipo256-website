import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { ArrowIcon } from '@/assets';
import { getPastEventsSortedYears } from '@/helpers';

import styles from './styles.module.css';
import { TEventSelectedYear } from '@/models';
import { EVENTS_ALL_YEARS_FILTER } from '@/utils';

interface IProps {
    selectedYear: TEventSelectedYear;
    setSelectedYear: Dispatch<SetStateAction<TEventSelectedYear>>;
    tabClassName: string;
    tabActiveClassName: string;
}

export const PastYearsDropdown = ({ selectedYear, setSelectedYear, tabClassName, tabActiveClassName }: IProps) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const sortedYears = getPastEventsSortedYears()

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent): void => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleYearSelect = (year: TEventSelectedYear): void => {
        setSelectedYear(year);
        setIsOpen(false);
    };

    return (
        <div className={styles.MainWrapper} ref={wrapperRef}>
            <button
                className={`${tabClassName} ${selectedYear ? tabActiveClassName : ''} ${styles.DropdownTitle}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedYear || "Year"}
                <ArrowIcon className={`${styles.ArrowIcon} ${isOpen ? styles.Open : ''}`} />
            </button>
            {isOpen && (
                <ul className={styles.Menu}>
                    <li
                        onClick={() => handleYearSelect(EVENTS_ALL_YEARS_FILTER)}
                        className={`${styles.MenuItem} ${selectedYear === EVENTS_ALL_YEARS_FILTER ? styles.ActiveMenuItem : ''}`}
                    >
                        All
                    </li>
                    {sortedYears.map((year) => (
                        <li
                            key={year}
                            onClick={() => handleYearSelect(year)}
                            className={`${styles.MenuItem} ${selectedYear === year ? styles.ActiveMenuItem : ''}`}
                        >
                            {year}
                        </li>
                    ))}
                </ul>
            )
            }
        </div>
    );
};