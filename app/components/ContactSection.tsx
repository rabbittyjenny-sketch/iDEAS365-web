'use client';
import { useState } from 'react';

import styles from './ContactSection.module.css';
import { contactIntro, contactMethods } from '../../lib/contact-data';
import { whatToExpect } from '../../lib/approach-data';

export default function ContactSection() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <section id="contact" className={styles.section}>
            <div className="container">
                {/* Section Header */}
                <header className={styles.header}>
                    <h1 className={styles.title}>{contactIntro.title} <span className={styles.titleThai}>/ {contactIntro.titleTh}</span></h1>
                    <div className={styles.subtitleGroup}>
                        <p className={styles.subtitle}>{contactIntro.subtitle}</p>
                        <p className={styles.subtitleTh}>{contactIntro.subtitleTh}</p>
                    </div>
                </header>

                <div className={styles.contentGrid}>
                    <div className={styles.twoColumnGrid}>
                        {/* Left Card: Quote */}
                        <div className={styles.card}>
                            <div className={styles.quoteContent}>
                                <div className={styles.quoteBody}>
                                    <p>"Success is the sum of small efforts, repeated day in and day out."</p>
                                    <div className={styles.quoteAuthor}>— Robert Collier</div>
                                </div>
                                <div className={styles.quoteBody}>
                                    <p>1% better every day isn't about perfection.</p>
                                    <p>It's about progress.</p>
                                    <p>It's about showing up.</p>
                                    <p>It's about compounding.</p>
                                </div>
                                <div className={styles.quoteBody}>
                                    <p className={styles.quoteHighlight}>Start today. Start with 1%.</p>
                                    <p>What will YOUR 1% be today?</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Card: Form */}
                        <div className={styles.card}>
                            <div className={styles.formHeader}>
                                <h3 className={`${styles.formHeadline} text-thai`}>
                                    พร้อมแล้ว! หลังจากทำงานให้คนอื่นมาหลายปี<br />
                                    ....วันนี้ถึงเวลาแชร์ของดีๆ ให้โลกใบนี้รู้
                                </h3>
                            </div>

                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name" className={styles.label}>Name</label>
                                    <input type="text" id="name" className={styles.input} placeholder="Your Name" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="contact" className={styles.label}>Contact Info</label>
                                    <input type="text" id="contact" className={styles.input} placeholder="Phone number or Email" required />
                                </div>

                                <div className={styles.formFooter}>
                                    <div className={styles.ctaText}>
                                        <span className="text-thai">บางทีสิ่งที่คุณต้องการ... คือคนที่มองเห็นความพัง !</span>
                                        <span className={styles.ctaHighlight}>" Let's talk about your project "</span>
                                    </div>

                                    <button type="submit" className={styles.submitBtn}>
                                        <span className="text-thai">มาคุยเรื่องโปรเจกต์ของคุณกันค่ะ</span>
                                    </button>

                                    <div className={styles.contactInfo}>
                                        Or email directly: <a href="mailto:jyne@ideas365.online" className={styles.contactEmail}>jyne@ideas365.online</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Popup */}
            {isSubmitted && (
                <div className={styles.popupOverlay} onClick={() => setIsSubmitted(false)}>
                    <div className={styles.popupCard} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.popupIcon}>🎉</div>
                        <p className={`${styles.popupText} text-thai`}>
                            ระบบรับข้อความแล้ว..ขอบคุณคะ<br />
                            รอทีมงานติดต่อกลับนะคะ
                        </p>
                        <button className={styles.closeBtn} onClick={() => setIsSubmitted(false)}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
