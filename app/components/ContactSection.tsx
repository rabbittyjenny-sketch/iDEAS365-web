'use client';

import styles from './ContactSection.module.css';
import { contactIntro, contactMethods } from '../../lib/contact-data';
import { whatToExpect } from '../../lib/approach-data';

export default function ContactSection() {
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
                    {/* Primary Contact Methods */}
                    <div className={styles.methods}>
                        {contactMethods.map((method) => (
                            <div key={method.id} className={styles.methodCard}>
                                <div className={styles.methodHeader}>
                                    <h3>{method.title}</h3>
                                    <p>{method.desc}</p>
                                    <p className={styles.thaiText}>{method.descTh}</p>
                                </div>

                                <div className={styles.methodAction}>
                                    {method.id === 'social' ? (
                                        <div className={styles.socialButtons}>
                                            {method.links?.map((link, idx) => (
                                                <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                                                    {link.label}
                                                </a>
                                            ))}
                                        </div>
                                    ) : (
                                        <a href={method.link} className={`btn ${method.type === 'primary' ? 'btn-primary' : 'btn-outline'}`}>
                                            {method.value}
                                        </a>
                                    )}
                                </div>

                                {method.note && (
                                    <div className={styles.methodNote}>
                                        <p><strong>Note:</strong> {method.note}</p>
                                        <p className={styles.thaiNote}>{method.noteTh}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Expectations Section */}
                    <div className={styles.expectations}>
                        <div className={styles.sectionDivider}>
                            <h2 className={styles.expectTitle}>What to Expect</h2>
                            <p className={styles.expectThai}>/ สิ่งที่คาดหวังได้</p>
                        </div>

                        <div className={styles.expectGrid}>
                            {whatToExpect.map((item, idx) => (
                                <div key={idx} className={styles.expectCard}>
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                    <p className={styles.thaiSub}>{item.descTh}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Roadmap Section */}
                    <div className={styles.roadmap}>
                        <h3 className={styles.roadmapTitle}>In Development</h3>
                        <ul className={styles.roadmapList}>
                            <li><strong>AI Chatbot:</strong> Get instant answers to common questions <span className={styles.thaiInline}>(ตอบคำถามทั่วไปได้ทันที)</span></li>
                            <li><strong>Booking System:</strong> Schedule consultations directly <span className={styles.thaiInline}>(จองเวลาปรึกษาได้เลย)</span></li>
                            <li><strong>Client Portal:</strong> Track project progress in real-time <span className={styles.thaiInline}>(ติดตามความคืบหน้าแบบเรียลไทม์)</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
