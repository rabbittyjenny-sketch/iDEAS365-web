import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import styles from '../page.module.css';

export default function StrategyServicePage() {
    return (
        <>
            <Navigation />
            <main className={styles.main}>
                <section className={styles.hero}>
                    <div className="container">
                        <h1>Strategy Consulting</h1>
                        <p className={styles.subtitle}>Business planning that accounts for operational reality</p>
                        <p className={`${styles.subtitle} text-thai`}>วางแผนธุรกิจที่คำนึงถึงความเป็นจริงในการปฏิบัติงาน</p>
                    </div>
                </section>

                <section className={`${styles.service} ${styles.serviceStrategy} section`}>
                    <div className="container">
                        <div className="content-max-width">
                            <h2>
                                Why Strategy Fails
                                <br />
                                <span className="text-thai h3-sub">ทำไมกลยุทธ์ถึงล้มเหลว?</span>
                            </h2>
                            <p>Most business strategies look great on a slide deck but fall apart on Monday morning. Why? Because they ignore the operational reality of the team delivering them.</p>
                            <p className="text-thai text-secondary mb-4">กลยุทธ์ส่วนใหญ่ดูดีบนสไลด์แต่พังไม่เป็นท่าเมื่อต้องทำจริง เพราะมองข้ามความจริงในการปฏิบัติงานและคนทำงาน</p>

                            <p>My approach bridges the gap between <strong>Vision</strong> and <strong>Execution</strong>.</p>
                            <p className="text-thai text-secondary">แนวทางของ iDEAS365 เชื่อมช่องว่างระหว่าง "วิสัยทัศน์" และ "การลงมือทำ" เข้าด้วยกัน</p>

                            <div className="divider"></div>

                            <h3>
                                What We Define Together
                                <br />
                                <span className="text-thai h4-sub">สิ่งที่เราจะกำหนดร่วมกัน</span>
                            </h3>
                            <ul className={styles.list}>
                                <li>
                                    <strong>Market Positioning:</strong> Where you win vs. where you struggle.
                                    <span className="text-thai d-block text-sm text-secondary">จุดยืนในตลาด: ตรงไหนที่คุณชนะ vs ตรงไหนที่เหนื่อยฟรี</span>
                                </li>
                                <li>
                                    <strong>Financial Modeling:</strong> Real P&L scenarios, not hockey-stick fantasies.
                                    <span className="text-thai d-block text-sm text-secondary">โมเดลการเงิน: สถานการณ์จริง กำไรขาดทุนจริง ไม่ใช่ตัวเลขเพ้อฝัน</span>
                                </li>
                                <li>
                                    <strong>Capacity Planning:</strong> Do you actually have the people to do this?
                                    <span className="text-thai d-block text-sm text-secondary">วางแผนกำลังคน: ทีมคุณมีศักยภาพพอที่จะทำสิ่งนี้จริงหรือ?</span>
                                </li>
                                <li>
                                    <strong>Tech Stack:</strong> Tools that speed you up, not slow you down.
                                    <span className="text-thai d-block text-sm text-secondary">เครื่องมือ: เทคโนโลยีที่ช่วยให้เร็วขึ้น ไม่ใช่ภาระเพิ่ม</span>
                                </li>
                            </ul>

                            <div className="divider"></div>

                            <div className="text-center mt-8">
                                <Link href="/contact" className="btn btn-primary">
                                    Book a Consultation / จองเวลาปรึกษา
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
