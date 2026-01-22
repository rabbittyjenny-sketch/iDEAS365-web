'use client';

import styles from './Hero.module.css';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    {/* Main Heading */}
                    {/* Main Heading Group */}
                    <div className={styles.heading}>
                        {/* Title Bar */}
                        <h1 className={styles.title}>
                            <span className={styles.name}>JYNE</span>
                            <span className={styles.divider}>:</span>
                            <span className={styles.brand}>iDEAS365</span>
                        </h1>

                        {/* Main Concept - Smart Lazy Style */}
                        <div className={styles.roles}>
                            <h2 className={styles.mainConcept}>
                                Smart Lazy Style
                            </h2>

                            {/* Sub-roles (Small) */}
                            <div className={styles.subRoles}>
                                <span>Systems Architect</span>
                                <span className={styles.roleSeparator}>•</span>
                                <span>AI Builder</span>
                                <span className={styles.roleSeparator}>•</span>
                                <span>Live Commerce Strategist</span>
                            </div>
                        </div>
                    </div>

                    {/* Tagline Removed */}

                    {/* CTA - Minimal Buttons */}


                    {/* Scroll Indicator */}
                    <div className={styles.scrollIndicator}>
                        <span>Scroll to discover</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                {/* Illustration Placeholder */}
                <div className={styles.illustration}>
                    <div className={styles.illustrationPlaceholder}>
                        {/* Custom Illustration */}
                        <Image
                            src="/hero-illustration.png"
                            alt="Smart Lazy Style Illustration"
                            width={500}
                            height={400}
                            priority
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </div>
            </div>

            {/* Background Elements */}
            <div className={styles.bgElements}>
                <div className={styles.bgCircle1}></div>
                <div className={styles.bgCircle2}></div>
                <div className={styles.bgCircle3}></div>
            </div>
        </section>
    );
}
