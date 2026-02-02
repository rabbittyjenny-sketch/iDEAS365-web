'use client';

import styles from './ResourceCard.module.css';

interface FreeResource {
    id: string;
    category: string;
    name: string;
    url: string;
    update: string;
}

interface ResourceCardProps {
    resource: FreeResource;
    onDownloadClick: (resource: FreeResource) => void;
}

export default function ResourceCard({ resource, onDownloadClick }: ResourceCardProps) {
    const getCategoryColor = (category: string) => {
        switch (category.toLowerCase()) {
            case 'template':
                return 'yellow';
            case 'guidebook':
                return 'blue';
            case 'framework':
                return 'green';
            default:
                return 'green';
        }
    };

    const categoryColor = getCategoryColor(resource.category);

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <span className={`${styles.categoryBadge} ${styles[categoryColor]}`}>
                    {resource.category}
                </span>
                <span className={styles.freeBadge}>FREE</span>
            </div>

            <h3 className={styles.title}>{resource.name}</h3>

            <p className={styles.description}>
                Free {resource.category} for planning and operations
            </p>

            <button
                className={styles.downloadButton}
                onClick={() => onDownloadClick(resource)}
            >
                <span>Download</span>
                <span className={styles.downloadIcon}>↓</span>
            </button>
        </div>
    );
}
