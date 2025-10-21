import { useState } from 'react'

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
];
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <nav className="container-px mx-auto flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-lg font-bold">
          Camedia
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-white">{l.label}</a>
          ))}
          <a href="#contacto" className="btn-primary">Empezar</a>
        </div>
        <button onClick={() => setOpen(v => !v)} className="md:hidden btn-ghost" aria-label="Abrir menú">☰</button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70">
          <div className="container-px mx-auto flex flex-col py-3 text-sm">
            {links.map(l => (
              <a key={l.href} href={l.href} className="py-2 text-white/90" onClick={() => setOpen(false)}>{l.label}</a>
            ))}
            <a href="#contacto" className="btn-primary mt-2">Empezar</a>
          </div>
        </div>
      )}
    </header>
  )
}