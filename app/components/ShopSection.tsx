'use client';

import styles from './ShopSection.module.css';
import { products } from '../../lib/products-data';

export default function ShopSection() {
    const freeProducts = products.filter(p => p.type === 'free');
    const premiumProducts = products.filter(p => p.type === 'premium');
    const comingSoonProducts = products.filter(p => p.type === 'coming-soon');

    return (
        <section id="shop" className={`${styles.section} section`}>
            <div className="container">
                {/* Section Header */}
                <div className={styles.header}>
                    <h1 className={styles.title}>Resources</h1>
                    <span className={`${styles.titleThai} text-thai`}>สิ่งที่ฉันสร้างและแบ่งปัน</span>
                    <p className={styles.subtitle}>
                        Tools and templates I've created from real projects
                    </p>
                </div>

                {/* FREE Resources */}
                <div className={styles.category}>
                    <div className={styles.categoryHeader}>
                        <h3 className={styles.categoryTitle}>
                            Free Resources
                            <span className="text-thai">แบ่งปันฟรี</span>
                        </h3>
                        <p className={styles.categoryDescription}>
                            Things I use and share with you
                        </p>
                    </div>

                    <div className={styles.grid}>
                        {freeProducts.map((product) => (
                            <div key={product.id} className={`${styles.productCard} card`}>
                                <div className={`${styles.categoryIndicator} ${styles[product.color]}`}></div>
                                <div className={styles.productPrice}>{product.price}</div>
                                <h4 className={styles.productTitle}>{product.title}</h4>
                                <p className={`${styles.productTitleTh} text-thai`}>{product.titleTh}</p>
                                <p className={styles.productDescription}>{product.description}</p>
                                <p className={`${styles.productDescriptionTh} text-thai`}>{product.descriptionTh}</p>
                                <span className={`badge ${styles.productCategory} ${styles[product.color + 'Text']}`}>{product.category}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* PREMIUM Products */}
                <div className={styles.category}>
                    <div className={styles.categoryHeader}>
                        <h3 className={styles.categoryTitle}>
                            Create by iDEASE365 (Serprise Ver.)
                        </h3>
                        <p className={styles.categoryDescription}>
                            Refined tools from my actual work<br />
                            <span className="text-thai">สร้างด้วยความตั้งใจที่ค้นคว้าจากข้อมูลจริงอ้างอิงได้และตอบในทุกปัญหาให้แล้ว</span>
                        </p>
                    </div>

                    <div className={styles.grid}>
                        {premiumProducts.map((product) => (
                            <div key={product.id} className={`${styles.productCard} ${styles.premium} card`}>
                                <div className={`${styles.categoryIndicator} ${styles[product.color]}`}></div>
                                <div className={styles.productPrice}>฿ — —</div>
                                <h4 className={styles.productTitle}>{product.title}</h4>
                                <p className={`${styles.productTitleTh} text-thai`}>{product.titleTh}</p>
                                <p className={styles.productDescription}>{product.description}</p>
                                <p className={`${styles.productDescriptionTh} text-thai`}>{product.descriptionTh}</p>
                                <span className={`badge ${styles.productCategory} ${styles[product.color + 'Text']}`}>{product.category}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* COMING SOON */}
                <div className={styles.category}>
                    <div className={styles.categoryHeader}>
                        <h3 className={styles.categoryTitle}>
                            Coming Soon
                            <span className="text-thai">เร็วๆ นี้</span>
                        </h3>
                        <p className={styles.categoryDescription}>
                            Future offerings currently in development
                        </p>
                    </div>

                    <div className={styles.grid}>
                        {comingSoonProducts.map((product) => (
                            <div key={product.id} className={`${styles.productCard} ${styles.comingSoon} card`}>
                                <div className={`${styles.categoryIndicator} ${styles[product.color]}`}></div>
                                <div className={styles.productPrice}>{product.price}</div>
                                <h4 className={styles.productTitle}>{product.title}</h4>
                                <p className={`${styles.productTitleTh} text-thai`}>{product.titleTh}</p>
                                <p className={styles.productDescription}>{product.description}</p>
                                <p className={`${styles.productDescriptionTh} text-thai`}>{product.descriptionTh}</p>
                                <span className={`badge ${styles.productCategory} ${styles[product.color + 'Text']}`}>{product.category}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Note - Professional placement at end of section */}
                <div className={styles.notice}>
                    <p><strong>Note:</strong> All completed projects and systems will be added to the shop as they're finalized. Products can be sold as one-time purchases, monthly subscriptions, or custom solutions.</p>
                    <p className="text-thai"><strong>หมายเหตุ:</strong> โปรเจกต์และระบบที่เสร็จสมบูรณ์จะถูกเพิ่มเข้ามาเมื่อพร้อม สามารถขายแบบซื้อครั้งเดียว รายเดือน หรือสั่งทำพิเศษได้</p>
                </div>
            </div>
        </section>
    );
}
