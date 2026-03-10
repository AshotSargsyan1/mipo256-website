import { headerDropdownItems } from '@/utils';
import styles from './styles.module.css';

export const HeaderDropdown = () => {
    return (
        <div className={styles.MainWrapper}>
            <button className={styles.DropdownTitle}>
                Articles

                {/* RODO: Replace this via SVGR */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles.Arrow}
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="6 9 12 15 18 9" />
                </svg>
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