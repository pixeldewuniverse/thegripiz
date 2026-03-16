const navItems = ['Home', 'Menu', 'Location', 'Contact'];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-charcoal/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-heading text-4xl tracking-wide text-whiteSmoke">
          THE GRIPIZ
        </a>
        <nav className="hidden gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-accent text-lg uppercase tracking-wide text-whiteSmoke/85 transition hover:text-burntOrange"
            >
              {item}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-primary text-sm md:text-base">
          Reserve Table
        </a>
      </div>
    </header>
  );
}
