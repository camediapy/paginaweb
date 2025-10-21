import { useEffect, useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#beneficios', label: 'Beneficios' },
    { href: '#para-quien', label: 'Para quién' },
    { href: '#features', label: 'Features' },
    { href: '#testimonios', label: 'Testimonios' },
    { href: '#integraciones', label: 'Integraciones' },
    { href: '#precios', label: 'Precios' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contacto', label: 'Contacto' },
  ]

  // ESC para cerrar
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // bloquear scroll al abrir
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <nav className="container-px mx-auto flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-lg font-bold">
          <img className="inline-flex h-7 w-auto items-center justify-center" src='camedia_logo_white.png'></img>
          Camedia
        </a>

        {/* Desktop (lg+) */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-white">
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="btn-primary">Empezar</a>
        </div>

        {/* Hamburguesa (≤ lg-1) */}
        <button
          type="button"
          onClick={() => setOpen(v => !v)}
          className="lg:hidden btn-ghost"
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </nav>

      {/* Backdrop (fade) */}
      <div
        className={`
          lg:hidden fixed inset-0 z-40 transition-opacity duration-200
          [transition-timing-function:cubic-bezier(.4,0,.2,1)]
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Panel móvil (fade + slide-down) */}
      <div
        id="mobile-menu"
        className={`
          lg:hidden fixed inset-x-0 top-16 z-50 origin-top
          border-t border-white/10 bg-black/80 backdrop-blur
          will-change-transform
          [animation-timing-function:cubic-bezier(.16,1,.3,1)]
          ${open ? 'animate-fade-slide-down opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
        `}
      >
        <div className="container-px mx-auto flex flex-col py-3 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="py-2 text-white/90"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="btn-primary mt-2 w-full justify-center"
            onClick={() => setOpen(false)}
          >
            Empezar
          </a>
        </div>
      </div>
    </header>
  )
}
