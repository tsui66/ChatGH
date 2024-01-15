/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/github",
        destination: "https://github.com/tsui66/ChatGH",
        permanent: true,
      },
      {
        source: "/deploy",
        destination: "https://vercel.com/templates/next.js/ChatGH",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
