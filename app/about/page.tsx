import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import styles from './page.module.css';

export default function AboutPage() {
    return (
        <>
            <Navigation />
            <main className={styles.main}>
                <AboutSection />
            </main>
            <Footer />
        </>
    );
}
