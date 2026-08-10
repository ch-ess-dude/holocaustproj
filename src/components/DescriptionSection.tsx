import { ScrollReveal } from './ScrollReveal'

export function DescriptionSection() {
  return (
    <section
      aria-labelledby="description-heading"
      className="px-6"
      style={{ paddingTop: '96px', paddingBottom: '96px' }}
    >
      <div style={{ maxWidth: '68ch', marginInline: 'auto' }}>
        <ScrollReveal>
          <p
            className="mb-4 text-xs tracking-[0.18em] uppercase"
            style={{ fontFamily: 'var(--font-ui)', color: 'var(--accent)' }}
          >
            Overview
          </p>
          <h2
            id="description-heading"
            className="mb-8"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
              lineHeight: 1.2,
              color: 'var(--text-primary)',
            }}
          >
            What was the Holocaust?
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.85 }}>
            The Holocaust was the systematic, state-sponsored persecution and murder of six million
            Jews by Nazi Germany and its collaborators between 1941 and 1945. Millions of other
            people were also murdered - among them Roma, people with disabilities, Soviet prisoners
            of war, Polish civilians, political dissidents, and others the regime deemed
            "undesirable." It is the most thoroughly documented genocide in history, and
            remembering it is the purpose of this project.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
