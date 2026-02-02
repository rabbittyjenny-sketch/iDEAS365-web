import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import styles from './privacy-policy.module.css';

export default function PrivacyPolicyPage() {
    return (
        <>
            <Navigation />
            <main className={styles.main}>
                <div className={styles.container}>
                    <h1 className={styles.title}>นโยบายความเป็นส่วนตัว</h1>
                    <p className={styles.subtitle}>Privacy Policy</p>
                    <p className={styles.updated}>อัพเดทล่าสุด: 2 กุมภาพันธ์ 2026</p>

                    <section className={styles.section}>
                        <h2>ข้อมูลส่วนบุคคลที่มีการประมวลผล</h2>
                        <p>
                            เพื่อให้ iDEAS365 สามารถดำเนินการให้บริการและส่งมอบทรัพยากรฟรีแก่ท่านได้
                            กรุณาศึกษานโยบายข้อมูลส่วนบุคคลฉบับนี้อย่างละเอียดก่อนที่ท่านจะให้ข้อมูลแก่เรา
                        </p>
                        <p>
                            ในระหว่างกระบวนการสมัครรับข้อมูลและดาวน์โหลดทรัพยากร เราอาจได้รับข้อมูลส่วนบุคคลของท่าน ได้แก่:
                        </p>
                        <ul>
                            <li>ชื่อ-นามสกุล</li>
                            <li>ประเภทธุรกิจ</li>
                            <li>ที่อยู่อีเมล</li>
                            <li>ข้อมูลการดาวน์โหลดทรัพยากร</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2>วัตถุประสงค์การประมวลผลข้อมูลส่วนบุคคล</h2>
                        <p>ข้อมูลส่วนบุคคลของท่านจะถูกใช้เพื่อ:</p>
                        <ol>
                            <li>การส่งมอบทรัพยากรฟรีที่ท่านร้องขอ</li>
                            <li>การติดต่อสื่อสารเกี่ยวกับข้อมูลข่าวสารทางการตลาด</li>
                            <li>การปรับปรุงและพัฒนาบริการของเรา</li>
                            <li>การวิเคราะห์พฤติกรรมการใช้งานเพื่อนำเสนอเนื้อหาที่เหมาะสม</li>
                        </ol>
                    </section>

                    <section className={styles.section}>
                        <h2>การเปิดเผยหรือส่งต่อข้อมูลส่วนบุคคล</h2>
                        <p>
                            iDEAS365 จะไม่เปิดเผยหรือส่งต่อข้อมูลส่วนบุคคลของท่านให้แก่บุคคลภายนอก
                            เว้นแต่ในกรณีที่จำเป็นตามกฎหมาย หรือเพื่อการให้บริการที่ท่านร้องขอ
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>ระยะเวลาการเก็บรักษาข้อมูล</h2>
                        <p>
                            เว้นแต่ท่านแสดงเจตนาใช้สิทธิต่อ iDEAS365 ให้ดำเนินการลบหรือทำลายข้อมูล
                            เราจะเก็บข้อมูลส่วนบุคคลของท่านไว้เป็นระยะเวลา <strong>1 ปีปฏิทิน</strong>
                            นับจากวันที่ท่านให้ข้อมูล
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>สิทธิของท่านในฐานะเจ้าของข้อมูล</h2>
                        <p>ท่านมีสิทธิในการ:</p>
                        <ul>
                            <li>ขอเข้าถึงและขอสำเนาข้อมูลส่วนบุคคลของท่าน</li>
                            <li>ขอแก้ไขข้อมูลส่วนบุคคลที่ไม่ถูกต้อง</li>
                            <li>ขอลบหรือทำลายข้อมูลส่วนบุคคล</li>
                            <li>ขอคัดค้านการประมวลผลข้อมูล</li>
                            <li>ขอให้ระงับการใช้ข้อมูลส่วนบุคคล</li>
                            <li>ขอโอนย้ายข้อมูลส่วนบุคคล</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2>ติดต่อเรา</h2>
                        <p>หากท่านมีคำถามหรือต้องการใช้สิทธิของท่าน กรุณาติดต่อ:</p>
                        <div className={styles.contact}>
                            <p><strong>iDEAS365</strong></p>
                            <p>อีเมล: <a href="mailto:jyne@ideas365.online">jyne@ideas365.online</a></p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>การเปลี่ยนแปลงนโยบาย</h2>
                        <p>
                            iDEAS365 ขอสงวนสิทธิ์ในการแก้ไขหรือปรับปรุงนโยบายความเป็นส่วนตัวนี้ได้ตลอดเวลา
                            โดยจะแจ้งให้ท่านทราบผ่านทางเว็บไซต์หรืออีเมลที่ท่านให้ไว้
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
