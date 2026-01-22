import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import styles from './page.module.css';

export default function ContactPage() {
    return (
        <>
            <Navigation />
            <main className={styles.main}>
                <ContactSection />
            </main>
            <Footer />
        </>
    );
}
