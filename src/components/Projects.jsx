import { ArrowUpRight, Github } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="border-b border-line/60">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <SectionHeading eyebrow="Selected work" title="Projects" />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <article
             key={p.title}
             onClick={() => window.open(p.live, '_blank')}
             className="cursor-pointer flex flex-col rounded-xl border border-line bg-panel p-6 transition-colors hover:border-faint hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-heading">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {p.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded border border-line bg-ink px-2 py-1 font-mono text-xs text-muted"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-center gap-5 border-t border-line pt-4">
                <a
                 href={p.live}
                 target="_blank"
                 rel="noreferrer"
                 onClick={(e) => e.stopPropagation()}
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none"
                >
                  Live
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                 href={p.github}
                 target="_blank"
                 rel="noreferrer"
                 onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg focus-visible:text-fg focus-visible:outline-none"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
