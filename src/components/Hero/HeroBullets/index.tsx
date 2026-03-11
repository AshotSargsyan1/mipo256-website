import Image from "next/image"

import styles from "./styles.module.css"
import { AxelixLogo, MicIcon, WriterIcon } from "@/assets"

export const HeroBullets = () => {
    return (
        <div className={styles.MainWrapper}>
            <div className={styles.BioChunk}>
                <Image src={AxelixLogo} alt="Axelix logo" />
                <p className={styles.BioDescription}>
                    <strong>CEO & Founder of Axelix Labs</strong>, the company behind the <strong>Axelix project</strong>.
                    Senior Software Engineer with years of experience building robust systems and contributing to the ecosystem.
                </p>
            </div>

            <div className={styles.BioChunk}>
                <Image src={MicIcon} alt="Microphone logo" />
                <p className={styles.BioDescription}>
                    <strong>OSS contributor to Spring Data.</strong> Public speaker at international software
                    conferences including <strong>Devoxx</strong> and <strong>Spring I/O</strong>.
                </p>
            </div>

            <div className={styles.BioChunk}>
                <Image src={WriterIcon} alt="Writer logo" />
                <p className={styles.BioDescription}>
                    <strong>Technical writer</strong> for various resources, most notably <strong>Baeldung</strong>.
                </p>
            </div>
        </div>
    )
} 