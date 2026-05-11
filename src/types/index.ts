export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  canonicalURL?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}
