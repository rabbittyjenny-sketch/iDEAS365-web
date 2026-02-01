import styles from './AboutSection.module.css';
import Image from 'next/image';
import { profileData, philosophy, backgroundItems } from '../../lib/about-data';

export default function AboutSection() {
    return (
        <section id="about" className={`${styles.section} section`}>
            <div className="container">
                {/* Section Header */}
                <h3 className={styles.sectionSubtitle}>
                    About
                    <span className="text-thai">เกี่ยวกับ</span>
                </h3>

                {/* Quote */}
                <div className={styles.quote}>
                    <p className={styles.quoteText}>"Don't try to make it perfect. Make it work."</p>
                    <p className={`${styles.quoteTextTh} text-thai`}>"อย่าพยายามทำให้ใช้ได้จริงดีกว่า"</p>
                </div>

                <div className={styles.content}>
                    {/* Profile Section */}
                    <div className={styles.profile}>
                        <Image
                            src="/JYNEResume042025.jpg"
                            alt="iDEAS365 Three Core Philosophy Pillars - Jenjira Jaisin Professional Resume"
                            width={800}
                            height={1132}
                            className={styles.profileImage}
                            priority
                        />
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

                    {/* External Experience & Skills Links */}
                    <div className={styles.linksSection}>
                        <h3 className={styles.sectionSubtitle}>
                            Experience & Skills
                            <span className="text-thai">ประสบการณ์และทักษะอื่นๆ</span>
                        </h3>
                        <div className={styles.linksGrid}>
                            <a
                                href="https://adminccl.wixsite.com/a-little-bit-idea-2/copy-of-bio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.linkCard}
                            >
                                <div className={styles.linkHeader}>
                                    <h4 className={styles.linkTitle}>Work Experience</h4>
                                    <span className={styles.linkArrow}>→</span>
                                </div>
                                <p className={`${styles.linkDesc} text-thai`}>รายละเอียดประสบการณ์การทำงานทั้งหมด</p>
                            </a>

                            <a
                                href="https://adminccl.wixsite.com/a-little-bit-idea-2/project"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.linkCard}
                            >
                                <div className={styles.linkHeader}>
                                    <h4 className={styles.linkTitle}>Other Skills</h4>
                                    <span className={styles.linkArrow}>→</span>
                                </div>
                                <p className={`${styles.linkDesc} text-thai`}>ทักษะความสามารถอื่นๆ และโปรเจกต์เพิ่มเติม</p>
                            </a>
                        </div>
                    </div>

                    {/* Media Gallery Placeholder */}
                    <div className={styles.gallery}>
                        <h3 className={styles.sectionSubtitle}>
                            Portfolio Media
                            <span className="text-thai">ภาพและวีดีโอผลงาน</span>
                        </h3>

                        <div className={styles.galleryGrid}>
                            {/* Video 1 */}
                            <div className={styles.galleryItem}>
                                <div className={styles.videoWrapper}>
                                    <iframe
                                        src="https://www.youtube.com/embed/N9nEHwZt3Sc?si=xBCK0b4OEQP2s97U"
                                        title="Portfolio Video 1"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>

                            {/* Video 2 */}
                            <div className={styles.galleryItem}>
                                <div className={styles.videoWrapper}>
                                    <iframe
                                        src="https://www.youtube.com/embed/jH3mrj2UwWk?si=Rv93IIw7z0JFXgUN"
                                        title="Portfolio Video 2"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>

                            {/* Video 3 */}
                            <div className={styles.galleryItem}>
                                <div className={styles.videoWrapper}>
                                    <iframe
                                        src="https://www.youtube.com/embed/_9Mcp2mgNrg?si=cmgRPm-6zUZ2ZzZn"
                                        title="Portfolio Video 3"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>

                            {/* Video 5 */}
                            <div className={styles.galleryItem}>
                                <div className={styles.videoWrapper}>
                                    <iframe
                                        src="https://www.youtube.com/embed/rhTlI_Rh3jM?si=NVavrHMN-AV4uhql"
                                        title="Portfolio Video 5"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>

                            {/* Video 6 */}
                            <div className={styles.galleryItem}>
                                <div className={styles.videoWrapper}>
                                    <iframe
                                        src="https://www.youtube.com/embed/_erzZjnwLAU?si=1rNE1kTcmNg2eyCE"
                                        title="Portfolio Video 6"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>

                            {/* Video 7 */}
                            <div className={styles.galleryItem}>
                                <div className={styles.videoWrapper}>
                                    <iframe
                                        src="https://www.youtube.com/embed/Or9s_hJYaYc?si=VqTRwSyl-I-qMpEr"
                                        title="Portfolio Video 7"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>

                            {/* Video 8 (YouTube Short) */}
                            <div className={styles.galleryItem}>
                                <div className={styles.videoWrapper}>
                                    <iframe
                                        src="https://www.youtube.com/embed/IS-MwUWzGMs?si=Ijt0ipFMTkj8bvj5"
                                        title="Portfolio Video 8"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>

                            {/* Video 9 */}
                            <div className={styles.galleryItem}>
                                <div className={styles.videoWrapper}>
                                    <iframe
                                        src="https://www.youtube.com/embed/hA291t_W_iE?si=F57MO7PhXIT2SDDM"
                                        title="Portfolio Video 9"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>

                            {/* Video 10 */}
                            <div className={styles.galleryItem}>
                                <div className={styles.videoWrapper}>
                                    <iframe
                                        src="https://www.youtube.com/embed/QbuyU8EGMjU?si=NGHlWXib41P0od9v"
                                        title="Portfolio Video 10"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>

                            {/* Video 11 */}
                            <div className={styles.galleryItem}>
                                <div className={styles.videoWrapper}>
                                    <iframe
                                        src="https://www.youtube.com/embed/NniW6ScMdkw?si=--9qfzskHbFZ-6B_"
                                        title="Portfolio Video 11"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>

                            {/* Video 12 */}
                            <div className={styles.galleryItem}>
                                <div className={styles.videoWrapper}>
                                    <iframe
                                        src="https://www.youtube.com/embed/2QrneqkWJyQ?si=AHP9Yj0lypv3TYJk"
                                        title="Portfolio Video 12"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* AI Voice Generator Section */}
                    <div className={styles.aiVoiceSection}>
                        <h3 className={styles.sectionSubtitle}>
                            AI Voice Generator
                            <span className="text-thai">AI สร้างเสียงพากย์</span>
                        </h3>

                        <div className={styles.galleryGrid}>
                            {/* AI Voice Video 1 */}
                            <div className={styles.galleryItem}>
                                <div className={styles.videoWrapper}>
                                    <iframe
                                        src="https://www.youtube.com/embed/vIuNytBwue8"
                                        title="AI Voice Generator Demo 1"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>

                            {/* AI Voice Video 2 */}
                            <div className={styles.galleryItem}>
                                <div className={styles.videoWrapper}>
                                    <iframe
                                        src="https://www.youtube.com/embed/kBFF7zDOb5Y"
                                        title="AI Voice Generator Demo 2"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>

                            {/* AI Voice Video 3 */}
                            <div className={styles.galleryItem}>
                                <div className={styles.videoWrapper}>
                                    <iframe
                                        src="https://www.youtube.com/embed/m_w56qFvlss"
                                        title="AI Voice Generator Demo 3"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>

                            {/* AI Voice Video 4 - Part 1 */}
                            <div className={styles.galleryItem}>
                                <div className={styles.videoWrapper}>
                                    <iframe
                                        src="https://www.youtube.com/embed/Sby6V-5khkk"
                                        title="AI Voice Tutorial Part 1"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>

                            {/* AI Voice Video 5 - Part 2 */}
                            <div className={styles.galleryItem}>
                                <div className={styles.videoWrapper}>
                                    <iframe
                                        src="https://www.youtube.com/embed/A7WZ0NMpclo"
                                        title="AI Voice Tutorial Part 2"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
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
