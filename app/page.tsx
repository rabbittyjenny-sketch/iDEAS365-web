import Hero from './components/Hero';
import Link from 'next/link';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import styles from './page.module.css';

import LandingIntro from './components/LandingIntro';

export default function Home() {
  return (
    <>
      <LandingIntro />
      <Navigation />

      <main className={styles.main}>
        {/* Hero Section - BLACK (Anchor) */}
        <Hero />

        {/* Process Section - BLUE (Systems) */}
        <section className={`${styles.process} section`}>
          <div className="container">
            <div className={styles.processGrid}>
              <div className={styles.processCard}>
                <div className={styles.iconBlue}>
                  <svg className="icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" />
                    <circle cx="24" cy="24" r="4" fill="currentColor" />
                    <path d="M24 8V16M24 32V40M8 24H16M32 24H40" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <h3>Think</h3>
                <p>Strategy & planning</p>
              </div>

              <div className={styles.processCard}>
                <div className={styles.iconBlue}>
                  <svg className="icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="8" width="32" height="32" stroke="currentColor" strokeWidth="2" />
                    <path d="M16 8V40M32 8V40M8 16H40M8 32H40" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <h3>Design</h3>
                <p>Systems & frameworks</p>
              </div>

              <div className={styles.processCard}>
                <div className={styles.iconBlue}>
                  <svg className="icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 24L20 36L40 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Deliver</h3>
                <p>Execution & results</p>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work - YELLOW (Insight) */}
        <section className={`${styles.work} section`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Selected Work</h2>

            <div className={styles.workGrid}>
              <div className={styles.workCard}>
                <h3>Live Commerce</h3>
                <p>6-figure sales in 2 hours</p>
                <Link href="/work/live-commerce" className={styles.arrow}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>

              <div className={styles.workCard}>
                <h3>AI Tools</h3>
                <p>5+ deployed systems</p>
                <Link href="/work/ai-tools" className={styles.arrow}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>

              <div className={styles.workCard}>
                <h3>Business Frameworks</h3>
                <p>Used by 20+ brands</p>
                <Link href="/work/business-systems" className={styles.arrow}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className={styles.viewAll}>
              <Link href="/work" className="btn btn-outline">
                View All Work
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA - RED (Action) */}
        <section className={`${styles.cta} section`}>
          <div className="container">
            <h2>Ready to work smarter?</h2>
            <Link href="/contact" className={`btn ${styles.btnAction}`}>
              Let's Talk
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
