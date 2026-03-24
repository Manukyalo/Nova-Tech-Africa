import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Axelo',
    short_name: 'Axelo',
    description: 'High-performance software engineering and AI studio accelerating what\'s next.',
    start_url: '/',
    display: 'standalone',
    background_color: '#03000A',
    theme_color: '#6366F1',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
