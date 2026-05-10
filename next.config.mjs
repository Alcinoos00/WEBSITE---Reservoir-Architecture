/** @type {import('next').NextConfig} */
const nextConfig = {
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
