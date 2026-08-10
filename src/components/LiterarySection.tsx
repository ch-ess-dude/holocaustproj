import { ScrollReveal } from './ScrollReveal'

interface Book {
  title: string
  author: string
  year: string
  genre: string
  synopsis: string
  significance: string
}

const books: Book[] = [
  {
    title: 'The Diary of a Young Girl',
    author: 'Anne Frank',
    year: '1947',
    genre: 'Diary / Memoir',
    synopsis:
      'Written between 1942 and 1944 while Anne Frank and her family hid in a concealed annex in Amsterdam, the diary records her inner life - her hopes, frustrations, and observations - with striking literary intelligence. It ends abruptly when the family was discovered and arrested.',
    significance:
      'The most widely read personal account of the Holocaust. It brings the abstract scale of genocide to a single human voice, making it essential reading in classrooms worldwide. Its power lies in what Anne does not know: the reader reads knowing she will not survive.',
  },
  {
    title: 'Night (La Nuit)',
    author: 'Elie Wiesel',
    year: '1956 (English: 1960)',
    genre: 'Memoir',
    synopsis:
      'Night recounts Wiesel\'s deportation from Romania to Auschwitz and Buchenwald as a fifteen-year-old, and his struggle to survive alongside his father. Written in spare, stripped-down prose, it narrates the systematic destruction of his faith, family, and sense of self.',
    significance:
      'Wiesel described Night as a "deposition" - legal testimony as literature. Its stylistic restraint is deliberate: ornate language would falsify the experience. It is one of the founding texts of Holocaust literature and directly influenced how the world discusses bearing witness.',
  },
  {
    title: 'If This Is a Man (Se questo è un uomo)',
    author: 'Primo Levi',
    year: '1947',
    genre: 'Memoir / Essay',
    synopsis:
      'Levi, a trained chemist, applies a scientist\'s precision to his account of Auschwitz. The book examines the camp as a system - its social hierarchies, its language, its logic - while never losing sight of the individuals within it. The title comes from an opening poem questioning what humanity means after such events.',
    significance:
      'Where Night operates through grief and faith, Levi operates through analysis. Together they represent two essential modes of Holocaust testimony: the witness who mourns and the witness who examines. Levi\'s concept of the "grey zone" - the moral ambiguity forced on prisoners - remains one of literature\'s most important ethical contributions.',
  },
]

export function LiterarySection() {
  return (
    <section
      id="literary"
      aria-labelledby="literary-heading"
      className="px-4 md:px-6"
      style={{ paddingTop: '96px', paddingBottom: '96px' }}
    >
      <div style={{ maxWidth: '1100px', marginInline: 'auto' }}>
        <ScrollReveal>
          <div style={{ maxWidth: '68ch', marginBottom: '48px' }}>
            <p
              className="mb-4 text-xs tracking-[0.18em] uppercase"
              style={{ fontFamily: 'var(--font-ui)', color: 'var(--accent)' }}
            >
              Literature
            </p>
            <h2
              id="literary-heading"
              className="mb-4"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                lineHeight: 1.2,
                color: 'var(--text-primary)',
              }}
            >
              Key Literary Testimonies
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8 }}>
              The Holocaust produced a body of literature unlike any other. These three works are among
              the most important - each a different register of testimony, each indispensable to
              understanding not only what happened, but how language attempts to hold it.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {books.map((book, i) => (
            <ScrollReveal key={book.title} delay={i * 0.08}>
              <article
                className="rounded-xl h-full flex flex-col"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-sm)',
                  overflow: 'hidden',
                }}
              >
                {/* Coloured top band - a quiet accent, not garish */}
                <div style={{ height: '3px', backgroundColor: 'var(--accent-muted)' }} aria-hidden="true" />

                <div className="p-6 flex flex-col gap-4 flex-1">
                  {/* Genre badge */}
                  <span
                    className="inline-block self-start rounded-full px-3 py-1 text-xs"
                    style={{
                      fontFamily: 'var(--font-ui)',
                      color: 'var(--text-muted)',
                      backgroundColor: 'var(--bg-raised)',
                      border: '1px solid var(--border)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {book.genre}
                  </span>

                  <div>
                    <h3
                      className="mb-1"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 500,
                        fontSize: '1.3rem',
                        fontStyle: 'italic',
                        lineHeight: 1.2,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {book.title}
                    </h3>
                    <p
                      className="text-xs"
                      style={{ fontFamily: 'var(--font-ui)', color: 'var(--text-muted)', letterSpacing: '0.04em' }}
                    >
                      {book.author} - {book.year}
                    </p>
                  </div>

                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}
                  >
                    {book.synopsis}
                  </p>

                  {/* Thin rule */}
                  <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '4px 0' }} aria-hidden="true" />

                  <div>
                    <p
                      className="mb-1 text-xs tracking-[0.12em] uppercase"
                      style={{ fontFamily: 'var(--font-ui)', color: 'var(--accent)' }}
                    >
                      Why it matters
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', fontStyle: 'italic' }}
                    >
                      {book.significance}
                    </p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
