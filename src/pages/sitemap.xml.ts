import type { APIRoute } from 'astro';

const routes = [
  '/',
  '/ansatte/',
  '/tjenester-og-priser/',
  '/skjema/',
  '/praktisk-informasjon/',
  '/personvern/',
];

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL('https://vagsbygdlegesenter.no');
  const urls = routes
    .map((route) => `<url><loc>${new URL(route, origin).toString()}</loc></url>`)
    .join('');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    {
      headers: {
        'Content-Type': 'application/xml',
      },
    },
  );
};
