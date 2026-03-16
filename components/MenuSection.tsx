import MenuCard from '@/components/MenuCard';
import { menuItems } from '@/data/menu';

export default function MenuSection() {
  return (
    <section id="menu-list" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 max-w-3xl">
        <p className="font-accent text-sm uppercase tracking-[0.25em] text-burntOrange">Dark • Fire • Smoke</p>
        <h2 className="mt-3 font-heading text-5xl uppercase text-whiteSmoke md:text-6xl">Premium BBQ Menu</h2>
        <p className="mt-4 text-lg text-whiteSmoke/75">
          Crafted with slow smoke, wood fire, and bold character. Discover our signature plates for a true premium
          BBQ experience.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {menuItems.map((item) => (
          <MenuCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}
