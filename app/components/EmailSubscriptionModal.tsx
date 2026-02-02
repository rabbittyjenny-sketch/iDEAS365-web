'use client';

import { useState } from 'react';
import styles from './EmailSubscriptionModal.module.css';

interface FreeResource {
    id: string;
    category: string;
    name: string;
    url: string;
    update: string;
}

interface EmailSubscriptionModalProps {
    resource: FreeResource;
    onClose: () => void;
}

const BUSINESS_TYPES = [
    'E-commerce / ร้านค้าออนไลน์',
    'Education / การศึกษา',
    'Healthcare / สุขภาพ',
    'Technology / เทคโนโลยี',
    'Food & Beverage / อาหารและเครื่องดื่ม',
    'Fashion / แฟชั่น',
    'Real Estate / อสังหาริมทรัพย์',
    'Finance / การเงิน',
    'Marketing / การตลาด',
    'Consulting / ที่ปรึกษา',
    'Manufacturing / การผลิต',
    'Other / อื่นๆ'
];

export default function EmailSubscriptionModal({ resource, onClose }: EmailSubscriptionModalProps) {
    const [userName, setUserName] = useState('');
    const [businessType, setBusinessType] = useState('');
    const [email, setEmail] = useState('');
    const [pdpaConsent, setPdpaConsent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Validate all fields
        if (!userName.trim()) {
            setError('กรุณากรอกชื่อของคุณ');
            return;
        }

        if (!businessType) {
            setError('กรุณาเลือกประเภทธุรกิจ');
            return;
        }

        if (!pdpaConsent) {
            setError('กรุณายอมรับเงื่อนไขและนโยบายความเป็นส่วนตัว');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userName,
                    businessType,
                    email,
                    id: resource.id,
                    name: resource.name,
                    category: resource.category,
                    url: resource.url,
                }),
            });

            const data = await response.json();

            if (data.success) {
                setSuccess(true);

                // Open Google Drive file with download toolbar
                const downloadUrl = resource.url;

                // Open download in new tab
                const newWindow = window.open(downloadUrl, '_blank');

                // Fallback if popup blocked
                if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
                    const link = document.createElement('a');
                    link.href = downloadUrl;
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }

                // Close modal after 3 seconds
                setTimeout(() => {
                    onClose();
                }, 3000);
            } else {
                setError(data.error || 'ไม่สามารถบันทึกข้อมูลได้');
            }
        } catch (err) {
            setError('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    ×
                </button>

                {!success ? (
                    <>
                        <h2 className={styles.title}>Subscribe & Download</h2>
                        <p className={styles.subtitle}>สมัครรับข้อมูลและดาวน์โหลดฟรี</p>
                        <p className={styles.description}>
                            กรอกข้อมูลเพื่อดาวน์โหลด <strong>{resource.name}</strong>
                        </p>

                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="userName" className={styles.label}>
                                    ชื่อของคุณ <span className={styles.required}>*</span>
                                </label>
                                <input
                                    type="text"
                                    id="userName"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    placeholder="ชื่อ-นามสกุล"
                                    required
                                    className={styles.input}
                                    disabled={loading}
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="businessType" className={styles.label}>
                                    ประเภทธุรกิจ <span className={styles.required}>*</span>
                                </label>
                                <select
                                    id="businessType"
                                    value={businessType}
                                    onChange={(e) => setBusinessType(e.target.value)}
                                    required
                                    className={styles.select}
                                    disabled={loading}
                                >
                                    <option value="">เลือกประเภทธุรกิจ</option>
                                    {BUSINESS_TYPES.map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="email" className={styles.label}>
                                    อีเมล <span className={styles.required}>*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    required
                                    className={styles.input}
                                    disabled={loading}
                                />
                            </div>

                            <div className={styles.checkboxGroup}>
                                <input
                                    type="checkbox"
                                    id="pdpaConsent"
                                    checked={pdpaConsent}
                                    onChange={(e) => setPdpaConsent(e.target.checked)}
                                    required
                                    className={styles.checkbox}
                                    disabled={loading}
                                />
                                <label htmlFor="pdpaConsent" className={styles.checkboxLabel}>
                                    ฉันยอมรับ<a href="/privacy-policy" target="_blank" className={styles.link}>นโยบายความเป็นส่วนตัว</a> และยินยอมให้ iDEAS365 ติดต่อเพื่อส่งข้อมูลข่าวสารทางการตลาด <span className={styles.required}>*</span>
                                </label>
                            </div>

                            {error && <p className={styles.error}>{error}</p>}

                            <button
                                type="submit"
                                className={styles.submitButton}
                                disabled={loading}
                            >
                                {loading ? 'กำลังดำเนินการ...' : 'Subscribe & Download'}
                            </button>
                        </form>
                    </>
                ) : (
                    <div className={styles.successMessage}>
                        <div className={styles.successIcon}>✓</div>
                        <h3 className={styles.successTitle}>สำเร็จ!</h3>
                        <p className={styles.successText}>
                            ไฟล์จะเปิดอัตโนมัติ
                        </p>
                        <p className={styles.successText}>
                            หากไม่เปิด กรุณากดปุ่มด้านล่าง:
                        </p>
                        <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.downloadLink}
                        >
                            เปิดไฟล์ดาวน์โหลด
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
