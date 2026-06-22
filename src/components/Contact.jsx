import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { profile } from '../data'

const iconLink =
  'inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-muted transition-colors hover:border-accent/50 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink'

export default function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <SectionHeading eyebrow="Contact" title="Let’s build something" />

        <p className="max-w-md leading-relaxed text-muted">
          Open to frontend and full-stack roles. The fastest way to reach me is
          email.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="group mt-6 inline-flex items-center gap-2 text-xl font-medium text-heading transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none sm:text-2xl"
        >
          {profile.email}
          <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <div className="mt-8 flex items-center gap-3">
          <a
            aria-label="GitHub"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className={iconLink}
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            aria-label="LinkedIn"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className={iconLink}
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            aria-label="Email"
            href={`mailto:${profile.email}`}
            className={iconLink}
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
