const SITE_NAME = 'Solmed';
const DEFAULT_OG_IMAGE = '/images/og-default.jpg';

export function buildTitle(pageTitle?: string): string {
  if (!pageTitle) return SITE_NAME;
  return `${pageTitle} | ${SITE_NAME}`;
}

export function buildCanonicalURL(pathname: string, site?: URL | string): string {
  const base = site?.toString().replace(/\/$/, '') ?? '';
  return `${base}${pathname}`;
}

export { SITE_NAME, DEFAULT_OG_IMAGE };
