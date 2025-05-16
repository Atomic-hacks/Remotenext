import type { Metadata } from "next";
import { Inter } from 'next/font/google'
 
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
 
// Configure the font with weights, styles, and subsets
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter', // CSS variable for use in tailwind config
  display: 'swap',
})

export const metadata: Metadata = {
  title: "RemoteNext - Your Gateway to Global Remote Jobs",
  description: "Find and land remote roles in AI, Data Entry, and more with RemoteNext - wherever you are in the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased  text-neutral-200 px-2 py-3`}
      >
        <Navbar/>
        <main className="min-h-screen">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}