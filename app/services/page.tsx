import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import styles from './page.module.css';

export default function ServicesPage() {
    return (
        <>
            <Navigation />

            <main className={styles.main}>
                <section className={styles.hero}>
                    <div className="container">
                        <h1 className={styles.title}>Services</h1>
                        <p className={styles.subtitle}>Three clear paths to work together</p>
                        <p className={`${styles.subtitle} text-thai`}>3 แนวทางชัดเจนในการทำงานร่วมกัน</p>
                    </div>
                </section>

                <section className={`${styles.service} ${styles.serviceStrategy} section`}>
                    <div className={styles.serviceGrid}>
                        {/* Left Column: Header + Description + Image */}
                        <div className={styles.imageCol}>
                            <h2>
                                <span className={styles.enTitle}>Problem Analysis & Solution</span>
                                <span className="text-thai h3-sub">มองเห็นปัญหาและเสนอทางแก้</span>
                            </h2>
                            <p className={styles.lead}>
                                <span className={styles.enLead}>Business planning that accounts for operational reality</span>
                                <span className="text-thai text-base">วางแผนธุรกิจที่คำนึงถึงความเป็นจริงในการปฏิบัติงาน</span>
                            </p>
                            <img src="/images/strategy.png" alt="Strategy Illustration" />
                        </div>

                        {/* Right Column: List Only (Pushed down by CSS) */}
                        <div className={styles.textCol}>
                            <ul className={styles.list}>
                                <li>
                                    Market strategy & positioning
                                    <span className="text-thai d-block text-sm text-secondary">กลยุทธ์การตลาดและการวางตำแหน่ง</span>
                                </li>
                                <li>
                                    Financial modeling & Forecasting
                                    <span className="text-thai d-block text-sm text-secondary">โมเดลการเงินและการคาดการณ์ที่เป็นจริง</span>
                                </li>
                                <li>
                                    Team structure & capacity planning
                                    <span className="text-thai d-block text-sm text-secondary">โครงสร้างทีมและการวางแผนกำลังคน</span>
                                </li>
                                <li>
                                    Tech stack recommendations
                                    <span className="text-thai d-block text-sm text-secondary">แนะนำเครื่องมือและเทคโนโลยีที่เหมาะสม</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className={`${styles.service} ${styles.serviceSystems} section bg-secondary`}>
                    <div className={styles.serviceGrid}>
                        {/* Systems Keep As Is: Image Left, Text Right (Header + Desc + List) */}
                        <div className={styles.imageCol}>
                            <img src="/images/systems.png" alt="Systems Illustration" />
                        </div>

                        <div className={styles.textCol}>
                            <h2>
                                <span className={styles.enTitle}>Systems Design</span>
                                <span className="text-thai h3-sub">ออกแบบระบบงาน</span>
                            </h2>
                            <p className={styles.lead}>
                                <span className={styles.enLead}>Operational frameworks that scale without breaking</span>
                                <span className="text-thai text-base">วางระบบปฏิบัติงานที่ขยายได้โดยไม่สะดุด</span>
                            </p>

                            <ul className={styles.list}>
                                <li>
                                    Process mapping & workflow design
                                    <span className="text-thai d-block text-sm text-secondary">แผนผังกระบวนการและออกแบบขั้นตอนการทำงาน</span>
                                </li>
                                <li>
                                    Practical Standard Operating Procedures (SOPs)
                                    <span className="text-thai d-block text-sm text-secondary">คู่มือปฏิบัติงาน (SOP) ที่นำไปใช้งานได้จริง</span>
                                </li>
                                <li>
                                    Key Performance Metrics (KPIs)
                                    <span className="text-thai d-block text-sm text-secondary">ตัวชี้วัดผลการดำเนินงานที่สำคัญ</span>
                                </li>
                                <li>
                                    Team training & documentation
                                    <span className="text-thai d-block text-sm text-secondary">การสอนงานและการทำเอกสารระบบ</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className={`${styles.service} ${styles.serviceLive} section`}>
                    <div className={styles.serviceGrid}>
                        {/* Left Column: Header + Description + Image */}
                        <div className={styles.imageCol}>
                            <h2>
                                <span className={styles.enTitle}>Live Commerce Setup</span>
                                <span className="text-thai h3-sub">วางระบบ Live Commerce</span>
                            </h2>
                            <p className={styles.lead}>
                                Complete live selling systems from zero to revenue
                                <br />
                                <span className="text-thai text-base">ระบบการขายผ่านไลฟ์ครบวงจร จากศูนย์สู่ยอดขาย</span>
                            </p>
                            <img src="/images/picture5.png" alt="Live Commerce Illustration" />
                        </div>

                        {/* Right Column: List Only (Pushed down by CSS) */}
                        <div className={styles.textCol}>
                            <ul className={styles.list}>
                                <li>
                                    Strategy & product selection
                                    <span className="text-thai d-block text-sm text-secondary">กลยุทธ์และการคัดเลือกสินค้า</span>
                                </li>
                                <li>
                                    Script frameworks & host training
                                    <span className="text-thai d-block text-sm text-secondary">โครงสร้างสคริปต์และการฝึกอบรมพิธีกร</span>
                                </li>
                                <li>
                                    Technical setup & operations
                                    <span className="text-thai d-block text-sm text-secondary">การติดตั้งระบบเทคนิคและการจัดการหลังบ้าน</span>
                                </li>
                                <li>
                                    Performance optimization
                                    <span className="text-thai d-block text-sm text-secondary">การปรับปรุงประสิทธิภาพเพื่อเพิ่มยอดขาย</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}
