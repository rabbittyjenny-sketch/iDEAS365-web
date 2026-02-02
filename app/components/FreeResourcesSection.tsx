'use client';

import { useState, useEffect } from 'react';
import styles from './FreeResourcesSection.module.css';
import ResourceCard from './ResourceCard';
import EmailSubscriptionModal from './EmailSubscriptionModal';

interface FreeResource {
    id: string;
    category: string;
    name: string;
    url: string;
    update: string;
}

export default function FreeResourcesSection() {
    const [resources, setResources] = useState<FreeResource[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedResource, setSelectedResource] = useState<FreeResource | null>(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetchResources();
    }, []);

    const fetchResources = async () => {
        try {
            const response = await fetch('/api/resources');
            const data = await response.json();

            if (data.success) {
                setResources(data.data);
            }
        } catch (error) {
            console.error('Error fetching resources:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDownloadClick = (resource: FreeResource) => {
        setSelectedResource(resource);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedResource(null);
    };

    if (loading) {
        return (
            <section className={styles.section}>
                <div className={styles.container}>
                    <p className={styles.loading}>Loading resources...</p>
                </div>
            </section>
        );
    }

    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Free Resources</h1>
                        <p className={styles.subtitle}>เมนูโหลดฟรี</p>
                        <p className={styles.description}>Things I use and share with you</p>
                    </div>

                    <div className={styles.grid}>
                        {resources.map((resource) => (
                            <ResourceCard
                                key={resource.id}
                                resource={resource}
                                onDownloadClick={handleDownloadClick}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {showModal && selectedResource && (
                <EmailSubscriptionModal
                    resource={selectedResource}
                    onClose={handleCloseModal}
                />
            )}
        </>
    );
}
