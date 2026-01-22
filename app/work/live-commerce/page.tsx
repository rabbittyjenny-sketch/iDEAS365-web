import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import WorkSection from '../../components/WorkSection';
import styles from '../page.module.css';

export default function WorkLiveCommercePage() {
    return (
        <>
            <Navigation />
            <main className={styles.main}>
                <WorkSection initialCategory="live" />
            </main>
            <Footer />
        </>
    );
}
