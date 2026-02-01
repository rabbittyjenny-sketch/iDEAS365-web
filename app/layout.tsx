import type { Metadata } from "next";
import { Inter, Noto_Sans_Thai, Sarabun } from "next/font/google";
import "./globals.css";

// Font configurations - iDEAS365 Design System
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-english", // Maps to CSS variable
  display: "swap",
});

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-thai", // Maps to CSS variable
  display: "swap",
});

// Fallback/Legacy support
const sarabun = Sarabun({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "thai"],
  variable: "--font-sarabun",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JYNE | iDEAS365 - Systems Architect, AI Builder, Live Commerce Strategist",
  description: "คิดหนักแทนคนอื่น เพื่อให้ทุกคนทำงานเบาลง - Business systems, AI automation, and live commerce expertise by Jenjira Jaisin",
  keywords: [
    "business systems",
    "AI automation",
    "live commerce",
    "Thailand",
    "systems architect",
    "operational intelligence",
    "AI tools",
    "business strategy",
    "Jenjira Jaisin",
    "iDEAS365"
  ],
  authors: [{ name: "Jenjira Jaisin (Jyne)" }],
  creator: "Jenjira Jaisin",
  publisher: "iDEAS365",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "th_TH",
    url: "https://ideas365.online",
    siteName: "JYNE | iDEAS365",
    title: "JYNE | iDEAS365 - Systems Architect × AI Builder",
    description: "คิดหนักแทนคนอื่น เพื่อให้ทุกคนทำงานเบาลง",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JYNE | iDEAS365",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JYNE | iDEAS365",
    description: "Systems Architect × AI Builder × Live Commerce Strategist",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/ideas365-logo.png",
    apple: "/images/ideas365-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSansThai.variable} ${sarabun.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{
        fontFamily: `var(--font-english), var(--font-thai), sans-serif`,
        backgroundColor: 'var(--color-bg-primary)',
        backgroundImage: 'none'
      }}>
        {children}
      </body>
    </html>
  );
}
