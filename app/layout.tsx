import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "UTH Web - Premium Web Design & Social Media Marketing",
    template: "%s | UTH Web",
  },
  description: "Professional web design, development, and social media marketing services",
  keywords: ["web design", "web development", "social media marketing", "digital marketing", "Sri Lanka", "Maldives"],
  authors: [{ name: "UTH Web" }],
  creator: "UTH Web",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "UTH Web",
    title: "UTH Web - Premium Web Design & Social Media Marketing",
    description: "Professional web design, development, and social media marketing services",
  },
  twitter: {
    card: "summary_large_image",
    title: "UTH Web - Premium Web Design & Social Media Marketing",
    description: "Professional web design, development, and social media marketing services",
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-black text-white font-sans`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
