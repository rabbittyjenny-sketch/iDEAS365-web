import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ShopSection from '../components/ShopSection';
import styles from './page.module.css';

export default function ResourcesPage() {
    return (
        <>
            <Navigation />
            <main className={styles.main}>
                <ShopSection />
            </main>
            <Footer />
        </>
    );
}
