import { useEffect, useState } from 'react'

const CACHE_KEY = 'halk_geo_v1'
const currencyByCountry = {
  IN: { currency: '₹', name: 'India' },
  US: { currency: '$', name: 'the United States' },
  GB: { currency: '£', name: 'the United Kingdom' },
  AE: { currency: 'AED', name: 'the UAE' },
  CA: { currency: '$', name: 'Canada' },
  AU: { currency: '$', name: 'Australia' },
  SG: { currency: 'S$', name: 'Singapore' },
}

/**
 * Detects the visitor's approximate country via a free IP geolocation API
 * and derives locale-flavoured content (currency symbol, country name).
 * Falls back silently to the site defaults on any failure (offline, blocked, rate-limited).
 */
export function useGeo(defaults) {
  const [geo, setGeo] = useState(() => {
    try {
      const cached = sessionStorage.getItem(CACHE_KEY)
      if (cached) return JSON.parse(cached)
    } catch {
      /* sessionStorage unavailable */
    }
    return { country: null, countryCode: null, currency: defaults.defaultCurrency, ready: false }
  })

  useEffect(() => {
    if (geo.ready) return
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 4000)

    fetch('https://ipapi.co/json/', { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data) => {
        const code = data?.country_code
        const known = code ? currencyByCountry[code] : null
        const next = {
          country: known?.name || data?.country_name || defaults.defaultCountry,
          countryCode: code || null,
          currency: known?.currency || defaults.defaultCurrency,
          ready: true,
        }
        setGeo(next)
        try {
          sessionStorage.setItem(CACHE_KEY, JSON.stringify(next))
        } catch {
          /* sessionStorage unavailable */
        }
      })
      .catch(() => {
        setGeo((prev) => ({ ...prev, ready: true }))
      })
      .finally(() => clearTimeout(timeout))

    return () => {
      controller.abort()
      clearTimeout(timeout)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return geo
}
