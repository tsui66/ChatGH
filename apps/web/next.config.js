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
        destination: "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftsui66%2FChatGH&env=OPENAI_API_KEY",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
