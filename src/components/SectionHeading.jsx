export default function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-10">
      <div className="mb-3 flex items-center gap-3">
        <span className="h-px w-6 bg-accent" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-2xl font-semibold tracking-tight text-heading sm:text-3xl">
        {title}
      </h2>
    </div>
  )
}
