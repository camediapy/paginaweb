export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-px mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-white/60">© {new Date().getFullYear()} Camedia. Todos los derechos reservados.</p>
        <div className="flex items-center gap-3 text-sm">
          <a href="#" className="text-white/70 hover:text-white">Instagram</a>
          <a href="#" className="text-white/70 hover:text-white">X/Twitter</a>
          <a href="#" className="text-white/70 hover:text-white">GitHub</a>
        </div>
      </div>
    </footer>
  )
}