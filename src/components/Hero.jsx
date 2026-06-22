import { ArrowUpRight, Mail } from 'lucide-react'
import { profile } from '../data'

export default function Hero() {
  return (
    <section id="top" className="border-b border-line/60">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1 font-mono text-xs text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Available for work · {profile.location}
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-heading sm:text-6xl">
          {profile.name}
        </h1>

        <p className="mt-4 text-lg text-muted sm:text-xl">{profile.title}</p>

        <p className="mt-6 max-w-xl leading-relaxed text-muted">
          {profile.summary}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-accent-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            View work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-faint hover:bg-panel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            <Mail className="h-4 w-4" />
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
