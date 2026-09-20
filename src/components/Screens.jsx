import site from '../data/site.json'

export default function Screens() {
  return (
    <section id="screens" className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-400">Inside the app</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          A closer look at HALK.
        </h2>
      </div>

      <div className="mt-14 flex snap-x gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {site.screens.map((s) => (
          <figure
            key={s.image}
            className="w-56 shrink-0 snap-start sm:w-64"
          >
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-ink-900/60 shadow-xl shadow-black/30">
              <img src={s.image} alt={s.title} loading="lazy" className="w-full" />
            </div>
            <figcaption className="mt-3 px-1">
              <p className="text-sm font-medium text-white">{s.title}</p>
              <p className="mt-1 text-xs text-ink-400">{s.description}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
