import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import styles from '../page.module.css';

export default function LiveCommerceServicePage() {
    return (
        <>
            <Navigation />
            <main className={styles.main}>
                <section className={styles.hero}>
                    <div className="container">
                        <h1>Live Commerce</h1>
                        <p className={styles.subtitle}>Complete live selling systems from zero to revenue</p>
                        <p className={`${styles.subtitle} text-thai`}>ระบบไลฟ์ขายของครบวงจร จากศูนย์สู่ยอดขายจริง</p>
                    </div>
                </section>

                <section className={`${styles.service} ${styles.serviceLive} section`}>
                    <div className="container">
                        <div className="content-max-width">
                            <h2>
                                Not Just "Streaming"
                                <br />
                                <span className="text-thai h3-sub">ไม่ใช่แค่ "ตั้งกล้องไลฟ์"</span>
                            </h2>
                            <p>Live commerce is high-intensity retail. It requires performance, operations, and tech to work in perfect sync.</p>
                            <p className="text-thai text-secondary mb-4">Live Commerce คือการค้าปลีกที่มีความเข้มข้นสูง ต้องการการแสดง การจัดการ และเทคโนโลยีที่ทำงานประสานกันอย่างสมบูรณ์แบบ</p>

                            <div className="divider"></div>

                            <h3>
                                The 2-Hour 6-Figure System
                                <br />
                                <span className="text-thai h4-sub">ระบบปั้นยอดขาย 6 หลักใน 2 ชั่วโมง</span>
                            </h3>
                            <ul className={styles.list}>
                                <li>
                                    <strong>Product Curation:</strong> Selecting items that translate well to video.
                                    <span className="text-thai d-block text-sm text-secondary">คัดเลือกสินค้า: เลือกของที่ "ขึ้นกล้อง" และขายง่ายผ่านวิดีโอ</span>
                                </li>
                                <li>
                                    <strong>Script & Run of Show:</strong> Minute-by-minute engagement planning.
                                    <span className="text-thai d-block text-sm text-secondary">สคริปต์รายนาที: วางแผนการตรึงคนดูทุกช่วงเวลา</span>
                                </li>
                                <li>
                                    <strong>Technical Ops:</strong> OBS, lighting, sound, and platform setup.
                                    <span className="text-thai d-block text-sm text-secondary">ระบบเทคนิค: OBS, แสง, เสียง และการตั้งค่าแพลตฟอร์ม</span>
                                </li>
                                <li>
                                    <strong>Post-Live Analytics:</strong> Optimizing retention and conversion.
                                    <span className="text-thai d-block text-sm text-secondary">วิเคราะห์หลังบ้าน: ปรับปรุงยอดขายและการรักษาฐานลูกค้า</span>
                                </li>
                            </ul>

                            <div className="divider"></div>

                            <div className="text-center mt-8">
                                <Link href="/contact" className="btn btn-primary">
                                    Start Selling Live / เริ่มต้นขายไลฟ์
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
