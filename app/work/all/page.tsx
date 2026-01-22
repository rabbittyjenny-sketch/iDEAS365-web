import WorkSection from '../../components/WorkSection';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import styles from '../page.module.css';

export default function AllWorkPage() {
    return (
        <>
            <Navigation />
            <main className={styles.main}>
                <WorkSection initialCategory="all" />
            </main>
            <Footer />
        </>
    );
}
