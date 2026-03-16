"use client"
import { useEffect, useRef, useState } from "react";
import { NavigationBar } from "./NavigationBar";
import styles from "./styles.module.css";
import { Logo } from "./Logo";

export const Header = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false)

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent): void => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setIsBurgerOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <>
            <header className={styles.MainWrapper} ref={wrapperRef}>
                <div className={`MainContainer ${styles.InnerWrapper}`}>
                    <Logo />
                    <div className={styles.DesktopMenuWrapper}>
                        <NavigationBar />
                    </div>

                    <div className={`${styles.Burger} ${isBurgerOpen ? styles.OpenedBurger : ""}`} onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
                        <span className={styles.BurgerCenterLine} />
                    </div>
                </div>
            </header>
            <div className={`MainContainer ${styles.MobileMenuWrapper} ${isBurgerOpen ? styles.MobileMenuOpened : ""}`}>
                <NavigationBar />
            </div>
        </>
    );
};