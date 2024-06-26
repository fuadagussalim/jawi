if (!URL.canParse(process.env.WORDPRESS_API_URL)) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}

const { protocol, hostname, port, pathname } = new URL(
  process.env.WORDPRESS_API_URL,
);

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
 staticPageGenerationTimeout: 1000,
  images: {
    domains: ['blog.jawi.or.id', 'secure.gravatar.com', 'picsum.photos'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '1.gravatar.com',
        port: '',
        pathname: `/avatar/**`,
      },
      {
        protocol: protocol.slice(0, -1),
        hostname,
        port,
        pathname: `${pathname}/**`,
      },
    ],
  },
};
