import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import styles from '../page.module.css';

export default function SystemsServicePage() {
    return (
        <>
            <Navigation />
            <main className={styles.main}>
                <section className={styles.hero}>
                    <div className="container">
                        <h1>Systems Design</h1>
                        <p className={styles.subtitle}>Operational frameworks that scale without breaking</p>
                        <p className={`${styles.subtitle} text-thai`}>วางระบบปฏิบัติงานที่ขยายได้โดยไม่พัง</p>
                    </div>
                </section>

                <section className={`${styles.service} ${styles.serviceSystems} section`}>
                    <div className="container">
                        <div className="content-max-width">
                            <h2>
                                Chaos is not "Move Fast"
                                <br />
                                <span className="text-thai h3-sub">ความวุ่นวาย ไม่ใช่ "การโตเร็ว"</span>
                            </h2>
                            <p>Scaling a broken process just breaks it faster. You need systems that grow with you.</p>
                            <p className="text-thai text-secondary mb-4">การขยายธุรกิจบนระบบที่พัง มีแต่จะทำให้พังเร็วขึ้น คุณต้องการระบบที่โตไปพร้อมกับคุณ</p>

                            <div className="divider"></div>

                            <h3>
                                The Systems Framework
                                <br />
                                <span className="text-thai h4-sub">กรอบแนวคิดการวางระบบ</span>
                            </h3>
                            <ul className={styles.list}>
                                <li>
                                    <strong>Process Mapping:</strong> Visualizing exactly how value flows (or leaks).
                                    <span className="text-thai d-block text-sm text-secondary">แผนผังกระบวนการ: เห็นภาพชัดเจนว่างานไหลไปทางไหน (หรือรั่วไหลตรงไหน)</span>
                                </li>
                                <li>
                                    <strong>Standard Operating Procedures (SOPs):</strong> Actionable guides, not dusty manuals.
                                    <span className="text-thai d-block text-sm text-secondary">SOPs: คู่มือที่เอาไปทำตามได้จริง ไม่ใช่เอกสารเก็บฝุ่น</span>
                                </li>
                                <li>
                                    <strong>Automation:</strong> Using AI and tools to handle the repetitive 80%.
                                    <span className="text-thai d-block text-sm text-secondary">ระบบอัตโนมัติ: ใช้ AI และเครื่องมือจัดการงานซ้ำซาก 80%</span>
                                </li>
                                <li>
                                    <strong>Feedback Loops:</strong> Metrics that tell you when to pivot.
                                    <span className="text-thai d-block text-sm text-secondary">วงจรสะท้อนผล: ตัวเลขที่บอกคุณว่าเมื่อไหร่ต้องปรับเปลี่ยน</span>
                                </li>
                            </ul>

                            <div className="divider"></div>

                            <div className="text-center mt-8">
                                <Link href="/contact" className="btn btn-primary">
                                    Audit Your Systems / ตรวจสอบระบบงาน
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
