/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Format WebP par défaut conservé : testé en AVIF le 2026-09-16, la photo principale
    // de l'accueil pesait plus lourd (81 Ko contre 76 Ko) pour un encodage plus coûteux.
    // Défauts Next.js + 1440 : sur un téléphone en DPR 3, le bandeau d'accueil demande
    // ~1330 px de large. Sans ce palier, le navigateur saute directement à 1920.
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920, 2048, 3840],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "reservoir-architecture.com" }],
        destination: "https://www.reservoir-architecture.com/:path*",
        permanent: true,
      },
      { source: "/bureaux", destination: "/equipements", permanent: true },
      { source: "/enseignement", destination: "/equipements", permanent: true },
      { source: "/tertiaire", destination: "/equipements", permanent: true },
      { source: "/architecture-commerciale-cjoo", destination: "/commerces", permanent: true },
      { source: "/copie-de-tertiaire", destination: "/logements", permanent: true },
      { source: "/copie-de-architecture-commerciale", destination: "/commerces", permanent: true },
    ];
  },
};

export default nextConfig;
