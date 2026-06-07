import { StickyNav } from './components/StickyNav'
import { HeroSection } from './components/HeroSection'
import { DescriptionSection } from './components/DescriptionSection'
import { TimelineSection } from './components/TimelineSection'
import { PeopleSection } from './components/PeopleSection'
import { LiterarySection } from './components/LiterarySection'
import { ClosingSection } from './components/ClosingSection'
import { Footer } from './components/Footer'

const divider = (
  <hr
    aria-hidden="true"
    style={{ border: 'none', borderTop: '1px solid var(--border)', margin: 0 }}
  />
)

export default function App() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100svh' }}>
      <StickyNav />

      <main>
        <HeroSection />
        {divider}

        <section id="overview">
          <DescriptionSection />
        </section>
        {divider}

        <section id="timeline">
          <TimelineSection />
        </section>
        {divider}

        <section id="people">
          <PeopleSection />
        </section>
        {divider}

        <LiterarySection />
        {divider}

        <section id="remember">
          <ClosingSection />
        </section>
      </main>

      <Footer />
    </div>
  )
}
