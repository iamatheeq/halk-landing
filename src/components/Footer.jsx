import { Link } from 'react-router-dom'
import site from '../data/site.json'

export default function Footer() {
  const { brand, footer } = site
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center lg:px-8">
        <div className="flex items-center gap-2.5">
          <img src={brand.logo} alt="" className="h-8 w-8 rounded-lg" />
          <span className="text-base font-semibold text-white">{brand.name}</span>
        </div>
        <p className="max-w-sm text-sm text-ink-400">{footer.tagline}</p>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-300">
          {footer.links.map((link) => (
            <Link key={link.href} to={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>

        <p className="text-xs text-ink-500">
          &copy; {new Date().getFullYear()} {brand.name}. {footer.developer && (
            <>
              Built by{' '}
              <a
                href={footer.developerUrl}
                target="_blank"
                rel="noreferrer"
                className="text-ink-400 hover:text-white"
              >
                {footer.developer.replace('Built by ', '')}
              </a>
              .
            </>
          )}
        </p>
      </div>
    </footer>
  )
}
