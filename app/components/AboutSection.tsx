import styles from './AboutSection.module.css';
import { profileData, philosophy, backgroundItems } from '../../lib/about-data';

export default function AboutSection() {
    return (
        <section id="about" className={`${styles.section} section`}>
            <div className="container">
                {/* Section Header */}
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        <span>About</span>
                        <span className="text-thai">เกี่ยวกับ</span>
                    </h2>
                </div>

                <div className={styles.content}>
                    {/* Profile Section */}
                    <div className={styles.profile}>
                        <div className={styles.profileImageWrapper}>
                            <div className={styles.profileImagePlaceholder}>
                                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="60" cy="60" r="60" fill="var(--color-bg-accent)" />
                                    <circle cx="60" cy="45" r="20" fill="var(--color-system-blue)" opacity="0.3" />
                                    <path d="M30 95C30 75 45 65 60 65C75 65 90 75 90 95" fill="var(--color-system-blue)" opacity="0.3" />
                                </svg>
                                <p className={styles.placeholderText}>Profile Photo</p>
                            </div>
                        </div>

                        <div className={styles.profileInfo}>
                            <h3 className={styles.profileName}>{profileData.name}</h3>
                            <p className={`${styles.profileNameTh} text-thai`}>{profileData.nameTh}</p>
                            <p className={styles.profileRole}>{profileData.role}</p>

                            <div className={styles.profileBio}>
                                {profileData.bio.map((text, i) => (
                                    <p key={i} className={i === 1 ? 'text-thai' : ''}>{text}</p>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Philosophy */}
                    <div className={styles.philosophy}>
                        <h3 className={styles.sectionSubtitle}>
                            Philosophy
                            <span className="text-thai">ปรัชญา</span>
                        </h3>

                        <div className={styles.philosophyContent}>
                            {philosophy.map((item) => (
                                <div key={item.id} className={styles.philosophyCard}>
                                    <div className={`${styles.cardDot} ${styles[item.color]}`}></div>
                                    <h4>{item.title}</h4>
                                    <p>{item.quote || item.desc}</p>
                                    <p className="text-thai">{item.quoteTh || item.descTh}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Background */}
                    <div className={styles.background}>
                        <h3 className={styles.sectionSubtitle}>
                            Background
                            <span className="text-thai">ประวัติ</span>
                        </h3>

                        <div className={styles.backgroundContent}>
                            {backgroundItems.map((item, index) => (
                                <div key={index} className={styles.backgroundItem}>
                                    <span className={styles.bulletPoint}></span>
                                    <div>
                                        <p dangerouslySetInnerHTML={{ __html: item.en }} />
                                        <p className="text-thai">{item.th}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Media Gallery Placeholder */}
                    <div className={styles.gallery}>
                        <h3 className={styles.sectionSubtitle}>
                            Portfolio Media
                            <span className="text-thai">ภาพและวีดีโอผลงาน</span>
                        </h3>

                        <div className={styles.galleryGrid}>
                            {/* Placeholder items */}
                            {[1, 2, 3, 4, 5, 6].map((item) => (
                                <div key={item} className={styles.galleryItem}>
                                    <div className={styles.galleryPlaceholder}>
                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="60" height="60" rx="8" fill="var(--color-bg-accent)" />
                                            <path d="M20 25L30 35L40 25" stroke="var(--color-system-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <circle cx="30" cy="30" r="15" stroke="var(--color-system-blue)" strokeWidth="2" opacity="0.3" />
                                        </svg>
                                        <p>Photo/Video {item}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Case Study Highlight */}
                    <div className={styles.caseStudy}>
                        <h3 className={styles.sectionSubtitle}>
                            Proof
                            <span className="text-thai">ผลงานที่พิสูจน์แล้ว</span>
                        </h3>

                        <div className={styles.caseStudyCard}>
                            <h4>Jenny Jyne Live Commerce — Case Study</h4>

                            <div className={styles.caseStudySection}>
                                <h5>Challenge</h5>
                                <p>Launch live selling channel with no prior experience or systems</p>
                            </div>

                            <div className={styles.caseStudySection}>
                                <h5>What I Did</h5>
                                <ul>
                                    <li>Product curation strategy (what sells on camera)</li>
                                    <li>Script framework development (what to say, when)</li>
                                    <li>Technical setup & optimization (lighting, angles, platform settings)</li>
                                    <li>Host training & operations (sustainable 2-hour format)</li>
                                </ul>
                            </div>

                            <div className={styles.caseStudySection}>
                                <h5>Results</h5>
                                <ul>
                                    <li><strong>6-figure sales in 2 hours</strong></li>
                                    <li>Repeatable format (consistent results, not a fluke)</li>
                                    <li>Team can operate independently</li>
                                </ul>
                            </div>

                            <div className={styles.caseStudyInsight}>
                                <strong>Key Insight:</strong> You don't need 8-hour marathon streams.
                                You need <strong>strategy + system + reps</strong>.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
