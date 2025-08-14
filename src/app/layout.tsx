import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
//import { skincarePlans } from './pielegnacje/page'

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agata Stan - Ekspert Pielęgnacji Skóry",
  description: "Agata Stan - Ekspert Pielęgnacji Skóry",
  keywords: ["Agata Stan", "Ekspert Pielęgnacji Skóry", "Trądzik", "Agata Stan Instagram", "Agata Stan TikTok"],
};

// export function robots(): MetadataRoute.Robots {
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://agatastan.com'
  
//   return {
//     rules: {
//       userAgent: '*',
//       allow: '/',
//     },
//     sitemap: `${baseUrl}/sitemap.xml`,
//   }
// }

// export function sitemap(): MetadataRoute.Sitemap {
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://agatastan.com'
  
//   const staticPages = [
//     {
//       url: baseUrl,
//       lastModified: new Date(),
//       changeFrequency: 'monthly' as const,
//       priority: 1,
//     },
//     {
//       url: `${baseUrl}/pielegnacje`,
//       lastModified: new Date(),
//       changeFrequency: 'weekly' as const,
//       priority: 0.8,
//     },
//     {
//       url: `${baseUrl}/pielegnacje/spersonalizowany-plan-pielegnacyjny`,
//       lastModified: new Date(),
//       changeFrequency: 'weekly' as const,
//       priority: 0.8,
//     },
//   ]

//   const dynamicPages = Object.keys(skincarePlans).map((slug) => ({
//     url: `${baseUrl}/pielegnacje/${slug}`,
//     lastModified: new Date(),
//     changeFrequency: 'weekly' as const,
//     priority: 0.6,
//   }))

//   return [...staticPages, ...dynamicPages]
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`antialiased ${montserrat.variable} ${openSans.variable}`}
      >
        <Header />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-F798N3B1DJ" />
       
        {/* <Script id="Cookiebot" data-cbid="02dc9824-055d-4aa0-81e4-f93c5770179b" data-blockingmode="auto" src="https://consent.cookiebot.com/uc.js" type="text/javascript" strategy="beforeInteractive" async /> */}
      </body>
    </html>
  );
}
