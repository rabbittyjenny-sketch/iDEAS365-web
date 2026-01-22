import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import styles from '../page.module.css';

export default function GuidesPage() {
    return (
        <>
            <Navigation />
            <main className={styles.main}>
                <section className={styles.hero}>
                    <div className="container">
                        <h1>Guides</h1>
                        <p className={styles.subtitle}>Step-by-step playbooks for modern business</p>
                        <p className={`${styles.subtitle} text-thai`}>คู่มือทำธุรกิจแบบทีละขั้นตอน</p>
                    </div>
                </section>

                <section className={`section`}>
                    <div className="container text-center">
                        <div className="content-max-width">
                            <span style={{ fontSize: '48px', display: 'block', marginBottom: '24px' }}>📚</span>
                            <h2>
                                Library Under Construction
                                <br />
                                <span className="text-thai h3-sub">กำลังก่อสร้างห้องสมุด</span>
                            </h2>
                            <p>I'm currently documenting my internal SOPs into public guides. Check back soon.</p>
                            <p className="text-thai text-secondary">เรากำลังเรียบเรียงคู่มือการทำงาน (SOPs) ภายใน เพื่อมาแบ่งปันเป็นคู่มือสาธารณะ เร็วๆ นี้เจอกันค่ะ</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
