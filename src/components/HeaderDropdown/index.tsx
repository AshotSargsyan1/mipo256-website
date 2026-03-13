"use client"
import { headerDropdownItems } from '@/utils';
import styles from './styles.module.css';
import { ArrowIcon } from '@/assets';
import { useEffect, useRef, useState } from 'react';

export const HeaderDropdown = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent): void => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={`${styles.MainWrapper} ${isOpen ? styles.Open : ""}`} ref={wrapperRef}>
            <button className={styles.DropdownTitle} onClick={() => setIsOpen(!isOpen)}>
                Articles
                <ArrowIcon className={styles.ArrowIcon} />
            </button>
            <ul className={styles.Menu}>
                {headerDropdownItems.map(({ label, href }) => (
                    <li key={label}>
                        <a href={href} className={styles.MenuItem} target='_blank' rel='noopener noreferrer' onClick={() => setIsOpen(false)}>
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};