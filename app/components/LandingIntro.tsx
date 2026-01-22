'use client';

import { useState, useEffect } from 'react';
import styles from './LandingIntro.module.css';

export default function LandingIntro() {
    const [isVisible, setIsVisible] = useState(true);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        // Optional: Check session storage to show only once
        const hasSeenIntro = sessionStorage.getItem('hasSeenIntro_v2');
        if (hasSeenIntro) {
            setIsVisible(false);
        }
    }, []);

    const handleEnter = () => {
        setIsVisible(false);
        sessionStorage.setItem('hasSeenIntro_v2', 'true');
    };

    if (!isClient || !isVisible) return null;

    return (
        <div className={`${styles.container} ${!isVisible ? styles.hidden : ''}`}>
            <div className={styles.videoWrapper}>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={styles.video}
                >
                    <source src="/motion_web_ideas365.mp4?v=1" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className={styles.overlay}>
                <button onClick={handleEnter} className={styles.enterButton}>
                    ENTER SITE
                </button>
            </div>

            <div className={styles.skip} onClick={handleEnter}>
                SKIP
            </div>
        </div>
    );
}
