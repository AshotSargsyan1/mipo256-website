import { HeaderDropdown } from "@/components";
import styles from "./styles.module.css";

export const NavigationBar = () => {
    return (
        <nav>
            <ul className={styles.LinksWrapper}>
                <li>
                    <a href="#home" className={styles.Link}>Home</a>
                </li>
                <li>
                    <a href="#about" className={styles.Link}>About</a>
                </li>
                <li>
                    <a href="#events" className={styles.Link}>Events</a>
                </li>
                <li>
                    <HeaderDropdown />
                </li>
            </ul>
        </nav>
    );
};