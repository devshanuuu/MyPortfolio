const links = [
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-ink/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-fg"
        >
          shanu<span className="text-accent">.</span>thakur
        </a>
        <nav className="flex items-center gap-5 sm:gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-fg focus-visible:text-accent focus-visible:outline-none"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
