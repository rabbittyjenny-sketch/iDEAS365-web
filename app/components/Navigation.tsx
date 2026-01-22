'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

interface NavItem {
    label: string;
    href: string;
    children?: { label: string; href: string }[];
}

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
    const pathname = usePathname();

    const navLinks: NavItem[] = [
        {
            label: 'Work',
            href: '/work',
            children: [
                { label: 'All Work', href: '/work/all' },
                { label: 'AI Tools', href: '/work/ai-tools' },
                { label: 'Live Commerce', href: '/work/live-commerce' },
                { label: 'Business Systems', href: '/work/business-systems' },
            ],
        },
        {
            label: 'Services',
            href: '/services',
            children: [
                { label: 'Strategy', href: '/services/strategy' },
                { label: 'Systems', href: '/services/systems' },
                { label: 'Live Commerce', href: '/services/live-commerce' },
            ],
        },
        {
            label: 'Resources',
            href: '/resources',
            children: [
                { label: 'Shop', href: '/resources' },
                { label: 'Guides', href: '/resources/guides' },
            ],
        },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact' },
    ];

    const toggleMobileSubmenu = (label: string) => {
        if (activeMobileSubmenu === label) {
            setActiveMobileSubmenu(null);
        } else {
            setActiveMobileSubmenu(label);
        }
    };

    const getNavColorClass = (label: string) => {
        switch (label) {
            case 'Work': return styles.navBlue;
            case 'Services': return styles.navYellow;
            case 'Resources': return styles.navGreen;
            case 'Blog': return styles.navRed;
            case 'Contact': return styles.navBlack;
            default: return '';
        }
    };

    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <img
                        src="/logo_header.png"
                        alt="JYNE : iDEAS365"
                        height={40}
                        style={{ height: '40px', width: 'auto' }}
                    />
                </Link>

                {/* Desktop Menu */}
                <ul className={styles.menu}>
                    {navLinks.map((link) => (
                        <li key={link.label} className={styles.menuItem}>
                            <Link
                                href={link.href}
                                className={`${styles.link} ${pathname?.startsWith(link.href) ? styles.active : ''} ${getNavColorClass(link.label)}`}
                            >
                                {link.label}
                                {link.children && (
                                    <span className={styles.dropdownArrow}>
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                )}
                            </Link>

                            {link.children && (
                                <ul className={styles.dropdown}>
                                    {link.children.map((child) => (
                                        <li key={child.href}>
                                            <Link href={child.href} className={styles.dropdownLink}>
                                                {child.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Mobile Toggle */}
                <button
                    className={styles.toggle}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={isMobileMenuOpen ? styles.open : ''}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    {navLinks.map((link) => (
                        <div key={link.label}>
                            <div className={styles.mobileLinkWrapper}>
                                <Link
                                    href={link.href}
                                    className={`${styles.mobileLink} ${pathname === link.href ? styles.activeMobile : ''}`}
                                    onClick={() => {
                                        if (!link.children) setIsMobileMenuOpen(false);
                                    }}
                                >
                                    {link.label}
                                </Link>
                                {link.children && (
                                    <button
                                        className={styles.mobileSubmenuToggle}
                                        onClick={() => toggleMobileSubmenu(link.label)}
                                    >
                                        {activeMobileSubmenu === link.label ? '−' : '+'}
                                    </button>
                                )}
                            </div>

                            {link.children && activeMobileSubmenu === link.label && (
                                <div className={styles.mobileSubMenu}>
                                    {link.children.map((child) => (
                                        <Link
                                            key={child.href}
                                            href={child.href}
                                            className={styles.mobileSubLink}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {child.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </nav>
    );
}
