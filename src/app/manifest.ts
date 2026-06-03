import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'RYTINWEB Web Engineering',
    short_name: 'RYTINWEB',
    description: 'Delhi based Web Development and SEO agency specializing in custom Next.js frontends.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0A',
    theme_color: '#0A0A0A',
    icons: [
      {
        src: '/logos/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/logos/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/logos/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
