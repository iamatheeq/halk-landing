import site from '../data/site.json'
import { iconMap } from '../lib/icons'

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-400">Why HALK</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Everything a household budget needs, none of the data risk.
        </h2>
        <p className="mt-4 text-ink-300">
          HALK combines a full budgeting toolkit with a strict on-device-only architecture.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {site.features.map((f) => {
          const Icon = iconMap[f.icon]
          return (
            <div
              key={f.title}
              className="group rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition-colors hover:border-brand-500/30 hover:bg-white/[0.05]"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400">
                {Icon && <Icon size={20} strokeWidth={2} />}
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-400">{f.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
