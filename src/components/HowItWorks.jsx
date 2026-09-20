import site from '../data/site.json'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-white/5 bg-white/[0.02] py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-400">How it works</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            From install to in-control in four steps.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {site.howItWorks.map((step, i) => (
            <div key={step.step} className="relative">
              <div className="text-4xl font-bold text-white/10">{step.step}</div>
              <h3 className="mt-2 text-base font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-400">{step.description}</p>
              {i < site.howItWorks.length - 1 && (
                <div className="mt-6 hidden h-px w-full bg-gradient-to-r from-white/10 to-transparent lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
