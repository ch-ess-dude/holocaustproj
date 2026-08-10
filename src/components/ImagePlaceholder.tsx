import { useState } from 'react'

interface Props {
  src?: string
  label: string
  caption?: string
  alt: string
  aspect?: '16/9' | '4/3' | '1/1' | '3/4'
  className?: string
  /** For person cards - renders the image as a portrait square with object-position top */
  portrait?: boolean
}

export function ImagePlaceholder({
  src,
  label,
  caption,
  alt,
  aspect = '16/9',
  className = '',
  portrait = false,
}: Props) {
  const [failed, setFailed] = useState(false)
  const paddingMap = { '16/9': '56.25%', '4/3': '75%', '1/1': '100%', '3/4': '133%' }
  const showPlaceholder = !src || failed

  return (
    <figure className={className} role="img" aria-label={alt}>
      <div
        className="relative w-full overflow-hidden rounded-lg"
        style={{
          paddingBottom: paddingMap[aspect],
          backgroundColor: 'var(--bg-raised)',
          border: showPlaceholder ? '1px solid var(--border)' : 'none',
        }}
      >
        {showPlaceholder ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              style={{ color: 'var(--text-muted)', opacity: 0.5 }}
            >
              <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="12" cy="14" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M9 7l1.5-3h3L15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p
              className="text-xs leading-snug"
              style={{
                fontFamily: 'var(--font-ui)',
                color: 'var(--text-muted)',
                maxWidth: '28ch',
              }}
            >
              {label}
            </p>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            onError={() => setFailed(true)}
            className="absolute inset-0 w-full h-full"
            style={{
              objectFit: 'cover',
              objectPosition: portrait ? 'center top' : 'center center',
            }}
          />
        )}
      </div>
      {caption && (
        <figcaption
          className="mt-2 text-xs"
          style={{ fontFamily: 'var(--font-ui)', color: 'var(--text-muted)', lineHeight: 1.5 }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
