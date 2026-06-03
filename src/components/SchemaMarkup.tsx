import React from 'react';

interface SchemaProps {
  type: 'Organization' | 'ProfessionalService' | 'WebSite' | 'ContactPage' | 'BreadcrumbList';
  breadcrumbs?: { name: string; item: string }[];
}

export default function SchemaMarkup({ type, breadcrumbs }: SchemaProps) {
  const baseUrl = 'https://rytinweb.in';

  let schemaData: any = null;

  if (type === 'Organization') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      'name': 'RYTINWEB',
      'url': baseUrl,
      'logo': `${baseUrl}/logos/logo.png`,
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+91-9891321840',
        'contactType': 'customer service',
        'areaServed': 'IN',
        'availableLanguage': 'en'
      },
      'sameAs': [
        'https://instagram.com/rytinweb',
        'https://twitter.com/rytinweb',
        'https://linkedin.com/company/rytinweb'
      ]
    };
  } else if (type === 'ProfessionalService') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': `${baseUrl}/#professionalservice`,
      'name': 'RYTINWEB',
      'image': `${baseUrl}/logos/icon.png`,
      'url': baseUrl,
      'telephone': '+919891321840',
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Delhi',
        'addressRegion': 'DL',
        'addressCountry': 'IN'
      },
      'areaServed': [
        { '@type': 'AdministrativeArea', 'name': 'Delhi' },
        { '@type': 'AdministrativeArea', 'name': 'Delhi NCR' },
        { '@type': 'AdministrativeArea', 'name': 'Noida' },
        { '@type': 'AdministrativeArea', 'name': 'Gurugram' },
        { '@type': 'AdministrativeArea', 'name': 'India' }
      ]
    };
  } else if (type === 'WebSite') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      'name': 'RYTINWEB',
      'url': baseUrl,
      'potentialAction': {
        '@type': 'SearchAction',
        'target': `${baseUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    };
  } else if (type === 'ContactPage') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      '@id': `${baseUrl}/contact/#webpage`,
      'url': `${baseUrl}/contact`,
      'name': 'Contact RYTINWEB | Web Development Agency Delhi',
      'description': 'Contact RYTINWEB, Delhi\'s leading remote-first web design & development agency.',
      'mainEntity': {
        '@type': 'ProfessionalService',
        'name': 'RYTINWEB',
        'telephone': '+919891321840',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Delhi',
          'addressRegion': 'DL',
          'addressCountry': 'IN'
        }
      }
    };
  } else if (type === 'BreadcrumbList' && breadcrumbs) {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbs.map((b, i) => ({
        '@type': 'ListItem',
        'position': i + 1,
        'name': b.name,
        'item': `${baseUrl}${b.item}`
      }))
    };
  }

  if (!schemaData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
