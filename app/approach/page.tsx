import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import styles from './page.module.css';
import { introData, processSteps, whatToExpect, workWith, dontWorkWith } from '../../lib/approach-data';

export default function ApproachPage() {
    return (
        <div className={styles.pageWrapper}>
            <Navigation />

            <main className={styles.main}>
                {/* Hero Header */}
                <header className={styles.hero}>
                    <div className="container">
                        <div className={styles.heroContent}>
                            <h1 className={styles.title}>{introData.title}</h1>
                            <div className={styles.subtitleGroup}>
                                <p className={styles.subtitle}>{introData.subtitle}</p>
                                <p className={`${styles.subtitle} ${styles.thaiHeader}`}>{introData.subtitleTh}</p>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="container">
                    <div className={styles.contentGrid}>
                        {/* 01. Process Section */}
                        <section className={styles.section}>
                            <div className={styles.sectionHeader}>
                                <span className={styles.sectionTag}>Methodology</span>
                                <h2 className={styles.sectionTitle}>The Process</h2>
                            </div>

                            <div className={styles.steps}>
                                {processSteps.map((step) => (
                                    <div key={step.number} className={styles.step}>
                                        <div className={styles.stepNumber}>{step.number}</div>
                                        <div className={styles.stepInfo}>
                                            <h3>{step.title}</h3>
                                            <p>{step.desc}</p>
                                            <p className={styles.thaiText}>{step.descTh}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 02. What to Expect Section */}
                        <section className={styles.section}>
                            <div className={styles.sectionHeader}>
                                <span className={styles.sectionTag}>Communication</span>
                                <h2 className={styles.sectionTitle}>What to Expect</h2>
                            </div>

                            <div className={styles.expectationGrid}>
                                {whatToExpect.map((item, idx) => (
                                    <div key={idx} className={styles.expectationCard}>
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                        <p className={styles.thaiText}>{item.descTh}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 03. Compatibility Section */}
                        <section className={styles.section}>
                            <div className={styles.splitGrid}>
                                <div className={styles.compatBox}>
                                    <h2 className={styles.sectionTitle}>I Work With</h2>
                                    <ul className={styles.checkList}>
                                        {workWith.map((item, idx) => (
                                            <li key={idx}>
                                                <span className={styles.checkIcon}>✓</span>
                                                <div>
                                                    <p>{item.en}</p>
                                                    <span className={styles.thaiSub}>{item.th}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className={styles.compatBox}>
                                    <h2 className={styles.sectionTitle}>I Don't Work With</h2>
                                    <ul className={styles.crossList}>
                                        {dontWorkWith.map((item, idx) => (
                                            <li key={idx}>
                                                <span className={styles.crossIcon}>×</span>
                                                <div>
                                                    <p>{item.en}</p>
                                                    <span className={styles.thaiSub}>{item.th}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* 04. Future Roadmap (The list in image) */}
                        <section className={styles.bottomNote}>
                            <h3 className={styles.noteTitle}>In Development</h3>
                            <ul className={styles.roadmapList}>
                                <li><strong>AI Chatbot:</strong> Get instant answers to common questions <span className={styles.thaiInline}>(ตอบคำถามทั่วไปได้ทันที)</span></li>
                                <li><strong>Booking System:</strong> Schedule consultations directly <span className={styles.thaiInline}>(จองเวลาปรึกษาได้เลย)</span></li>
                                <li><strong>Client Portal:</strong> Track project progress in real-time <span className={styles.thaiInline}>(ติดตามความคืบหน้าแบบเรียลไทม์)</span></li>
                            </ul>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
