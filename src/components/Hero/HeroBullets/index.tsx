import styles from "./styles.module.css"
import { SoftwareEngineerIcon, MicIcon, WriterIcon } from "@/assets"

export const HeroBullets = () => {
    return (
        <div className={styles.MainWrapper}>
            <div className={styles.BioChunk}>
                <SoftwareEngineerIcon />
                <p className={styles.BioDescription}>
                    <strong>CEO & Founder of Axelix Labs</strong>, the company behind the <strong>Axelix project</strong>.
                    Senior Software Engineer with years of experience building robust systems and contributing to the ecosystem.
                </p>
            </div>

            <div className={styles.BioChunk}>
                <MicIcon />
                <p className={styles.BioDescription}>
                    <strong>OSS contributor to Spring Data.</strong> Public speaker at international software
                    conferences including <strong>Devoxx</strong> and <strong>Spring I/O</strong>.
                </p>
            </div>

            <div className={styles.BioChunk}>
                <WriterIcon />
                <p className={styles.BioDescription}>
                    <strong>Technical writer</strong> for various resources, most notably <strong>Baeldung</strong>.
                </p>
            </div>
        </div>
    )
} 