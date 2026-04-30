import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { MobileNavEffects } from "@/hooks/useMobileNav";
import Header from "@/app/components/Header";
import MainNav from "@/components/navigation/MainNav";
import MobileNav from "@/components/navigation/MobileNav";
import MobileDrawer from "@/components/navigation/MobileDrawer";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RXy+ | Premium Supplements & Blood Testing",
  description: "Shop premium protein powders, supplements, vitamins, and blood testing kits. Quality products backed by science.",
  keywords: ["protein", "supplements", "vitamins", "fitness", "health", "blood testing"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-white antialiased">
        {/* Mobile drawer logic (scroll lock, escape key) */}
        <MobileNavEffects />

        {/* Mobile navigation (visible < lg) */}
        <div className="flex lg:hidden">
          <MobileNav />
        </div>

        {/* Desktop header: logo, search, account, basket (visible ≥ lg) */}
        <div className="hidden lg:block">
          <Header />
        </div>

        {/* Desktop navigation (visible ≥ lg) */}
        <div className="hidden lg:flex">
          <MainNav />
        </div>

        {/* Mobile drawer panel (always mounted) */}
        <MobileDrawer />

        {/* Page content */}
        <main className="pt-16 lg:pt-0">
          {children}
        </main>

        <Footer />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
