import { headerDropdownItems } from '@/utils';
import styles from './styles.module.css';
import { ArrowIcon } from '@/assets';

export const HeaderDropdown = () => {
    return (
        <div className={styles.MainWrapper}>
            <button className={styles.DropdownTitle}>
                Articles
                <ArrowIcon className={styles.ArrowIcon} />
            </button>
            <ul className={styles.Menu}>
                {headerDropdownItems.map(({ label, href }) => (
                    <li key={label}>
                        <a href={href} className={styles.MenuItem} target='_blank' rel='noopener noreferrer'>
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};