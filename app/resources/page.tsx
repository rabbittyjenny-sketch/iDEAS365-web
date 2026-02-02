import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FreeResourcesSection from '../components/FreeResourcesSection';
import styles from './page.module.css';

export default function ResourcesPage() {
    return (
        <>
            <Navigation />
            <main className={styles.main}>
                <FreeResourcesSection />
            </main>
            <Footer />
        </>
    );
}
