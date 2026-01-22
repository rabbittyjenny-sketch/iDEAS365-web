export interface Product {
    id: string;
    title: string;
    titleTh: string;
    description: string;
    descriptionTh: string;
    type: 'free' | 'premium' | 'coming-soon';
    price?: string;
    link?: string;
    color: string;
    category: string;
}

export const products: Product[] = [
    // FREE Resources
    {
        id: 'free-templates',
        title: 'Business Templates',
        titleTh: 'เทมเพลตธุรกิจ',
        description: 'Free templates for planning and operations',
        descriptionTh: 'เทมเพลตฟรีสำหรับวางแผนและดำเนินงาน',
        type: 'free',
        color: 'green',
        category: 'Templates',
        price: 'FREE'
    },
    {
        id: 'free-guides',
        title: 'Quick Start Guides',
        titleTh: 'คู่มือเริ่มต้น',
        description: 'Step-by-step guides for common business tasks',
        descriptionTh: 'คู่มือทีละขั้นตอนสำหรับงานธุรกิจทั่วไป',
        type: 'free',
        color: 'green',
        category: 'Guides',
        price: 'FREE'
    },
    {
        id: 'free-frameworks',
        title: 'Strategy Frameworks',
        titleTh: 'กรอบกลยุทธ์',
        description: 'Sample frameworks for strategic thinking',
        descriptionTh: 'กรอบตัวอย่างสำหรับคิดเชิงกลยุทธ์',
        type: 'free',
        color: 'green',
        category: 'Frameworks',
        price: 'FREE'
    },

    // PREMIUM Products
    {
        id: 'premium-live-blueprint',
        title: 'Live Commerce Blueprint',
        titleTh: 'แผนผัง Live Commerce',
        description: 'Complete operational guide for live selling systems',
        descriptionTh: 'คู่มือการดำเนินงานฉบับเต็มสำหรับระบบการขายสด',
        type: 'premium',
        price: '฿2,500',
        color: 'blue',
        category: 'Blueprint'
    },
    {
        id: 'premium-ops-playbook',
        title: 'Operational Playbook',
        titleTh: 'คู่มือการดำเนินงาน',
        description: 'Internal documentation system for growing teams',
        descriptionTh: 'ระบบเอกสารภายในสำหรับทีมที่กำลังเติบโต',
        type: 'premium',
        price: '฿4,900',
        color: 'blue',
        category: 'Playbook'
    },
    {
        id: 'premium-system-audit',
        title: 'System Audit Framework',
        titleTh: 'กรอบการตรวจสอบระบบ',
        description: 'Template for auditing and fixing broken workflows',
        descriptionTh: 'เทมเพลตสำหรับตรวจสอบและแก้ไขเวิร์กโฟลว์ที่ขัดข้อง',
        type: 'premium',
        price: '฿1,200',
        color: 'blue',
        category: 'Audit'
    },

    // COMING SOON
    {
        id: 'ai-agent-bundle',
        title: 'Monthly AI Agent Access',
        titleTh: 'AI Agent รายเดือน',
        description: 'Subscription access to custom AI agents',
        descriptionTh: 'เข้าถึง AI agents แบบรายเดือน',
        type: 'coming-soon',
        price: 'TBA',
        color: 'green',
        category: 'Subscription'
    },
    {
        id: 'custom-ai-agents',
        title: 'Custom AI Agents',
        titleTh: 'AI Agent สั่งทำ',
        description: 'Tailored AI solutions for your business',
        descriptionTh: 'โซลูชั่น AI ที่ออกแบบเฉพาะธุรกิจคุณ',
        type: 'coming-soon',
        price: 'Custom Quote',
        color: 'green',
        category: 'Custom'
    },
];
