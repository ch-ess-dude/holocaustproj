export function Footer() {
  return (
    <footer
      className="px-6"
      style={{
        paddingTop: '48px',
        paddingBottom: '64px',
        borderTop: '1px solid var(--border)',
      }}
      role="contentinfo"
    >
      <div style={{ maxWidth: '1100px', marginInline: 'auto' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p
              className="mb-3 text-xs tracking-[0.15em] uppercase"
              style={{ fontFamily: 'var(--font-ui)', color: 'var(--accent)' }}
            >
              Key Sources
            </p>
            <ul className="flex flex-col gap-2">
              {[
                'United States Holocaust Memorial Museum (ushmm.org)',
                'Yad Vashem — The World Holocaust Remembrance Center (yadvashem.org)',
                'Holocaust Encyclopedia (encyclopedia.ushmm.org)',
                'Bundesarchiv (bundesarchiv.de)',
                'House of the Wannsee Conference (ghwk.de)',
                'Elie Wiesel — Night (Hill & Wang, 1960)',
                'Primo Levi — If This Is a Man (Einaudi, 1947)',
              ].map((s) => (
                <li
                  key={s}
                  className="text-xs"
                  style={{ fontFamily: 'var(--font-ui)', color: 'var(--text-muted)', lineHeight: 1.6 }}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              className="mb-3 text-xs tracking-[0.15em] uppercase"
              style={{ fontFamily: 'var(--font-ui)', color: 'var(--accent)' }}
            >
              Image Sources (TBD)
            </p>
            <p className="text-xs" style={{ fontFamily: 'var(--font-ui)', color: 'var(--text-muted)', lineHeight: 1.75 }}>
              All image slots are to be filled from public-domain or properly licensed archives.
              See <code style={{ fontFamily: 'inherit', color: 'var(--text-secondary)' }}>IMAGES.md</code> for
              per-slot recommendations with attribution captions.
            </p>
          </div>

          <div>
            <p
              className="mb-3 text-xs tracking-[0.15em] uppercase"
              style={{ fontFamily: 'var(--font-ui)', color: 'var(--accent)' }}
            >
              Credits
            </p>
            <p className="text-xs" style={{ fontFamily: 'var(--font-ui)', color: 'var(--text-muted)', lineHeight: 1.75 }}>
              Aayaan Sultan · Nairit · Oushnik · Abhradeep
            </p>
            <p className="mt-3 text-xs" style={{ fontFamily: 'var(--font-ui)', color: 'var(--text-muted)', lineHeight: 1.75 }}>
              All factual claims are drawn from peer-reviewed scholarship and major Holocaust
              research institutions. Please verify before final submission.
            </p>
          </div>
        </div>

        <p
          className="mt-12 text-xs"
          style={{ fontFamily: 'var(--font-ui)', color: 'var(--text-muted)', opacity: 0.5 }}
        >
          This project was created for educational purposes. No commercial use.
        </p>
      </div>
    </footer>
  )
}
