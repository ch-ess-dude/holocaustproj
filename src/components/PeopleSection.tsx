import { perpetrators, victims, rescuers, type Person } from '../data'
import { ScrollReveal } from './ScrollReveal'
import { ImagePlaceholder } from './ImagePlaceholder'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs'

function PersonCard({ person }: { person: Person }) {
  return (
    <ScrollReveal>
      <article
        className="rounded-xl overflow-hidden flex flex-col"
        style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        {/* Portrait image — full width, 3:4 aspect, portrait crop */}
        <ImagePlaceholder
          src={person.imageSrc}
          label={person.imagePlaceholder}
          alt={person.imageAlt}
          aspect="3/4"
          portrait
        />
        <div className="p-5">
          <h3
            className="mb-1"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: '1.2rem',
              color: 'var(--text-primary)',
              lineHeight: 1.2,
            }}
          >
            {person.name}
          </h3>
          <p
            className="mb-3 text-xs"
            style={{ fontFamily: 'var(--font-ui)', color: 'var(--text-muted)', letterSpacing: '0.03em' }}
          >
            {person.role}
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}
          >
            {person.detail}
          </p>
        </div>
      </article>
    </ScrollReveal>
  )
}

function PersonGrid({ people }: { people: Person[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {people.map((p) => (
        <PersonCard key={p.name} person={p} />
      ))}
    </div>
  )
}

export function PeopleSection() {
  return (
    <section
      aria-labelledby="people-heading"
      className="px-4 md:px-6"
      style={{ paddingTop: '96px', paddingBottom: '96px', backgroundColor: 'var(--bg-surface)' }}
    >
      <div style={{ maxWidth: '1100px', marginInline: 'auto' }}>
        <ScrollReveal>
          <div style={{ maxWidth: '68ch', marginBottom: '48px' }}>
            <p
              className="mb-4 text-xs tracking-[0.18em] uppercase"
              style={{ fontFamily: 'var(--font-ui)', color: 'var(--accent)' }}
            >
              People
            </p>
            <h2
              id="people-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                lineHeight: 1.2,
                color: 'var(--text-primary)',
              }}
            >
              Perpetrators, Victims &amp; Rescuers
            </h2>
          </div>
        </ScrollReveal>

        <Tabs defaultValue="victims">
          <TabsList aria-label="Filter people by group">
            <TabsTrigger value="victims">Victims &amp; Survivors</TabsTrigger>
            <TabsTrigger value="rescuers">Resistance &amp; Rescue</TabsTrigger>
            <TabsTrigger value="perpetrators">Perpetrators</TabsTrigger>
          </TabsList>

          <TabsContent value="victims">
            <PersonGrid people={victims} />
          </TabsContent>

          <TabsContent value="rescuers">
            <PersonGrid people={rescuers} />
          </TabsContent>

          <TabsContent value="perpetrators">
            <div
              className="mb-6 rounded-lg px-4 py-3 text-sm"
              style={{
                backgroundColor: 'var(--bg-raised)',
                border: '1px solid var(--border)',
                fontFamily: 'var(--font-ui)',
                color: 'var(--text-muted)',
              }}
              role="note"
            >
              The following individuals are documented here in the interest of historical accuracy.
              They are presented without glorification.
            </div>
            <PersonGrid people={perpetrators} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
