import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import site from '../data/site.json'

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/8 py-5">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-white sm:text-base">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-ink-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && <p className="mt-3 text-sm leading-relaxed text-ink-400">{a}</p>}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="border-t border-white/5 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-400">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Questions, answered.
          </h2>
        </div>

        <div className="mt-10">
          {site.faq.map((item) => (
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
