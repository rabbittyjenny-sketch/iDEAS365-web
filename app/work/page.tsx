'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import styles from './page.module.css';

export default function WorkPage() {
    return (
        <>
            <Navigation />

            <main className={styles.main}>
                {/* Method / Approach Content */}
                <section className={styles.hero}>
                    <div className="container">
                        <h1 className={styles.title}>How I Work</h1>
                        <p className={styles.subtitle}>My Approach & Methodology</p>
                        <p className={`${styles.subtitle} text-thai`}>การทำงานของ iDEAS365</p>
                    </div>
                </section>

                <section className={`${styles.process} section`}>
                    <div className="container">
                        <h2>Process</h2>

                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <span className={styles.number}>01</span>
                                <div className={styles.stepContent}>
                                    <h3>Listen First</h3>
                                    <p>Understand the real problem, not just symptoms</p>
                                    <p className="text-thai">เข้าใจปัญหาที่แท้จริง ไม่ใช่แค่อาการที่เห็น</p>
                                </div>
                            </div>

                            <div className={styles.step}>
                                <span className={styles.number}>02</span>
                                <div className={styles.stepContent}>
                                    <h3>Map the System</h3>
                                    <p>Where's the friction? What works? What drains energy?</p>
                                    <p className="text-thai">จุดไหนติดขัด? อะไรดีอยู่แล้ว? อะไรกินพลังงาน?</p>
                                </div>
                            </div>

                            <div className={styles.step}>
                                <span className={styles.number}>03</span>
                                <div className={styles.stepContent}>
                                    <h3>Design with Constraints</h3>
                                    <p>Real budget, real timeline, real people</p>
                                    <p className="text-thai">ออกแบบบนพื้นฐานความจริง งบจริง เวลาจริง คนทำจริง</p>
                                </div>
                            </div>

                            <div className={styles.step}>
                                <span className={styles.number}>04</span>
                                <div className={styles.stepContent}>
                                    <h3>Build Iteratively</h3>
                                    <p>Start simple, test, refine, scale</p>
                                    <p className="text-thai">เริ่มจากเล็ก ทดสอบ ปรับปรุง แล้วค่อยขยาย</p>
                                </div>
                            </div>

                            <div className={styles.step}>
                                <span className={styles.number}>05</span>
                                <div className={styles.stepContent}>
                                    <h3>Transfer Ownership</h3>
                                    <p>You should own the system, not depend on me forever</p>
                                    <p className="text-thai">ส่งมอบระบบให้คุณดูแลต่อได้ ไม่ต้องพึ่งพาเราตลอดไป</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={`${styles.workWith} section bg-secondary`}>
                    <div className="container">
                        <h2>I Work With</h2>
                        <ul className={styles.list}>
                            <li>
                                Early-stage businesses building first systems
                                <span className="text-thai d-block text-sm text-secondary">ธุรกิจช่วงเริ่มต้นที่กำลังวางระบบแรก</span>
                            </li>
                            <li>
                                Growing brands hitting operational bottlenecks
                                <span className="text-thai d-block text-sm text-secondary">แบรนด์ที่กำลังโตแต่ติดขัดเรื่องการจัดการ</span>
                            </li>
                            <li>
                                Teams needing clarity in structure and process
                                <span className="text-thai d-block text-sm text-secondary">ทีมที่ต้องการความชัดเจนในโครงสร้างและกระบวนการ</span>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className={`${styles.dontWork} section`}>
                    <div className="container">
                        <h2>I Don't Work With</h2>
                        <ul className={styles.list}>
                            <li>
                                People expecting overnight miracles
                                <span className="text-thai d-block text-sm text-secondary">คนที่คาดหวังปาฏิหาริย์ชั่วข้ามคืน</span>
                            </li>
                            <li>
                                Brands wanting "strategy" without execution
                                <span className="text-thai d-block text-sm text-secondary">แบรนด์ที่อยากได้แค่ "กลยุทธ์" แต่ไม่ลงมือทำ</span>
                            </li>
                            <li>
                                Anyone looking for cookie-cutter templates
                                <span className="text-thai d-block text-sm text-secondary">ใครก็ตามที่มองหาเทมเพลตสำเร็จรูปทั่วไป</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Sub-Navigation to Work Galleries */}
                <section className={`${styles.galleryNav} section`}>
                    <div className="container">
                        <h2>Explore My Work</h2>
                        <div className={styles.navGrid}>
                            <Link href="/work/all" className={`btn btn-outline ${styles.navBtn}`}>
                                All Work
                            </Link>
                            <Link href="/work/ai-tools" className={`btn btn-outline ${styles.navBtn}`}>
                                AI Tools
                            </Link>
                            <Link href="/work/live-commerce" className={`btn btn-outline ${styles.navBtn}`}>
                                Live Commerce
                            </Link>
                            <Link href="/work/business-systems" className={`btn btn-outline ${styles.navBtn}`}>
                                Business Systems
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
