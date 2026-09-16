import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import ClarityInit from "@/components/ClarityInit";
import GtagLoader from "@/components/GtagLoader";
import { LeadTracking } from "@/components/LeadButtons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  SITE_DEFAULT_IMAGE,
  SITE_DEFAULT_IMAGE_ALT,
  SITE_NAME,
  SITE_URL,
  getOrganizationJsonLd,
  getWebsiteJsonLd,
} from "@/lib/seo";
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
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
      { url: "/images/ui/icon_dark.svg", media: "(prefers-color-scheme: light)" },
      { url: "/images/ui/icon_light.svg", media: "(prefers-color-scheme: dark)" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: SITE_NAME,
    url: SITE_URL,
    images: [
      {
        url: SITE_DEFAULT_IMAGE,
        width: 1200,
        height: 800,
        alt: SITE_DEFAULT_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [SITE_DEFAULT_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [getOrganizationJsonLd(), getWebsiteJsonLd()];
  return (
    <html lang="fr">
      <body className={inter.variable}>
        <ClarityInit />
        {/* Suivi des clics téléphone et email sur tout le site (conversions Google Ads). */}
        <LeadTracking />
        {/* gtag() est défini dès l'hydratation : les conversions click_phone / click_email
            sont mises en file dans dataLayer, puis envoyées dès que la librairie arrive. */}
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-P177CL77BE');`}
        </Script>
        <GtagLoader id="G-P177CL77BE" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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


