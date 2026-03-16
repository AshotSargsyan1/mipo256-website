import styles from "./styles.module.css"

export const CircuitLines = () => {
    return (
        <svg
            className={styles.SVG}
            xmlns="http://www.w3.org/2000/svg"
        >
            <polyline style={{ strokeWidth: 1.2, opacity: 0.8 }} points="380,60  420,60  420,40  500,40" />
            <polyline style={{ strokeWidth: 0.8, opacity: 0.55 }} points="380,100 430,100 430,80  520,80" />
            <polyline style={{ strokeWidth: 0.6, opacity: 0.35 }} points="380,140 440,140 440,120 510,120" />
            <polyline style={{ strokeWidth: 0.7, opacity: 0.45 }} points="380,175 435,175 435,155 505,155" />
            <polyline style={{ strokeWidth: 1.2, opacity: 0.8 }} points="380,220 420,220 420,200 500,200" />
            <polyline style={{ strokeWidth: 0.8, opacity: 0.55 }} points="380,270 430,270 430,250 520,250" />
            <polyline style={{ strokeWidth: 0.6, opacity: 0.35 }} points="380,320 440,320 440,300 510,300" />
            <polyline style={{ strokeWidth: 0.7, opacity: 0.45 }} points="380,360 435,360 435,340 505,340" />
            <polyline style={{ strokeWidth: 1.2, opacity: 0.8 }} points="380,400 420,400 420,380 500,380" />
            <polyline style={{ strokeWidth: 0.8, opacity: 0.55 }} points="380,440 430,440 430,420 520,420" />
            <circle opacity="1" cx="500" cy="40" r="3.5" />
            <circle opacity="0.8" cx="520" cy="80" r="3.5" />
            <circle opacity="0.55" cx="510" cy="120" r="3" />
            <circle opacity="0.65" cx="505" cy="155" r="3" />
            <circle opacity="1" cx="500" cy="200" r="3.5" />
            <circle opacity="0.8" cx="520" cy="250" r="3.5" />
            <circle opacity="0.55" cx="510" cy="300" r="3" />
            <circle opacity="0.65" cx="505" cy="340" r="3" />
            <circle opacity="1" cx="500" cy="380" r="3.5" />
            <circle opacity="0.8" cx="520" cy="420" r="3.5" />
            <polyline style={{ strokeWidth: 0.8, opacity: 0.55 }} points="30,0  30,-30  80,-30  80,-60" />
            <polyline style={{ strokeWidth: 1.2, opacity: 0.8 }} points="110,0 110,-50 180,-50  180,-80" />
            <polyline style={{ strokeWidth: 0.7, opacity: 0.45 }} points="230,0 230,-35 250,-35  250,-65" />
            <polyline style={{ strokeWidth: 0.8, opacity: 0.55 }} points="300,0 300,-25 360,-25  360,-55" />
            <circle opacity="0.8" cx="80" cy="-60" r="3.5" />
            <circle opacity="1" cx="180" cy="-80" r="3.5" />
            <circle opacity="0.65" cx="250" cy="-65" r="3" />
            <circle opacity="0.8" cx="360" cy="-55" r="3.5" />
            <polyline style={{ strokeWidth: 0.8, opacity: 0.55 }} points="60,460  60,520  -100,520  -100,570" />
            <polyline style={{ strokeWidth: 1.2, opacity: 0.8 }} points="140,460 140,545 200,545  200,590" />
            <polyline style={{ strokeWidth: 0.6, opacity: 0.35 }} points="250,460 250,530 300,530  300,565" />
            <polyline style={{ strokeWidth: 0.8, opacity: 0.55 }} points="330,460 330,535 420,535  420,575" />
            <circle opacity="0.8" cx="-100" cy="570" r="3.5" />
            <circle opacity="1" cx="200" cy="590" r="3.5" />
            <circle opacity="0.55" cx="300" cy="565" r="3" />
            <circle opacity="0.8" cx="420" cy="575" r="3.5" />
            <polyline style={{ strokeWidth: 0.8, opacity: 0.55 }} points="-400,395 -90,395 -90,415 0,415" />
            <polyline style={{ strokeWidth: 0.6, opacity: 0.35 }} points="-350,435 -105,435 -105,455 0,455" />
            <circle opacity="0.8" cx="-400" cy="395" r="3.5" />
            <circle opacity="0.55" cx="-350" cy="435" r="3" />
            <polyline style={{ strokeWidth: 0.8, opacity: 0.55 }} points="-200,30 -80,30 -80,10 0,10" />
            <polyline style={{ strokeWidth: 0.6, opacity: 0.35 }} points="-150,60 -90,60 -90,40 0,40" />
            <circle opacity="0.8" cx="-200" cy="30" r="3.5" />
            <circle opacity="0.55" cx="-150" cy="60" r="3" />
        </svg>
    )
}