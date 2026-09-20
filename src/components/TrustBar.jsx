import { Check } from 'lucide-react'
import site from '../data/site.json'

export default function TrustBar() {
  return (
    <section className="border-y border-white/5 bg-white/[0.02] py-6">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 lg:px-8">
        {site.trust.map((t) => (
          <div key={t} className="flex items-center gap-2 text-sm text-ink-300">
            <Check size={15} className="text-brand-400" />
            {t}
          </div>
        ))}
      </div>
    </section>
  )
}
