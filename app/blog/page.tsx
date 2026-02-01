import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import styles from './page.module.css';

// Type definition for blog posts
type BlogPost = {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    readTime: string;
};

// Sample data
const posts: BlogPost[] = [
    {
        id: 'social-media-reporting-guide',
        title: 'คู่มือรายงานผลโซเชียลมีเดีย',
        excerpt: 'คู่มือฉบับสมบูรณ์สำหรับการวัดผล วิเคราะห์ และรายงานผลโซเชียลมีเดีย แบบมืออาชีพ พร้อมตัวอย่างและแนวทางที่นำไปใช้ได้จริง',
        date: 'Jan 29, 2026',
        category: 'Social Media',
        readTime: '15 min read'
    },
    {
        id: 'systems-thinking-small-teams',
        title: 'Systems Thinking for Small Teams',
        excerpt: 'How to build operational systems without hiring more people. A guide to scaling yourself.',
        date: 'Jan 15, 2026',
        category: 'Systems',
        readTime: '5 min read'
    },
    {
        id: 'live-commerce-guide',
        title: 'Live Commerce: What Actually Works',
        excerpt: 'Lessons learned from generating 6-figure sales in 2 hours. It\'s not about the gear.',
        date: 'Jan 10, 2026',
        category: 'Live Commerce',
        readTime: '8 min read'
    },
    {
        id: 'ai-tools-workflow',
        title: 'AI Tools That Don\'t Waste Your Time',
        excerpt: 'Practical AI automation for real business problems. Stop playing with prompts and start building.',
        date: 'Jan 05, 2026',
        category: 'AI Automation',
        readTime: '6 min read'
    }
];

export default function BlogPage() {
    return (
        <>
            <Navigation />
            <main className={styles.main}>
                {/* Blog Hero */}
                <section className={styles.hero}>
                    <div className="container">
                        <h1 className={styles.title}>Blog</h1>
                        <p className={styles.subtitle}>Insights on systems, strategy, and execution</p>
                        <p className={`${styles.subtitle} text-thai`}>บทความเกี่ยวกับระบบ กลยุทธ์ และการลงมือทำจริง</p>
                    </div>
                </section>

                {/* Featured / List */}
                <section className={`${styles.posts} section`}>
                    <div className="container">
                        <div className={styles.grid}>
                            {posts.map((post) => {
                                const isExternal = post.id === 'social-media-reporting-guide';
                                const href = isExternal ? '/social-media-guide/index.html' : `/blog/${post.id}`;

                                return (
                                    <article key={post.id} className={styles.card}>
                                        <div className={styles.cardHeader}>
                                            <span className={styles.category}>{post.category}</span>
                                            <span className={styles.readTime}>{post.readTime}</span>
                                        </div>

                                        {isExternal ? (
                                            <a href={href} className={styles.link} target="_blank" rel="noopener noreferrer">
                                                <h2 className={styles.postTitle}>{post.title}</h2>
                                            </a>
                                        ) : (
                                            <Link href={href} className={styles.link}>
                                                <h2 className={styles.postTitle}>{post.title}</h2>
                                            </Link>
                                        )}

                                        <p className={styles.excerpt}>{post.excerpt}</p>

                                        <div className={styles.meta}>
                                            <time className={styles.date}>{post.date}</time>
                                            {isExternal ? (
                                                <a href={href} className={styles.readMore} target="_blank" rel="noopener noreferrer">
                                                    อ่านบทความ →
                                                </a>
                                            ) : (
                                                <Link href={href} className={styles.readMore}>
                                                    Read Article →
                                                </Link>
                                            )}
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
