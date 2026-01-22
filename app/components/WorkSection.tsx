'use client';

import { useState } from 'react';
import styles from './WorkSection.module.css';

import { projects, type WorkCategory } from '../../lib/work-data';

interface WorkSectionProps {
    initialCategory?: WorkCategory | 'all';
}

export default function WorkSection({ initialCategory = 'all' }: WorkSectionProps) {
    const [activeCategory, setActiveCategory] = useState<WorkCategory | 'all'>(initialCategory);

    const categories = [
        { id: 'all' as const, label: 'All Work', labelTh: 'ทั้งหมด', color: 'transparent' },
        { id: 'ai' as const, label: 'AI Tools', labelTh: 'AI Tools', color: 'yellow' },
        { id: 'live' as const, label: 'Social Commerce', labelTh: 'Social Commerce', color: 'red' },
        { id: 'business' as const, label: 'Business Systems', labelTh: 'ระบบธุรกิจ', color: 'green' },
    ];

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section id="work" className={`${styles.section} section`}>
            <div className="container">
                {/* Section Header */}
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        <span className={styles.scribbleText}>Work</span>
                        <span className="text-thai">ผลงาน</span>
                    </h2>
                    <p className={styles.subtitle}>
                        A collection of systems, tools, and strategies that actually work
                    </p>
                    <p className={`${styles.subtitle} text-thai`}>รวมระบบ เครื่องมือ และกลยุทธ์ที่ใช้ได้จริง</p>
                </div>

                {/* Category Tabs */}
                <div className={styles.tabs}>
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`${styles.tab} ${activeCategory === cat.id ? styles.active : ''}`}
                            onClick={() => setActiveCategory(cat.id)}
                        >
                            <span className={`${styles.navDot} ${styles[`circle-${cat.color}`]}`}></span>
                            <span className={styles.tabLabel}>
                                <span>{cat.label}</span>
                                <span className="text-thai">{cat.labelTh}</span>
                            </span>
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className={styles.grid}>
                    {filteredProjects.map((project) => (
                        <div key={project.id} className={`${styles.card} card`}>
                            <div className={styles.cardHeader}>
                                {/* Micro-Element: Navigation Dot / Indicator - Replaces the large icon */}
                                <div className={`${styles.projectDot} ${styles[project.iconType]}`}></div>

                                {project.status === 'coming-soon' && (
                                    <span className={styles.badge}>Coming Soon</span>
                                )}
                            </div>

                            <h3 className={styles.cardTitle}>{project.title}</h3>
                            <p className={`${styles.cardTitleTh} text-thai`}>{project.titleTh}</p>

                            <p className={styles.cardDescription}>{project.description}</p>
                            <p className={`${styles.cardDescriptionTh} text-thai`}>{project.descriptionTh}</p>

                            <div className={styles.cardTags}>
                                {project.tags.map((tag) => (
                                    <span key={tag} className={`badge badge-${project.category}`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${styles.cardLink} btn btn-outline`}
                                >
                                    View Project / ดูโปรเจกต์
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 3H3V13H13V10M10 3H13M13 3V6M13 3L6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                {/* Notice for Future Projects */}
                <div className={styles.notice}>
                    <p>
                        <strong>Note:</strong> More projects are being refined and will be added here soon.
                        All completed systems will be showcased unless specified otherwise.
                    </p>
                    <p className="text-thai">
                        <strong>หมายเหตุ:</strong> โปรเจกต์อื่นๆ กำลังปรับปรุงและจะเพิ่มเข้ามาเร็วๆ นี้
                    </p>
                </div>
            </div>
        </section >
    );
}
