import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "RYTINWEB | Premium Web Design & Development Agency",
  description: "Bespoke digital design, custom front-end development, and high-performance SEO systems. Engineered for speed and conversion.",
  icons: {
    icon: [
      { url: "/logos/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/logos/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/logos/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-screen flex flex-col bg-white text-dark antialiased font-sans`}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
