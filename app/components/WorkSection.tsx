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
                            {/* Header: Title Left, Logo Right */}
                            <div className={styles.cardHeader}>
                                {/* Left Side: Title */}
                                <div className={styles.titleWrapper}>
                                    <h3 className={styles.cardTitle}>{project.title}</h3>
                                    <p className={`${styles.cardTitleTh} text-thai`}>{project.titleTh}</p>
                                </div>

                                {/* Right Side: Logo or Icon */}
                                {project.logo ? (
                                    <img
                                        src={project.logo}
                                        alt={`${project.title} logo`}
                                        className={`${styles.projectLogo} ${project.logo.includes('ideas365') ? styles.logoIdeas365 : ''} ${project.logo.includes('soul') ? styles.logoSoul : ''} ${project.logo.includes('kaixin') ? styles.logoKaixin : ''}`}
                                    />
                                ) : (
                                    <div className={`${styles.cardIcon} ${styles[`circle-${project.category === 'ai' ? 'yellow' : project.category === 'live' ? 'red' : 'green'}`]}`}>
                                        <div className={`${styles.projectDot} ${styles[`circle-${project.category === 'ai' ? 'yellow' : project.category === 'live' ? 'red' : 'green'}`]}`}></div>
                                    </div>
                                )}
                            </div>

                            {/* Status Badge */}
                            {project.status === 'coming-soon' && (
                                <div className={styles.statusWrapper}>
                                    <span className="badge">Coming Soon</span>
                                </div>
                            )}

                            {/* Preview Image */}
                            {project.previewImage && (
                                <div className={styles.previewContainer}>
                                    <img src={project.previewImage} alt={`${project.title} preview`} className={styles.previewImage} />
                                </div>
                            )}

                            {/* Description */}
                            <div className={styles.cardContent}>
                                <p className={styles.cardDescription}>{project.description}</p>
                                <p className={`${styles.cardDescriptionTh} text-thai`}>{project.descriptionTh}</p>
                            </div>

                            {/* Footer Button (Resource Style Badge in Blue) */}
                            {project.link && (
                                <div className={styles.cardFooter}>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.viewButton}
                                    >
                                        View Project / ดูโปรเจกต์
                                        <svg className={styles.btnIcon} width="16" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.3335 8.5H12.6668M12.6668 8.5L8.00016 3.83331M12.6668 8.5L8.00016 13.1666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
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
