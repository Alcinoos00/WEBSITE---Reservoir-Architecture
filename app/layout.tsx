import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClarityInit from "@/components/ClarityInit";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_NAME, SITE_URL, getOrganizationJsonLd } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - Architecte à Aix-en-Provence`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Agence d'architecture à Aix-en-Provence intervenant en PACA. Villas contemporaines, logements collectifs, commerces et équipements publics.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  generator: "Next.js",
  keywords: [
    "architecte Aix-en-Provence",
    "architecte PACA",
    "architecte Marseille",
    "architecte Provence",
    "villa contemporaine architecte",
    "architecte logements collectifs",
    "architecte commerce",
    "architecte équipements publics",
    "Reservoir Architecture",
  ],
  icons: {
    icon: [
      { url: "/images/ui/icon_dark.svg", media: "(prefers-color-scheme: light)" },
      { url: "/images/ui/icon_light.svg", media: "(prefers-color-scheme: dark)" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: SITE_NAME,
    url: SITE_URL,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = getOrganizationJsonLd();
  return (
    <html lang="fr">
      <body className={inter.variable}>
        <ClarityInit />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Navbar />
        <div className="main-container">
          <div className="content-wrapper">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

