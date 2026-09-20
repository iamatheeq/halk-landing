import { Download, PlayCircle, ShieldCheck } from "lucide-react";
import site from "../data/site.json";

export default function Hero({ onDownloadClick, geo }) {
  const { hero, brand } = site;

  const locationNote = geo?.country
    ? `Trusted by households in ${geo.country}`
    : hero.eyebrow;

  return (
    <section id="top" className="relative pt-16 pb-10 md:pt-24">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[560px] bg-[radial-gradient(closest-side,rgba(31,179,103,0.25),transparent)]"
      />

      <div className="mx-auto grid max-w-6xl items-start gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8">

        {/* =========================
            LEFT — STICKY
        ========================== */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="animate-fade-up">

            {/* Location / Trust */}
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-medium text-brand-300">
              <ShieldCheck size={14} />
              {locationNote}
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
              {hero.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg">
              {hero.subtitle}
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={onDownloadClick}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-xl shadow-brand-500/25 transition-transform hover:scale-[1.02] hover:bg-brand-400"
              >
                <Download size={18} strokeWidth={2.5} />
                {hero.primaryCta.label}
              </button>

              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                <PlayCircle size={18} />
                {hero.secondaryCta.label}
              </a>
            </div>

            {/* Stats */}
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>

                  <dd className="text-2xl font-semibold text-white">
                    {stat.value}
                  </dd>

                  <dd className="mt-1 text-xs text-ink-400">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>

          </div>
        </div>

        {/* =========================
            RIGHT — NORMAL CONTENT
        ========================== */}
        <div className="relative mx-auto w-full max-w-sm animate-fade-up [animation-delay:150ms]">

          {/* Glow */}
          <div
            aria-hidden
            className="absolute -inset-8 -z-10 rounded-[3rem] bg-brand-500/10 blur-3xl"
          />

          {/* App Screenshot */}
          <div className="animate-float rounded-[2.5rem] border border-white/10 bg-ink-900/60 p-2 shadow-2xl shadow-black/40 backdrop-blur">
            <img
              src={hero.image}
              alt={`${brand.name} app dashboard screenshot`}
              className="block w-full rounded-3xl"
              width={540}
              height={1112}
              loading="eager"
            />
          </div>

        </div>
      </div>
    </section>
  );
}