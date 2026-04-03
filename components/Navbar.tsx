import Image from "next/image";

const navItems = ['Home', 'Menu', 'Location', 'Contact'];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-transparent backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

        <a href="#home" className="flex items-center">
          <Image
            src="/images/logo/logo-transparant.png"
            alt="The Gripiz"
            width={220}
            height={100}
            priority
            className="h-16 w-auto"
          />
        </a>

        <nav className="hidden gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-accent text-lg uppercase tracking-wide text-whiteSmoke transition hover:text-burntOrange"
            >
              {item}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn-primary text-whiteSmoke text-sm md:text-base">
          Reserve Table
        </a>

      </div>
    </header>
  );
}
