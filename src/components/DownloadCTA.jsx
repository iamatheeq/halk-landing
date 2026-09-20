import { forwardRef } from 'react'
import { Download, Smartphone, HardDrive, Info } from 'lucide-react'
import site from '../data/site.json'

const DownloadCTA = forwardRef(function DownloadCTA(_, ref) {
  const { download, brand } = site

  return (
    <section id="download" ref={ref} className="relative overflow-hidden py-20 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[420px] -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(31,179,103,0.18),transparent)]"
      />
      <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-400">Get the app</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Install {brand.name} on your Android phone.
        </h2>
        <p className="mt-4 text-ink-300">{download.note}</p>

        <a
          href={download.apkUrl}
          download={download.apkFileName}
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-sm font-semibold text-ink-950 shadow-xl shadow-brand-500/25 transition-transform hover:scale-[1.02] hover:bg-brand-400"
        >
          <Download size={18} strokeWidth={2.5} />
          Download {download.apkFileName}
        </a>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-ink-400">
          <span className="inline-flex items-center gap-1.5">
            <HardDrive size={14} /> {download.sizeLabel}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Smartphone size={14} /> {download.minAndroid}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Info size={14} /> v{download.version}
          </span>
        </div>

        <ol className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-4 text-left sm:grid-cols-2">
          {download.steps.map((step, i) => (
            <li
              key={step}
              className="flex gap-3 rounded-xl border border-white/8 bg-white/[0.03] p-4 text-sm text-ink-300"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-xs font-semibold text-brand-300">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
})

export default DownloadCTA
