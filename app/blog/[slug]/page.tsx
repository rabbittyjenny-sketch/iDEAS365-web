'use client';

import { use } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import styles from './page.module.css';

// This would normally be fetched from an API or database
const getPost = (slug: string) => {
    const posts: Record<string, any> = {
        'systems-thinking-small-teams': {
            title: 'Systems Thinking for Small Teams',
            date: 'Jan 15, 2026',
            category: 'Systems',
            content: `
                <p>Scaling a business isn't just about hiring more people. In fact, hiring before you have systems is a recipe for chaos.</p>
                <h3>The "More Body" Problem</h3>
                <p>When you encounter a bottleneck, the instinct is to throw bodies at it. "I'm busy, I need an assistant." But if the process is broken, you're just paying someone else to be inefficient.</p>
                <h3>System First, Person Second</h3>
                <p>Before you hire, map the process. What exactly needs to happen? Can it be automated? Can it be templated?</p>
                <ul>
                    <li><strong>Step 1:</strong> Record yourself doing the task.</li>
                    <li><strong>Step 2:</strong> Write down the decision points.</li>
                    <li><strong>Step 3:</strong> Build a checklist (Standard Operating Procedure).</li>
                </ul>
                <p>Once you have this, you can hire anyone to run the system. Or better yet, you might find you don't need to hire at all.</p>
            `
        },
        'live-commerce-guide': {
            title: 'Live Commerce: What Actually Works',
            date: 'Jan 10, 2026',
            category: 'Live Commerce',
            content: `
                <p>I generated 6-figure sales in 2 hours. Here is the truth: It wasn't because of the lighting gear.</p>
                <h3>It's About Energy Management</h3>
                <p>Live selling is a performance art. You need to manage the energy of the room (chat) and your own stamina.</p>
                <h3>The 4-Part Framework</h3>
                <ol>
                    <li><strong>The Hook:</strong> Why should they stop scrolling?</li>
                    <li><strong>The "Hero" Product:</strong> The main attraction.</li>
                    <li><strong>The Scarcity:</strong> Why buy now?</li>
                    <li><strong>The Education:</strong> Teach them something.</li>
                </ol>
            `
        },
        'ai-tools-workflow': {
            title: 'AI Tools That Don\'t Waste Your Time',
            date: 'Jan 05, 2026',
            category: 'AI Automation',
            content: `
                <p>There are 10,000 AI tools launched every week. You only need 3.</p>
                <h3>The Core Stack</h3>
                <p>Stop chasing shiny objects. Focus on tools that solve specific bottlenecks.</p>
                <ul>
                    <li><strong>Writing/Thinking:</strong> Claude/ChatGPT (for drafts and logic).</li>
                    <li><strong>Visuals:</strong> Midjourney (for assets).</li>
                    <li><strong>Automation:</strong> Make.com (to glue it all together).</li>
                </ul>
            `
        }
    };

    return posts[slug] || {
        title: 'Post Not Found',
        date: '',
        category: 'Error',
        content: '<p>The article you are looking for does not exist.</p>'
    };
};

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const post = getPost(slug);

    return (
        <>
            <Navigation />
            <main className={styles.main}>
                <article className={styles.article}>
                    <header className={styles.header}>
                        <Link href="/blog" className={styles.backLink}>← Back to Blog</Link>
                        <div className={styles.meta}>
                            <span className={styles.category}>{post.category}</span>
                            <span className={styles.date}>{post.date}</span>
                        </div>
                        <h1 className={styles.title}>{post.title}</h1>
                    </header>

                    <div
                        className={styles.content}
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className={styles.footer}>
                        <p>Enjoyed this? <Link href="/contact">Let's talk</Link> about implementing this in your business.</p>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}
