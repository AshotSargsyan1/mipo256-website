import { cards } from '@/utils';

import styles from './styles.module.css';

export const Cards = () => {
    return (
        <section className={`MainContainer ${styles.MainWrapper}`}>
            <h2 className="VisuallyHidden">Cards placeholder</h2>
            {cards.map(({ title, description }) => (
                <article className={styles.Card} key={title}>
                    <header>
                        <h3 className={`TextSmall ${styles.CardTitle}`}>
                            {title}
                        </h3>
                    </header>
                    <p className={styles.CardDescription}>
                        {description}
                    </p>
                </article>
            ))}
        </section>
    );
};