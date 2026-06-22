export default function Footer() {
  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-2 px-6 py-8 text-xs text-faint sm:flex-row">
        <span>© {new Date().getFullYear()} Shanu Thakur</span>
        <span className="font-mono">Built with React + Tailwind</span>
      </div>
    </footer>
  )
}
