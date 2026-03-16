import Image from 'next/image';
import type { MenuItem } from '@/data/menu';

type MenuCardProps = {
  item: MenuItem;
};

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-steel bg-gradient-to-b from-smoke to-charcoal/90 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-fire">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-accent text-2xl text-whiteSmoke">{item.name}</h3>
          <p className="whitespace-nowrap font-accent text-xl text-burntOrange">{item.price}</p>
        </div>
        <p className="text-sm leading-relaxed text-whiteSmoke/80">{item.description}</p>
      </div>
    </article>
  );
}
