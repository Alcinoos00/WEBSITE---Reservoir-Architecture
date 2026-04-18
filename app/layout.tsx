import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RESERVOIR Architecture",
  description: "VILLAS | LOGEMENTS | COMMERCES | EQUIPEMENTS",
  icons: {
    icon: [
      { url: "/images/ui/icon_dark.svg", media: "(prefers-color-scheme: light)" },
      { url: "/images/ui/icon_light.svg", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.variable}>
        <Navbar />
        <div className="main-container">
          <main className="content-wrapper">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
