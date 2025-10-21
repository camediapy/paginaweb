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

  // Bloquear scroll y listeners para cerrar
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    if (open) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKey)
    } else {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  // Cerrar al click fuera del panel
  useEffect(() => {
    const onClick = (e) => {
      if (!open) return
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [open])

  // Cerrar al navegar a un hash (ancla)
  useEffect(() => {
    const onHash = () => setOpen(false)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <nav className="container-px mx-auto flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-lg font-bold">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-primary/20 ring-1 ring-primary/30">🎛️</span>
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
          onClick={() => setOpen(v => !v)}
          className="lg:hidden btn-ghost"
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {/* Ícono hamburguesa simple */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </nav>

      {/* Backdrop */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-30 bg-black/50"></div>
      )}

      {/* Panel móvil */}
      <div
        id="mobile-menu"
        ref={panelRef}
        className={`lg:hidden absolute inset-x-0 top-16 z-40 origin-top border-t border-white/10 bg-black/80 backdrop-blur transition-all duration-200
          ${open ? 'opacity-100 scale-y-100' : 'pointer-events-none opacity-0 scale-y-95'}`}
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
          <a href="#contacto" className="btn-primary mt-2 w-full justify-center" onClick={() => setOpen(false)}>
            Empezar
          </a>
        </div>
      </div>
    </header>
  )
}
