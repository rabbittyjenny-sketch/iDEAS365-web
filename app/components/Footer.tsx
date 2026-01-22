import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.centeredContent}>
                    <div className={styles.footerRow}>
                        <div className={styles.brand}>
                            <h3>JYNE : iDEAS365</h3>
                            <p>Smart Lazy Style</p>
                        </div>

                        <nav className={styles.nav}>
                            <Link href="/about">About</Link>
                            <Link href="/approach">Approach</Link>
                        </nav>
                    </div>

                    <div className={styles.bottom}>
                        <p>© {currentYear} All right reserved | Created by iDEAS365 x Generative AI</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
