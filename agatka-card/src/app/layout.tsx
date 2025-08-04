import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google'
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <GoogleTagManager gtmId="G-F798N3B1DJ" />
        <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="02dc9824-055d-4aa0-81e4-f93c5770179b" data-blockingmode="auto" type="text/javascript"></script>
      </body>
    </html>
  );
}
