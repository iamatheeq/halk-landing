import { useEffect, useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import site from '../data/site.json'

export default function Navbar({ onDownloadClick }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink-950/85 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={site.brand.logo} alt={`${site.brand.name} logo`} className="h-9 w-9 rounded-xl" />
          <span className="text-lg font-semibold tracking-tight text-white">{site.brand.name}</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-300 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          onClick={onDownloadClick}
          className="hidden items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-ink-950 shadow-lg shadow-brand-500/20 transition-transform hover:scale-[1.03] hover:bg-brand-400 md:inline-flex"
        >
          <Download size={16} strokeWidth={2.5} />
          Download APK
        </button>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-ink-950 px-5 pb-6 md:hidden">
          <div className="flex flex-col gap-1 pt-3">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-200 hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false)
                onDownloadClick()
              }}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-ink-950"
            >
              <Download size={16} strokeWidth={2.5} />
              Download APK
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
