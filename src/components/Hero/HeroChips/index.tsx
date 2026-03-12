import { heroChips } from "@/utils"

import styles from "./styles.module.css"

export const HeroChips = () => {
    return (
        <div className={styles.MainWrapper}>
            {heroChips.map((tag) => (
                <div key={tag} className={`TextUltraSmall ${styles.Chip}`}>
                    {tag}
                </div>
            ))}
        </div>
    )
}