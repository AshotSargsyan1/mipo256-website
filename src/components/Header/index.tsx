import { NavigationBar } from "./NavigationBar";
import styles from "./styles.module.css";

export const Header = () => {
    return (
        <header className={styles.MainWrapper}>
            <div className={`MainContainer ${styles.InnerWrapper}`}>
                <div>Placeholder</div>
                <NavigationBar />
            </div>
        </header>
    );
};