import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import styles from './page.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'iDEAS365 Philosophy: Smart Lazy, Operational Intelligence',
    description: 'Our philosophy: Work smart, not hard. Build systems that reduce effort without reducing results. Proven, not perfect.',
    keywords: ['Smart Lazy', 'Operational Intelligence', 'Systems Architecture', 'AI Builder', 'Live Commerce', 'Business Strategy'],
    openGraph: {
        title: 'iDEAS365 Philosophy: Smart Lazy, Operational Intelligence',
        description: 'Our philosophy: Work smart, not hard. Build systems that reduce effort without reducing results. Proven, not perfect.',
        type: 'profile',
        url: 'https://ideas365.co/about',
        images: [
            {
                url: '/JYNEResume042025.jpg',
                width: 800,
                height: 1132,
                alt: 'iDEAS365 Three Core Philosophy Pillars - Jenjira Jaisin Professional Resume',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'iDEAS365 Philosophy: Smart Lazy, Operational Intelligence',
        description: 'Our philosophy: Work smart, not hard. Build systems that reduce effort without reducing results. Proven, not perfect.',
        images: ['/JYNEResume042025.jpg'],
    },
};

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
