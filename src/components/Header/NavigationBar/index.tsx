import { HeaderDropdown } from "@/components";
import styles from "./styles.module.css";

export const NavigationBar = () => {
    return (
        <nav>
            <ul className={styles.LinksWrapper}>
                <li>
                    <a href="#" className={styles.Link}>Home</a>
                </li>
                <li>
                    <a href="#" className={styles.Link}>Conferences</a>
                </li>
                <li>
                    <a href="#" className={styles.Link}>About</a>
                </li>
                <li>
                    <HeaderDropdown />
                </li>
            </ul>
        </nav>
    );
};