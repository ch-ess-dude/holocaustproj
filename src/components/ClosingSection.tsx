import { ScrollReveal } from './ScrollReveal'

export function ClosingSection() {
  return (
    <section
      aria-labelledby="closing-heading"
      className="px-6"
      style={{ paddingTop: '96px', paddingBottom: '64px' }}
    >
      <div style={{ maxWidth: '68ch', marginInline: 'auto', textAlign: 'center' }}>
        <ScrollReveal>
          {/* Thin rule */}
          <span
            aria-hidden="true"
            style={{
              display: 'block',
              width: '48px',
              height: '1px',
              backgroundColor: 'var(--accent)',
              margin: '0 auto 48px',
            }}
          />

          <h2
            id="closing-heading"
            className="mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              lineHeight: 1.25,
              color: 'var(--text-primary)',
            }}
          >
            "To forget the dead would be akin to killing them a second time."
          </h2>

          <p
            className="mb-16 text-sm"
            style={{ fontFamily: 'var(--font-ui)', color: 'var(--text-muted)', letterSpacing: '0.05em' }}
          >
            - Elie Wiesel
          </p>

          <p
            className="text-sm leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}
          >
            The Holocaust ended in 1945. The obligation to remember it did not. Yom HaShoah - Holocaust
            Remembrance Day - is observed each year. The United Nations designated 27 January,
            the date of the liberation of Auschwitz, as International Holocaust Remembrance Day in
            2005. Museums, memorials, and survivor testimonies continue to preserve what was done
            so that it can never be denied, minimised, or forgotten.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
