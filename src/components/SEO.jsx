import { Helmet } from 'react-helmet-async'
import site from '../data/site.json'

/**
 * Renders per-page meta tags dynamically from site.json content plus
 * optional geo data, so title/description/canonical/geo meta all vary
 * by page and by visitor without any static duplication in index.html.
 */
export default function SEO({ title, description, path = '/', geo, noindex = false }) {
  const { seo, geo: geoDefaults } = site
  const pageTitle = title ? seo.titleTemplate.replace('%s', title) : seo.defaultTitle
  const pageDescription = description || seo.description
  const canonical = `${seo.siteUrl}${path === '/' ? '' : path}`
  const region = geo?.countryCode ? `${geo.countryCode}` : geoDefaults.region
  const placename = geo?.country || geoDefaults.placename

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={seo.keywords.join(', ')} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="theme-color" content={seo.themeColor} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${seo.siteUrl}${seo.ogImage}`} />
      <meta property="og:locale" content={seo.locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={seo.twitterHandle} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={`${seo.siteUrl}${seo.ogImage}`} />

      {/* Geo targeting — adapts to the visitor's detected region when available */}
      <meta name="geo.region" content={region} />
      <meta name="geo.placename" content={placename} />
      <meta name="geo.position" content={geoDefaults.position} />
      <meta name="ICBM" content={geoDefaults.icbm} />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'MobileApplication',
          name: site.brand.name,
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'Android',
          description: seo.description,
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          url: seo.siteUrl,
        })}
      </script>
    </Helmet>
  )
}
