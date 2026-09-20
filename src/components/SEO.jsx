import { Helmet } from 'react-helmet-async'
import site from '../data/site.json'

/**
 * Dynamic SEO + Generative Engine Optimization (GEO).
 *
 * - Title / description / canonical / robots per page
 * - Open Graph + Twitter cards
 * - Geo meta that adapts to the visitor when useGeo() has data
 * - Rich JSON-LD (SoftwareApplication, FAQPage, Organization, WebSite)
 *   so AI overviews, Perplexity, ChatGPT search, and classic crawlers
 *   get structured, trustworthy facts about HALK.
 */
export default function SEO({ title, description, path = '/', geo, noindex = false }) {
  const { seo, geo: geoDefaults, brand, faq = [], download } = site
  const pageTitle = title ? seo.titleTemplate.replace('%s', title) : seo.defaultTitle
  const pageDescription = description || seo.description
  const canonical = `${seo.siteUrl}${path === '/' ? '' : path}`
  const region = geo?.countryCode ? geo.countryCode : geoDefaults.region
  const placename = geo?.country || geoDefaults.placename
  const ogImage = `${seo.siteUrl}${seo.ogImage}`

  const softwareAppLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: brand.name,
    alternateName: brand.fullName,
    applicationCategory: 'FinanceApplication',
    applicationSubCategory: 'Budgeting',
    operatingSystem: 'Android',
    softwareVersion: brand.version || download?.version || '1.0.0',
    description: seo.description,
    url: seo.siteUrl,
    downloadUrl: download?.apkUrl?.startsWith('http')
      ? download.apkUrl
      : `${seo.siteUrl}${download?.apkUrl || '/downloads/HALK.apk'}`,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    author: {
      '@type': 'Person',
      name: site.footer?.developer?.replace(/^Built by\s+/i, '') || 'Atheequr Rahman',
      url: site.footer?.developerUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: brand.name,
      url: seo.siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: ogImage,
      },
    },
    image: ogImage,
    keywords: seo.keywords?.join(', '),
    inLanguage: seo.locale?.replace('_', '-') || 'en-IN',
    isAccessibleForFree: true,
    featureList: [
      '100% on-device storage',
      'Encrypted local database',
      'No bank login required',
      'Offline-first',
      'Biometric lock',
      'Local data export',
    ],
  }

  const faqLd =
    path === '/' && faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faq.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.a,
            },
          })),
        }
      : null

  const websiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: brand.name,
    alternateName: brand.fullName,
    url: seo.siteUrl,
    description: seo.description,
    inLanguage: seo.locale?.replace('_', '-') || 'en-IN',
    publisher: {
      '@type': 'Organization',
      name: brand.name,
      url: seo.siteUrl,
    },
  }

  const organizationLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: brand.name,
    url: seo.siteUrl,
    logo: ogImage,
    description: seo.description,
    sameAs: seo.twitterHandle ? [`https://twitter.com/${seo.twitterHandle.replace('@', '')}`] : [],
  }

  const jsonLdBlocks = [softwareAppLd, websiteLd, organizationLd]
  if (faqLd) jsonLdBlocks.push(faqLd)

  return (
    <Helmet>
      <html lang={seo.locale?.split('_')[0] || 'en'} />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={seo.keywords.join(', ')} />
      <link rel="canonical" href={canonical} />
      <meta
        name="robots"
        content={
          noindex
            ? 'noindex,nofollow'
            : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'
        }
      />
      <meta name="googlebot" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="theme-color" content={seo.themeColor} />
      <meta name="color-scheme" content="dark" />
      <meta name="author" content={brand.name} />
      <meta name="application-name" content={brand.name} />
      <meta name="apple-mobile-web-app-title" content={brand.name} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={brand.name} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={`${brand.name} — ${brand.tagline}`} />
      <meta property="og:locale" content={seo.locale} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={seo.twitterHandle} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Geo targeting — adapts when visitor geo is known */}
      <meta name="geo.region" content={region} />
      <meta name="geo.placename" content={placename} />
      <meta name="geo.position" content={geoDefaults.position} />
      <meta name="ICBM" content={geoDefaults.icbm} />

      {/* Helpful for generative engines / AI crawlers */}
      <meta name="format-detection" content="telephone=no" />
      <link rel="alternate" hrefLang={seo.locale?.replace('_', '-') || 'en-IN'} href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={seo.siteUrl} />

      {jsonLdBlocks.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  )
}
