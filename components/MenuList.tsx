import menuData from '@/data/menu.json';
import type { MenuItem } from './types';

const items = menuData as MenuItem[];

export default function MenuList() {
  return (
    <div id="menu-list" className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="font-heading text-6xl uppercase">Menu Selection</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <article key={item.name} className="card-fire">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-subheading text-sm uppercase tracking-[0.2em] text-burntOrange">{item.category}</p>
                <h3 className="font-subheading text-3xl">{item.name}</h3>
                <p className="mt-2 text-whiteSmoke/75">{item.description}</p>
              </div>
              <p className="font-subheading text-2xl text-whiteSmoke">{item.price}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
