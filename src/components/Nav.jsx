import { useEffect, useRef, useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const panelRef = useRef(null)

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

  // Cerrar con ESC
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Bloquear scroll cuando está abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <nav className="container-px mx-auto flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-lg font-bold">
          Camedia
        </a>

        {/* Desktop (lg+) */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-white">{l.label}</a>
          ))}
          <a href="#contacto" className="btn-primary">Empezar</a>
        </div>

        {/* Botón hamburguesa (hasta lg-1) */}
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

      {/* Backdrop + Panel móvil */}
      <div className={`lg:hidden ${open ? 'fixed inset-0 z-40' : 'hidden'}`}>
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
        <div
          id="mobile-menu"
          ref={panelRef}
          className="absolute inset-x-0 top-16 z-50 origin-top border-t border-white/10 bg-black/80 backdrop-blur"
        >
          <div className="container-px mx-auto flex flex-col py-3 text-sm">
            {links.map(l => (
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
      </div>
    </header>
  )
}
