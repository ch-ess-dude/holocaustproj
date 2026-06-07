import { useState, useEffect } from 'react'

const links = [
  { label: 'Overview', href: '#overview' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'People', href: '#people' },
  { label: 'Literature', href: '#literary' },
  { label: 'Remember', href: '#remember' },
]

export function StickyNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      aria-label="Page sections"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'oklch(13% 0.006 80 / 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div
        className="flex items-center justify-between px-6"
        style={{ maxWidth: '1100px', marginInline: 'auto', height: '52px' }}
      >
        <span
          className="text-xs tracking-[0.15em] uppercase"
          style={{ fontFamily: 'var(--font-ui)', color: 'var(--text-muted)' }}
        >
          The Holocaust
        </span>
        <ul className="hidden md:flex items-center gap-6" role="list">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs tracking-[0.1em] uppercase transition-colors duration-200"
                style={{
                  fontFamily: 'var(--font-ui)',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--text-muted)')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
