export const SITE_DOMAIN = 'abubakartechnical.com';
export const SITE_URL = `https://${SITE_DOMAIN}`;
export const SITE_NAME = 'Abubakar And Waleed Technical Services';
export const LEGAL_NAME = 'Abubakar And Waleed Technical Services LLC';
export const SOCIAL_IMAGE_URL = `${SITE_URL}/Images/social_banner.png`;

export function absoluteUrl(path = '/') {
  if (!path || path === '/') {
    return `${SITE_URL}/`;
  }

  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
