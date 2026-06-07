import { useRef, useState } from 'react'
import { motion, useInView, useReducedMotion, type Transition } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]
import { timelineEntries } from '../data'
import { ImagePlaceholder } from './ImagePlaceholder'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'

function TimelineCard({
  entry,
  side,
  index,
}: {
  entry: (typeof timelineEntries)[0]
  side: 'left' | 'right'
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const reduced = useReducedMotion()
  const [imgOpen, setImgOpen] = useState(false)

  const animateProps = reduced
    ? {}
    : {
        initial: { opacity: 0, x: side === 'left' ? -32 : 32, y: 8 },
        animate: inView ? { opacity: 1, x: 0, y: 0 } : {},
        transition: { duration: 0.6, ease: EASE, delay: 0.05 * (index % 3) } as Transition,
      }

  const card = (
    <motion.article
      ref={ref}
      {...animateProps}
      className="rounded-xl p-5 md:p-6"
      style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-md)',
      }}
      whileHover={reduced ? {} : { y: -4, boxShadow: '0 12px 40px oklch(8% 0.006 80 / 0.85)' }}
      aria-label={`${entry.year}: ${entry.title}`}
    >
      <p
        className="mb-1 text-2xl font-semibold tabular-nums"
        style={{ fontFamily: 'var(--font-ui)', color: 'var(--accent)' }}
      >
        {entry.year}
      </p>
      <h3
        className="mb-3"
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 500,
          fontSize: '1.35rem',
          lineHeight: 1.2,
          color: 'var(--text-primary)',
        }}
      >
        {entry.title}
      </h3>
      <p className="mb-5 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}>
        {entry.detail}
      </p>

      {/* Mobile: tap to open dialog. Desktop: just show image. */}
      <div className="md:hidden">
        <Dialog open={imgOpen} onOpenChange={setImgOpen}>
          <DialogTrigger asChild>
            <button
              className="w-full text-left"
              style={{ minHeight: '44px' }}
              aria-label={`View larger image: ${entry.imageAlt}`}
            >
              <ImagePlaceholder
                src={entry.imageSrc}
                label={entry.imagePlaceholder}
                caption={entry.imageCaption}
                alt={entry.imageAlt}
                aspect="16/9"
              />
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{entry.title}</DialogTitle>
            </DialogHeader>
            <ImagePlaceholder
              src={entry.imageSrc}
              label={entry.imagePlaceholder}
              caption={entry.imageCaption}
              alt={entry.imageAlt}
              aspect="16/9"
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="hidden md:block">
        <ImagePlaceholder
          src={entry.imageSrc}
          label={entry.imagePlaceholder}
          caption={entry.imageCaption}
          alt={entry.imageAlt}
          aspect="16/9"
        />
      </div>
    </motion.article>
  )

  return card
}

export function TimelineSection() {
  return (
    <section
      aria-labelledby="timeline-heading"
      className="px-4 md:px-6"
      style={{ paddingTop: '96px', paddingBottom: '96px' }}
    >
      <div style={{ maxWidth: '68ch', marginInline: 'auto', marginBottom: '64px' }}>
        <p
          className="mb-4 text-xs tracking-[0.18em] uppercase"
          style={{ fontFamily: 'var(--font-ui)', color: 'var(--accent)' }}
        >
          Timeline
        </p>
        <h2
          id="timeline-heading"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
            lineHeight: 1.2,
            color: 'var(--text-primary)',
          }}
        >
          Key Events, 1933–1946
        </h2>
      </div>

      {/* Mobile layout: single column */}
      <div className="md:hidden" style={{ maxWidth: '600px', marginInline: 'auto' }}>
        <div className="relative pl-8">
          {/* Spine */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 bottom-0 w-px"
            style={{ backgroundColor: 'var(--accent)' }}
          />
          <div className="flex flex-col gap-10">
            {timelineEntries.map((entry, i) => (
              <div key={entry.year} className="relative">
                {/* Dot on spine */}
                <div
                  aria-hidden="true"
                  className="absolute -left-10 top-4 w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: 'var(--accent)', border: '2px solid var(--bg)' }}
                />
                <TimelineCard entry={entry} side="left" index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop layout: alternating left/right */}
      <div className="hidden md:block" style={{ maxWidth: '1000px', marginInline: 'auto' }}>
        <div className="relative">
          {/* Vertical spine */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ backgroundColor: 'var(--accent)' }}
          />

          <div className="flex flex-col gap-12">
            {timelineEntries.map((entry, i) => {
              const side = i % 2 === 0 ? 'left' : 'right'
              return (
                <div key={entry.year} className="grid grid-cols-2 gap-12 relative">
                  {/* Dot on spine */}
                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-6 w-3 h-3 rounded-full -translate-x-1/2"
                    style={{ backgroundColor: 'var(--accent)', border: '2px solid var(--bg)', zIndex: 1 }}
                  />
                  {side === 'left' ? (
                    <>
                      <TimelineCard entry={entry} side="left" index={i} />
                      <div />
                    </>
                  ) : (
                    <>
                      <div />
                      <TimelineCard entry={entry} side="right" index={i} />
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
